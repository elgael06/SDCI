
from functions.UserFunctions import userInsert, userId, getUser


def read(email=''):
    return getUser(email)

def getOne(id):
    return userId(id)


def create(user):
    name = user.get('name', None)
    lasName = user.get('lastname', None)
    email = user.get('email', None)

    if name and lasName and email:
        user = userInsert(name=name, email=email, lastName=lasName)
        status = False
        message = 'user not save, check email!'
        if user is not None:
            print('ok')
            status = True
            message = 'user save!'
        return {'status': status, 'mesage': message, 'user': user}
    else:
        return {'status': False, 'mesage': 'faltan parametros'}
