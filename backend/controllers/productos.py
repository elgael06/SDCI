
from backend.functions.check_token import token_required
from backend.functions.productos.ProcustosFunctios import ProductsManager


@token_required
def consulta(idUsr, id):
    if id is not None:
        prod = ProductsManager(id=id)
        return prod.toJSON()
    return {'status': False, 'message': 'Error al guardar'}


@token_required
def guardar(idUsr, datos):
    prod = ProductsManager()

    prod.description = datos.get('description', None)
    prod.image = datos.get('image', None)
    prod.medida = datos.get('medida', None)
    prod.codigo_alterno = datos.get('codigo_alterno', None)
    prod.user_create = datos.get('user_create', None)

    return prod.crear()


@token_required
def consularTodos(idUsr):
    productos = ProductsManager()
    return productos.consutaTodos()


@token_required
def modificar(idUsr):
    return 'ok'
