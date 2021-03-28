
from mongoengine import connect

DB = 'base'
HOST = 'mongodb+srv://admin:1234@cluster0.4geja.mongodb.net/'
LOCALHOST = "mongodb://127.0.0.1:27017/"
PORT = 27017
# Conexion base
connect(host=HOST+DB)
