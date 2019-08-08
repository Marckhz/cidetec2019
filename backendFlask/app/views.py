
from flask import Blueprint
from flask import render_template, request, flash, session, redirect,url_for
from flask import request, jsonify
from functools import wraps


import requests as req

import pprint
from . import mongo
from . import bcrypt
from datetime import datetime

#from flask import jsonify
from bson.json_util import loads, dumps


from pymongo import ReturnDocument
#from flask_jwt import JWT, jwt_required, current_identity
from werkzeug.security import safe_str_cmp

from flask_cors import CORS, cross_origin
#import jwt
import os

import pprint

from flask_login import login_required, login_user

from . import login_manager

from .model import User


import base64

import bson
from bson.objectid import ObjectId


from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
    get_jwt_identity
)


page = Blueprint('page', __name__)

key = 'secret'


"""
Improve login
"""
@page.route('/login', methods=['GET', 'POST'])
def login():


  auth_user = {}

  user = mongo.db.users.find_one({
    "username":request.json.get('username'),
    })
  user_to_auth = None
  password = None
  if user is not None:
    for users in user:
      user_to_auth  = user['username']
      password = user['password']
  else:
    return "objecto es None"

  if bcrypt.check_password_hash(password, request.json.get('password')):
    access_token = create_access_token(identity=user_to_auth)

    return jsonify(jwt=access_token), 200
  else:
    return "False"
  return dumps({"user":user_to_auth})


@page.route('/register', methods =['POST'])
def register():

  user = mongo.db.users.insert_one({
    "username": request.json.get("username"),
    "password":bcrypt.generate_password_hash(request.json.get("password")),
    "email": request.json.get("email"),
    "first_name": request.json.get("first_name"),
    "last_name": request.json.get("last_name")
    })

  doc = user.inserted_id

  return dumps({"doc":doc})

@page.route('/register_product/', methods=['GET','POST'])
@jwt_required
def register_product():
  """
  0 equivale a nuevo producto,
  1 a producto conocido
  """
  document = mongo.db.product.insert_one({
    "username":get_jwt_identity(),
    "product":[{
            "product_name":request.json.get("product_name"),
            "product_type":request.json.get("product_type"),
            "number_surveys":request.json.get("number_surveys")
      }]

    })
  docs = document.inserted_id

  return dumps({"docs":docs}), 200


@page.route('/emphatize/interview/<product>', methods=['POST'])
@jwt_required
def interview(product):

  document = mongo.db.product.find_one_and_update({
    "username":get_jwt_identity(),
    "product.product_name":product},
    {"$push":{"product":{"emphatize":[{"interview":[{
              "market":request.json.get("market"),
              "gender":request.json.get("gender"),
              "age_range_start":request.json.get("age_range_start"),
              "age_range_end":request.json.get("age_range_end"),
              "description":request.json.get("description")
            }]
          }]
        }
      }
    }
  )
  return dumps({"docs":document}), 200

@page.route('/emphatize/check/interview/', methods=['GET'])
#@jwt_required
def interview_check():

  document = mongo.db.product.find_one({
    #"username":get_jwt_identity(),
    "product.product_name":"guitar",
    #"product.emphatize":"interview"
    })

  docs = {}
  for k,v in document['product'][1]:
    docs = k,v
  return dumps({"docs":docs}),200

@page.route('/emphatize/derivation/<product>', methods=['GET', 'POST'])
def derivation(product):

  document = mongo.db.product.find_one_and_update({
    #"username":get_jwt_identity(),
    "product.product_name":product},
    {"$addToSet":{"product.1.emphatize":{
        "derivation":{
            "attributes":request.json.get("attributes")
            }
          }
        }
      }
    )
  print(document)
    
  return dumps({"docs":document}),200






@page.route('/create', methods= ['GET', 'POST'])
def create_product():

  document = mongo.db.product.insert_one({
      "username":request.json.get("username"),
      "product":request.json.get("product",""),
      "attributes":request.json.get("attributes","")
    })
  return dumps(document.inserted_id)

@page.route('/dashboard/', methods=['GET'])
@jwt_required
def dashboard():
  docs = []
  documents = mongo.db.product.find({})
  for item in documents:
    docs.append(item)
  print(docs)

  print(request.headers)
  return dumps({"docs":docs})


@page.route('/encuesta/responder/', methods=['POST'])
def responder_encuesta():

  document = mongo.db.encuestas.insert_one({
    "user_info":request.json.get("user_info"),
    "results":request.json.get("results"),
    "product":request.json.get("product")
    })
  return "200"



@page.route('/emphatize/<product>', methods=['GET'])
@jwt_required
def emphatize_menu(product):

  document = mongo.db.product.find_one_or_404({"username":get_jwt_identity(), "product_name":product})

  return dumps({"docs":document}), 200





@page.route('/emphatize/classification/<product>', methods=['GET', 'POST'])
@jwt_required
def classification(product):

  document = mongo.db.final_attributes.insert_one({
    "final_attributes":request.json.get("final_attributes"),
    "product_name":request.json.get("product_name"),
    "username":get_jwt_identity()
    })

  return dumps({"docs":document.inserted_id}),200


@page.route('/encuesta/<usernames>-<product>', methods=['GET'])
def survey_single_element(usernames, product):

  document = mongo.db.product.find_one_or_404({"usernames":usernames, "product":product}) 
      

  return dumps({"docs":document}), 200

#@page.route()