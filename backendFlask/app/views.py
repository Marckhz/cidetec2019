
from flask import Blueprint
from flask import render_template, request, flash, session, redirect,url_for
from flask import request, jsonify
from functools import wraps


import pprint
from . import mongo
from . import bcrypt
from datetime import datetime

#from flask import jsonify
from bson.json_util import loads, dumps


from pymongo import ReturnDocument
from flask_jwt import JWT, jwt_required, current_identity
from werkzeug.security import safe_str_cmp

from flask_cors import CORS, cross_origin
import jwt
import os

import pprint

from flask_login import login_required, login_user

from . import login_manager

from .model import User


import base64

import bson
from bson.objectid import ObjectId



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
    token = jwt.encode({'username':user_to_auth}, key)
    print(token)
    return dumps({ "user":user, 'jwt':token.decode('UTF-8') })
  else:
    return "False"
  return dumps({"user":user_to_auth})

def token_required(f):
  @wraps(f)
  def decorated(*args, **kwargs):
    token = None

    if 'x-access-token' in request.headers:
      token = request.headers['x-access-token']

    if not token:
      return jsonify({'message':"no token"})
    try:
      data = jwt.decode(token, key)
      current_user = mongo.db.users.find_one({"username":data['username']})
      print(current_user)
    except:
      return jsonify({"message":"token invalid"}, 401)

    return f(current_user, *args, **kwargs)

  return decorated

@page.route('/register', methods =['POST'])
def register():

  user = mongo.db.users.insert_one({
    "username": request.json.get("username"),
    "password":bcrypt.generate_password_hash(request.json.get("password")),
    "email": request.json.get("email"),
    "first_name": request.json.get("first_name"),
    "last_name": request.json.get("last_name")
    })

  return "200"

@page.route('/create', methods= ['GET', 'POST'])
def create_product():

  document = mongo.db.product.insert_one({
      "username":request.json.get("username"),
      "product":request.json.get("product",""),
      "attributes":request.json.get("attributes","")
    })
  return dumps(document.inserted_id)

@page.route('/dashboard', methods=['GET','POST'])
def dashboard():
  docs = []
  documents = mongo.db.product.find({})
  for item in documents:
    docs.append(item)
  print(docs)
  return dumps({"docs":docs})



@page.route('/dashboard/my-surveys/<usernames>/', methods=['GET'])
def profile_dashboard(usernames):

  docs = []
  documents = mongo.db.product.find({"usernames":usernames})

  for item in documents:
    docs.append(item)

  return dumps({"docs":docs})


@page.route('/survey/answer-survey/<ObjectId:_id>/', methods=['GET', 'POST'])
def survey_single_element(_id):
  document = mongo.db.product.find_one_or_404({"_id":_id})

  update_document = mongo.db.answers.insert_one({
    "guest_name":request.json.get("guest_name"),
    "profile":request.json.get("profile"),
    "work_location":request.json.get("work_location")
    "kano_anwers":request.json.get("kano_anwers"),
    "product":document['product'],
    "survey_owner":document['usernames']
    })

  return dumps({"docs":document})


