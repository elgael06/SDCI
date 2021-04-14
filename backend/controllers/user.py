
from backend.functions.UserFunctions import userInsert, userId, getUser, userConfirm
from backend.functions.check_token import token_required


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
    email = data.get('email', None)
    phone = data.get('phone', None)
    date = data.get('date', None)
    password = data.get('password', None)
    nPassword = data.get('nPassword', None)

    return userConfirm(email, phone, date, password, nPassword)
