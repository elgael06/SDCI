from functions.SesionFunctions import updatePasswordSesion,loginSesion
from  functions.UserFunctions import userEmail

def check(sesion):
    email = sesion.get('email',None)
    password = sesion.get('password',None)
    print(email,password)
    comp = userEmail(email)
    if comp['user'] is not None :
        resp = loginSesion(email,password)
        if resp['status']:
            return {'status':True,'sesion':comp['user'], 'token':resp['token'],'message':'sesion iniciada!'}
        elif email and password:
            return {'status':False,'sesion':None, 'message':'Error en Correo o contraseña!'}
    return {'status':False,'sesion':None, 'message':'Error al iniciar sesion!'}

def update(sesion):
    email = sesion.get('email',None)
    password = sesion.get('password',None)
    nPassword = sesion.get('newPassword',None)
    comp = userEmail(email)
    
    if comp['user'] is not None :
        sesionUpdate = updatePasswordSesion(email=email,password=password,nPassword=nPassword)
        if sesionUpdate:
            return {'message':'contraseña actualizada...','status':True}
        return {'message':'Error al actualizar contraseña !','status':False}