
from backend.functions.UserFunctions import userInsert, userId, getUser, userConfirm,updateUser,updateDatePuesto
from backend.functions.check_token import token_required


@token_required
def read(current_user, email=''):
    return getUser(email)


@token_required
def getOne(current_user, id):
    return userId(id)


@token_required
def create(current_user,user):
    name = user.get('name', None)
    lasName = user.get('lastname', None)
    email = user.get('email', None)
    puesto = user.get('puesto', None)

    if name and lasName and email and puesto:
        user = userInsert(
            name=name,
            email=email,
            lastName=lasName,
            puesto=puesto,
            userCreate=current_user
        )
        return user
    else:
        return {'status': False, 'message': 'faltan parametros!!!'}


@token_required
def update(current_user, id, user):
    # try:
    if True:
        name = user.get('name', None)
        lasName = user.get('lastname', None)
        email = user.get('email', None)
        puesto = user.get('puesto', None)
        
        exite = userId(id)
        if exite['user']:
            updateUser(
                current_user=current_user,
                id=id,name=name,
                last_name=lasName,
                email=email
                )
            updateDatePuesto(id,puesto)
            return {'message': 'Datos actualizado...', 'status': True}        
        return {'message': 'Usuario no encontrado!', 'status': False}
    # except :
    #     return {'message': 'Error al guardar Usuario!', 'status': False}, 404


def confirm(data):
    email = data.get('email', None)
    phone = data.get('phone', None)
    date = data.get('date', None)
    password = data.get('password', None)
    nPassword = data.get('nPassword', None)

    return userConfirm(email, phone, date, password, nPassword)
