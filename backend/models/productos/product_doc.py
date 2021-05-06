
from mongoengine import *
import datetime


class Product_DOC(Document):
    description = StringField(required=True)
    image       = ImageField(required=False)
    
    medida = StringField(default='KILO')
    unidades = FloatField(min_value=0, default=0)
    
    costo       = FloatField(default=0.0)
    precio      = FloatField(default=0.01)
    margen      = FloatField(default=20)
    iva         = FloatField(default=16)

    
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
