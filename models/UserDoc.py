from mongoengine import *
import datetime


class UserDoc(Document):
    name = StringField(required=True, max_length=20)
    lastName = StringField(required=True, max_length=30)
    email = EmailField(required=True, max_length=50, unique=True)
    userCreate = ObjectIdField(default='')
    date_modified = DateTimeField(default=datetime.datetime.now)

    meta = {'db_alias': 'db_base'}

    def parseJson(self):
        if self.id is not None:
            return({
                "id": str(self.id),
                "name": self.name,
                "email": self.email,
                "lastName": self.lastName,
                "create": self.date_modified,
            })
        return None


class UserDataConfirm(Document):
    userId = ObjectIdField(required=True, primary_key=False)
    number_phone = StringField(default='')
    fecha_nac = DateField()
    puesto = StringField(default='')
    access_menu = ListField(default=[])
    status = BooleanField(default=False)

    meta = {'db_alias': 'db_base'}

    def parseJson(self):
        if self.userId is not None:
            return {
                'number_phone': self.number_phone,
                'feha_nac': self.fecha_nac,
                'puesto': self.puesto,
                'access_menu': self.access_menu,
                'status': self.status
            }
        return None
