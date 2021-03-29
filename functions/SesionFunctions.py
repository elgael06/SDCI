
from models.SesionDoc import SesionDoc
from werkzeug.security import generate_password_hash,check_password_hash
import datetime

def createSesion(email=''):
    try:
        sesion =  SesionDoc(email=email)
        print(sesion)        
        sesion.save()
        print('save sesion...')
        return True
    except :
        print('error')
        return False

def updatePasswordSesion(email='',password='',nPassword=''):
    try:
        sesion =  SesionDoc.objects(email=email,password=generate_password_hash(password))
        hash_passw = generate_password_hash(nPassword)

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
    hash_passw = generate_password_hash(password)
    usuario = SesionDoc.objects(email=email).first()
    check_passw = check_password_hash(usuario.password,password) 
    
    if usuario is not None and check_passw:
        return True
    return False

def cancelLogin(email=''):
    sesion = SesionDoc.objects(email=email,password=hash_passw)
    if sesion is not None:
        sesion.status = False
        sesion.save()
        return True
    return False