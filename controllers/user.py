
from functions.UserFunctions import userInsert, userId, getUser
from functions.check_token import token_required


@token_required
def read(current_user, email=''):
    return getUser(email)


@token_required
def getOne(current_user, id):
    return userId(id)


@token_required
def create(current_user, user):
    name = user.get('name', None)
    lasName = user.get('lastname', None)
    email = user.get('email', None)

    if name and lasName and email:
        user = userInsert(
            name=name,
            email=email,
            lastName=lasName,
            userCreate=current_user
        )
        status = False
        message = 'user not save, check email!'
        if user is not None:
            print('ok')
            status = True
            message = 'user save!'
        return {'status': status, 'mesage': message, 'user': user}
    else:
        return {'status': False, 'mesage': 'faltan parametros'}


def confirm(data):
    id = data.get('id', None)
    phone = data.get('phone', None)
    date = data.get('date', None)
    puesto = data.get('puesto', None)
    password = data.get('password', None)
    nPassword = data.get('nPassword', None)

    return userConfirm(id, phone, date, puesto, password, nPassword)
