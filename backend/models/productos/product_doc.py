
from mongoengine import *
import datetime


class Product_DOC(Document):
    description = StringField(required=True)
    image = StringField(required=False)
    costo = FloatField(default=0.0)
    precio = FloatField(default=0.01)
    margen = FloatField(default=20)
    medida = StringField(default='KG')
    cantidad = FloatField(default=0, min_value=0)
    unidades = FloatField(min_value=0, required=True)
    codigo_alterno = ListField(field=StringField, default=[])
    date_create = DateField(default=datetime)
    date_update = DateField(default=datetime)
    user_create = ObjectIdField(required=True)
    user_update = ObjectIdField(required=True)

    meta = {'db_alias': 'db_base'}

    def toJSON(self):
        if self.id not None:
            return {
                'id': self.id,
                'descripcion': self.descripcion,
                'image': self.image,
                'costo': self.costo,
                'precio': self.precio,
            }
        return None
