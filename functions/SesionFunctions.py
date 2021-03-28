
from models.SesionDoc import SesionDoc
from werkzeug.security import generate_password_hash
import datetime
from functions.UserFunctions import userEmail

def createSesion(email=''):
    try:
        sesion =  SesionDoc(email=email)
        sesion.save()
        return True
    except :
        return False

def updatePasswordSesion(email='',password=''):
    try:
        sesion =  SesionDoc.objects(email=email)
        hash_passw = generate_password_hash(password)
        if sesion is not None:
            sesion.password = hash_passw
            sesion.update_date = datetime.datetime.now
            sesion.status = True
            sesion.save()
            return True
        else:
            return False
    except :
        return False    

def loginSesion(email='',password=''):
    comp = userEmail(email)
    hash_passw = generate_password_hash(password)

    if comp['user'] is not None:
        sesion = SesionDoc.objects(email=email,password=hash_passw)
        if sesion is not None:
            return {'user':comp['user'],'sesion':True}
    return {'user':None,'sesion':True}

def cancelLogin(email=''):
    comp = userEmail(email)
    
    if comp['user'] is not None:
        sesion = SesionDoc.objects(email=email,password=hash_passw)
        if sesion is not None:
            sesion.status = False
            sesion.save()
            return True
    return False