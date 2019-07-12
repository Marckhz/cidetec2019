
from flask import Blueprint
from flask import render_template, request, flash, session, redirect,url_for
from flask import request, jsonify
from functools import wraps



from . import mongo
from . import bcrypt
from datetime import datetime

#from flask import jsonify
from bson.json_util import loads, dumps


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



page = Blueprint('page', __name__)

key = 'secret'


"""
Improve login
"""




@page.route('/login', methods=['GET', 'POST'])
def login():

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
    return dumps({ "user":user, 'jwt':token.decode('UTF-8') })
  else:
    return "False"
  return "200"

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

@page.route('/create', methods= ['POST'])
def create_product():

  element = mongo.db.product.insert_one({
    "username": request.json.get("username"),
    "product": request.json.get("product"),
    "attributes":request.json.get("attributes") 
    })

  return "200"

@page.route('/survey', methods = ['GET','POST'])
@token_required
def survey(current_user):

  answer = mongo.db.product.find_one_and_update({"producto":"bocina"},
    {"$push":{"opinion":{"$each":request.json.get("opinion") } }}
    )

  return dumps(answer)

@page.route('/kano', methods=['POST'])
def kano():

  opinion = {

    "name":"pedro",
    "product":"bocina",
    "attribute":"negra",
    "opinion":"me gusta",
    "product_owner":"marquito"

  }

  to_json = dumps(opinion)

  answer = mongo.db.kano_model.insert_one({

    "opinion":opinion

    })

  return "ok"

@page.route('/look_k', methods=['GET'])
def kano_l():

  documents = mongo.db.product.find({
    "producto":"bocina",
    "username":"marco"
    }, limit=0)

  #for document in documents:
  #  print(document)

  return dumps(documents)