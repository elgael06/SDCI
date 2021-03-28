
from mongoengine import connect

DB = 'base'
HOST = 'mongodb+srv://admin:1234@cluster0.4geja.mongodb.net/base'
HOST_2 = 'mongodb+srv://admin:1234@cluster0.4geja.mongodb.net/base?retryWrites=true&w=majority'
LOCALHOST = "mongodb://127.0.0.1:27017/"
PORT = 27017
# Conexion base
# connect(host=HOST_2)
connect(
    db='base',
    username='admin',
    password='1234',
    host='mongodb+srv://admin:1234@cluster0.4geja.mongodb.net/base',
    alias='db_base'
)
