from functions.SesionFunctions import updatePasswordSesion, loginSesion
from functions.UserFunctions import userEmail


def check(sesion):
    email = sesion.get('email', None)
    print(email)
    comp = userEmail(email)
    if comp['user'] is not None:
        resp = loginSesion()
        if resp['status']:
            return {'status': True, 'sesion': comp['user'], 'token': resp['token'], 'message': 'sesion iniciada!'}
        elif email:
            return {'status': False, 'sesion': None, 'message': 'Error en la contraseña!'}
    return {'status': False, 'sesion': None, 'message': 'Error: El email {email}  no existe!'.format(email=email)}


def update(sesion):
    email = sesion.get('email', None)
    password = sesion.get('password', None)
    nPassword = sesion.get('newPassword', None)
    comp = userEmail(email)

    if comp['user'] is not None:
        sesionUpdate = updatePasswordSesion(
            email=email, password=password, nPassword=nPassword)
        if sesionUpdate:
            return {'message': 'contraseña actualizada...', 'status': True}
        return {'message': 'Error al actualizar contraseña !', 'status': False}
