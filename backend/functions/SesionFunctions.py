
import datetime
import uuid
from connexion import request
from werkzeug.security import generate_password_hash, check_password_hash
from backend.models.SesionDoc import SesionDoc, DEFAULT_PASSWORD


def createSesion(email=''):
    try:
        sesion = SesionDoc(email=email)
        print(sesion)
        sesion.save()
        print('save sesion...')
        return True
    except:
        print('error')
        return False

def updateEmail(email='',new_email=''):
    print(email)
    sesion = SesionDoc.objects(email=email).first()
    sesion.email = new_email
    sesion.save()


def updatePasswordSesion(email='', password='', nPassword=''):
    try:
        sesion = SesionDoc.objects(email=email).first()
        print(sesion.email, password)
        check_passw = check_password_hash(sesion.password, password)
        print('check_passw ', check_passw)
        hash_passw = generate_password_hash(nPassword)

        if sesion is not None and check_passw:
            sesion.password = hash_passw
            sesion.update_date = datetime.datetime.now
            sesion.status = True
            sesion.save()
            return True
        else:
            return False
    except:
        return False


def restorePassword(email):
    try:
        sesion = SesionDoc.objects(
            email=email
        )
        if sesion is not None:
            sesion.password = DEFAULT_PASSWORD
            sesion.save()
            return {'message': 'password restaurado a Async12@ ...', 'status': True}
    except:
        return {'message': 'Error al restaur el password!', 'status': False}


def loginSesion():
    try:
        auth = request.authorization
        if auth is not None and auth.username and auth.password:
            usuario = SesionDoc.objects(
                email=auth.username,
            ).first()

            check_passw = check_password_hash(usuario.password, auth.password)

            if usuario is not None and check_passw:
                hash_passw = generate_password_hash(str(uuid.uuid4()))
                usuario.token = hash_passw
                usuario.save()
                return {"status": True, 'token': hash_passw, 'active': usuario.status}
        return {"status": False, 'token': None, 'active': False}
    except:
        print('error')
        return {"status": False, 'token': None, 'active': False}


def cancelLogin(current_user, email=''):
    sesion = SesionDoc.objects(email=email, password=hash_passw)
    if sesion is not None:
        sesion.status = False
        sesion.save()
        return True
    return False
