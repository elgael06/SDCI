
from backend.models.productos.product_doc import Product_DOC


class ProductsManager():

    # propuedades
    id = ''
    description = ''
    costo = 0
    precio = 0
    margen = 20
    image = ''
    medida = ''
    cantidad = 0
    unidades = 0
    codigo_alterno = []
    user_create = ''
    date_create = None
    user_update = ''
    date_update = None

# init clase
    def __init__(self):
        ###
        # inicializa la clase con propiesades por default
        ###
        print('manejador productos...')

    def __init__(
        self,
        description='',
        costo=0,
        precio=0,
        margen=20,
        image='',
        medida='',
        cantidad=0,
        unidades=0,
        codigo_alterno=[],
        user_create='',
    ):
        ###
        # inicializa la clase con asignandole valores a las priedades.
        ###
        print('manejador producto')
        self.description = description
        self.costo = costo
        self.precio = precio
        self.margen = margen
        self.image = image
        self.medida = medida
        self.cantidad = cantidad
        self.unidades = unidades
        self.codigo_alterno = codigo_alterno
        self.user_create = user_create

    def __init__(self, id):
        ###
        # inicializa la clase con propiesades llenadas por id de producto
        ###
        self.consultarId(id)

# metodos de manejo de procutos

    def consultarId(self, id):
        print('consulta producto id= {id}'.format(id=id))
        consulta = Product_DOC.objects(id=id).first()
        if consulta is not None:
            self.description = consulta.description
            self.costo = consulta.costo
            self.precio = consulta.precio
            self.margen = consulta.margen
            self.image = consulta.image
            self.medida = consulta.medida
            self.cantidad = consulta.cantidad
            self.unidades = consulta.unidades
            self.codigo_alterno = consulta.codigo_alterno
            self.user_create = consulta.user_create
            self.date_create = consulta.date_create
            self.date_update = consulta.date_update
            self.user_update = consulta.user_update

    def crear(self):
        ###
        # crear y guardar un nuevo procuto
        ###
        try:
            new_prod = Product_DOC()
            new_prod.description = self.description
            new_prod.image = self.image
            new_prod.medida = self.medida
            new_prod.codigo_alterno = self.codigo_alterno
            new_prod.user_create = self.user_create
            new_prod.save()

            if new_prod.id is None:
                return {'status': False, 'message': 'El producto no se pudo guardar!!!'}

            self.id = new_prod.id

            return {'status': True, 'message': 'el productos fue guardado con exito...'}
        except:
            return {'status': False, 'message': 'Error al guardar'}

    def consutaTodos(self):
        try:
            productos = []
            for item in Product_DOC().objects:
                productos.append(item.toJSON())

            return {'status': False, 'message': 'Error al Consultar datos!!!', 'data': productos}
        except:
            return {'status': False, 'message': 'Error al Consultar datos!!!', 'data': []}

    def toJSON(self):
        ###
        # tranforma los datos del manejador en objeto.
        ###
        return {
            'id': self.id,
            'description': self.description,
            'costo': self.costo,
            'precio': self.precio,
            'margen': self.margen,
            'image': self.image,
            'medida': self.medida,
            'cantidad': self.cantidad,
            'unidades': self.unidades,
            'codigo_alterno': self.codigo_alterno,
            'user_create': self.user_create,
            'date_create': self.date_create,
            'user_update': self.user_update,
            'date_update': self.date_update
        }
