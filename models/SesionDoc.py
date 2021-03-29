from mongoengine import *
import datetime
from werkzeug.security import generate_password_hash

DEFAULT_PASSWORD = generate_password_hash('123456')


class SesionDoc(Document):
    email = EmailField(required=True, max_length=50,unique=True)
    password = StringField(default=DEFAULT_PASSWORD)
    status = BooleanField(default=False)
    token = StringField(default='')
    create_date = DateField(default=datetime.datetime.now)
    update_date = DateField(default=datetime.datetime.now)

    meta = {'db_alias': 'db_base'}

