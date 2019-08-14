
from flask import Blueprint
from flask import render_template, request, flash, session, redirect,url_for
from flask import request, jsonify
from functools import wraps

from flask_mail import Message

import requests as req

import pprint
from . import mongo
from . import bcrypt
from datetime import datetime
from collections import defaultdict


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
from . import mail
from .model import User


import base64

import bson
from bson.objectid import ObjectId

from flask import current_app

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

    return dumps({"jwt":access_token,"username":user_to_auth }), 200
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

@page.route('/projects/', methods=['GET'])
@jwt_required
def get_projects():

  dict_=defaultdict(list)
  for element in mongo.db.product.find({"username":get_jwt_identity()}):
    for i,j in element['product'][0].items():
     if(i=='product_name'):
      print(i,j)
      dict_[i].append(j)

  return dumps({"docs":dict_}),200




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

@page.route('/emphatize/derivation/<product>', methods=['POST'])
@jwt_required
def derivation(product):

  document = mongo.db.product.find_one_and_update({
    "username":get_jwt_identity(),
    "product.product_name":product},
    {"$addToSet":{"product.1.emphatize":{
        "derivation":{
            "attributes":request.json.get("attributes")
            }
          }
        }
      }
    )
  print("soy document ", document)
    
  return dumps({"docs":document}),200

@page.route('/emphatize/classification/<product>', methods=['POST'])
@jwt_required
def classification(product):

  document = mongo.db.product.find_one_and_update({
    "username":get_jwt_identity(),
    "product.product_name":product},
    {"$addToSet":{"product.1.emphatize":
        {"classification":{
            "final_attributes":request.json.get("final_attributes")
          }
        }
      }
    }
  )   
  print("soy document", document)
  return dumps({"docs":document}),200

@page.route('/emphatize/update/classification<product>', methods=['POST'])
@jwt_required
def update_classification(product):

  document = mongo.db.product.find_one_and_update({
    "username":get_jwt_identity(),
    "product.product_name":product},
    {"$set":{"product.1.emphatize":{"classification":{
      "final_attributes":request.json.get("final_attributes")
          }
        }
      }
    }  
  )
  print(document)
  return dumps({"docs":document}),200

@page.route('/emphatize/final_attributes/<product>', methods=['POST'])
@jwt_required
def final_attributes(product):

  document = mongo.db.product.find_one_and_update({
    "username":get_jwt_identity(),
    "product.product_name":product},
    {"$addToSet":{"product.1.emphatize":
        {"final":{
          "final_attributes":request.json.get("final_attributes")
            }   
          }
        }
      }
    )
  return dumps({"docs":document}),200
  

###################################
##                               ##
##  FUNCIONES GET PARA CHECAR    ##
##    EL ESTADO DE LA FASE       ##
##        { EMPHATIZE }          ##
##               user                ##
###################################


@page.route('/emphatize/check/interview/<product>', methods=['GET'])
@jwt_required
def interview_check(product):

  document = mongo.db.product.find_one({
    "username":get_jwt_identity(),
    "product.product_name":product,
    })
  docs = {}
  this = {}
  other = {}
  try:
    for k,v in document['product'][1].items():
      docs = k,v
      this[k] = v
      for element in this['emphatize']:
        for i,j in element.items():
          if(i=='interview'):
            other[i]=j
  except:
    pass

  return dumps({"docs":other}),200


@page.route('/emphatize/check/derivation/<product>', methods=['GET'])
@jwt_required
def derivation_check(product):

  document = mongo.db.product.find_one({
    "username":get_jwt_identity(),
    "product.product_name":product})
  docs = {}
  this = {}
  other = {}
  try:
    for k,v in document['product'][1].items():
        docs = k,v
        this[k] = v
        for element in this['emphatize']:
          for i,j in element.items():
            if(i=='derivation'):
              other[i]=j
  except:
    pass
  return dumps({"docs":other}), 200

@page.route('/emphatize/check/classification/<product>', methods=['GET'])
@jwt_required
def classification_check(product):

  document = mongo.db.product.find_one({
    "username":get_jwt_identity(),
    "product.product_name":product})

  new_dict={}
  docs={}
  try:
    for k,v in document['product'][1].items():
      new_dict[k]=v
      for element in new_dict['emphatize']:
        for i, j in element.items():
          if(i=='classification'):
            docs[i]=j
  except:
    pass
  return dumps({"docs":docs}), 200

@page.route('/emphatize/check/final/<product>', methods=['GET'])
@jwt_required
def final_check(product):

  document = mongo.db.product.find_one({
    "username":get_jwt_identity(),
    "product.product_name":product})

  new_dict = {}
  docs={}

  try:
    for k,v in document['product'][1].items():
      new_dict[k]=v
      for element in new_dict['emphatize']:
        for i, j in element.items():
          if(i=='final'):
            docs[i]=j
  except:
    pass

  return dumps({"docs":docs}),200



@page.route('/survey/total/', methods=['GET'])
def total_survey_by_user():

  dict_ = defaultdict()
  document = mongo.db.product.find_one_or_404({
    "username":"marck",
    "product.product_name":"PAPEL"})

  for k,v in document['product'][0].items():
    if(k == 'number_surveys'):
      dict_[k]=v
  
  return dumps({"docs":dict_}), 200


@page.route('/survey/count/', methods=['GET'])
def total_survey_counter():

  dict_ = defaultdict()
  clients_dict = defaultdict()
  document = mongo.db.product.find_one_or_404({
    "username":"marck",
    "product.product_name":"PAPEL"})

  for k,v in document['product'][2].items():
    dict_[k]=v

  for i,j in dict_['survey'].items():
    clients_dict[i] = j

  total_surveys=0
  for element, in_list in clients_dict.items():
    for z in in_list:
      total_surveys+=1

  print(total_surveys)
  return dumps({"docs":total_surveys})



###########################
###########################
##                       ##
##   Funciones POST      ##
##      invitados        ##
##                       ##
###########################
###########################

@page.route('/survey/<username>/<product>', methods=['POST'])
def survey(username, product):


  document = mongo.db.product.find_one_and_update({
    "username":username,
    "product.product_name":product},
    {"$addToSet":{"product.2.survey.clients":{
              "first_name":request.json.get("first_name"),
              "last_name":request.json.get("last_name"),
              "address":request.json.get("address"),
              "email":request.json.get("email"),
              "gender":request.json.get("gender"),
              "age":request.json.get("age"),
              "occupation":request.json.get("occupation"),
              "workplace":request.json.get("workplace"),
              "results":request.json.get("results")
              }
            }
          }
    )
  print(document)
  return dumps({"docs":document}),200



####################
####################
##                ##
##      Mail      ##
##    Service     ##
##                ##  
##                ##
####################

@page.route('/email/', methods=['POST'])
def email():
  url = request.json.get("url")
  ip ='192.168.1.79:3000/'+url
  msg = Message("Hola te invito a contestar la siguiente Encuesta Marco",
          sender=current_app.config['MAIL_USERNAME'],
          recipients=['marcohdes94i@gmail.com'],
          body=("link ->{0}").format(ip) ) 
  mail.send(msg)

  return "200"


@page.route('/email/survey_notification/', methods=['POST'])
def email_survey_notification():
  url = request.json.get("url")
  ip='192.168.1.79:3000/'+url
  msg = Message("Encuesta Terminada",
    sender=current_app.config['MAIL_USERNAME'],
    recipients= ['marcohdes94i@gmail.com'],
    body="Tu encuesta ha sido finalizada, por favor, continue el proceso")
  mail.send(msg)

  return "200"
