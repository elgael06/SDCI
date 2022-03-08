
from mongoengine import connect
import os

connect(
    db=os.environ.get("DB_NAME"),
    username=os.environ.get("DB_USER"),
    password=os.environ.get("DB_PASSWORD"),
    host=os.environ.get("DB_HOST"),
    alias='db_base'
)
