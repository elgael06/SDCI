
from models.SesionDoc import SesionDoc
from werkzeug.security import generate_password_hash, check_password_hash
import datetime
import uuid
from connexion import request
from functions.check_token import token_required


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


def updatePasswordSesion(email='', password='', nPassword=''):
    try:
        sesion = SesionDoc.objects(
            email=email, password=generate_password_hash(password))
        hash_passw = generate_password_hash(nPassword)

        if sesion is not None:
            sesion.password = hash_passw
            sesion.update_date = datetime.datetime.now
            sesion.status = True
            sesion.save()
            return True
        else:
            return False
    except:
        return False


def loginSesion():
    try:
        auth = request.authorization
        if auth is not None and auth.username and auth.password:
            print('user: {user} , pass: {password}'.format(
                user=auth.username, password=auth.password))

            usuario = SesionDoc.objects(email=auth.username).first()

            check_passw = check_password_hash(usuario.password, auth.password)

            if usuario is not None and check_passw:
                hash_passw = generate_password_hash(str(uuid.uuid4()))
                usuario.token = hash_passw
                usuario.save()
                return {"status": True, 'token': hash_passw}
        return {"status": False, 'token': None}
    except:
        return {"status": False, 'token': None}


@ token_required
def cancelLogin(current_user, email=''):
    sesion = SesionDoc.objects(email=email, password=hash_passw)
    if sesion is not None:
        sesion.status = False
        sesion.save()
        return True
    return False
