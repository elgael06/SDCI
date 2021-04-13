from backend.functions.SesionFunctions import updatePasswordSesion, loginSesion
from backend.functions.UserFunctions import userEmail, checkDatosUser


def check(sesion):
    email = sesion.get('email', None)
    comp = userEmail(email)
    print(comp)
    if comp['user'] is not None:
        resp = loginSesion()
        datos = checkDatosUser(comp['user']['id'])
        if resp['status'] and resp['active']:
            return {
                'status': resp['status'],
                'sesion': comp['user'],
                'token': resp['token'],
                'message': 'sesion iniciada!',
                'active': resp['active'],
                'info': datos
            }
        elif not resp['active']:
            return {
                'status': resp['status'],
                'active': resp['active'],
                'message': 'Sesion desactivada!!!',
                'active': resp['active'],
                'info': datos
            }
        elif email:
            return {
                'status': resp['status'],
                'sesion': None,
                'message': 'Error en la contraseña!',
                'active': resp['active'],
                'info': datos
            }
    return {
        'status': False,
        'sesion': None,
        'message': 'Error: El email {email}  no existe!'.format(email=email),
        'active': False,
        'info': datos
    }


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
