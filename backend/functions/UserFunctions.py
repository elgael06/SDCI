
import datetime
from backend.models.UserDoc import UserDoc, UserDataConfirm
from backend.functions.SesionFunctions import createSesion, updatePasswordSesion,updateEmail


def getUser(email=''):
    print(email)
    if email == '':
        return userAll()
    else:
        return userEmail(email)


def userAll():
    res = []
    for i in UserDoc.objects:
        print(i.parseJson())
        res.append(i.parseJson())
    return res


def userEmail(email=''):
    value = UserDoc.objects(email=email).first()
    if value is not None:
        value = value.parseJson()
    return {"user": value}


def userId(id):
    user = UserDoc.objects(id=id).first()
    if user is not None:
        value = user.parseJson()
        datos = UserDataConfirm.objects(userId=user.id).first()
        if datos is None:
            datos = UserDataConfirm()
            datos.userId = user.id
            datos.save()
        datos = datos.parseJson()
        return {"user": value, 'data': datos}
    return {"user": None, 'data': None, }, 401


def userInsert(name, lastName, email, puesto, userCreate=''):
    respuesta = {
        'status': False,
        'message': 'Error: al guardar los datos de sesion!!!'
    }

    try:
        usr = UserDoc()
        usr.name=name
        usr.lastName=lastName
        usr.email=email
        usr.userCreate=userCreate
        usr.save()
        print('userCreate {}'.format(usr.userCreate))
        
        sesion = createSesion(usr.email)
        if sesion:
            createUserData(puesto=puesto, id=usr.id)
            respuesta['status'] = True
            respuesta['message'] = 'El usuario fue guardado: id {id}...'.format(
                id=usr.id)
    except:
        print('error1')
        respuesta['message'] = 'Error al guardar los datos de usuario! name:{}, lastName:{} ,email:{}, puesto:{}, creator:{}.'.format(name,lastName,email,puesto,userCreate)
    return respuesta


def createUserData(puesto='', id=''):
    info = UserDataConfirm()
    info.userId = id
    info.puesto = puesto
    info.save()


def checkDatosUser(id=''):
    datos = UserDataConfirm.objects(userId=id).first()
    if datos is not None:
        return datos.parseJson()
    return {}


def userConfirm(email='', phone='', date='', password='', nPassword=''):
    try:
        user = userEmail(email)
        if user['user'] is not None:
            print('id ', user['user']['id'])
            datos = UserDataConfirm.objects(
                userId=user['user']['id']
            ).first()
            datos.number_phone = phone
            datos.fecha_nac = date
            datos.status = True
            datos.save()
            print(datos.id)

            changePassword = updatePasswordSesion(
                email=email,
                password=password,
                nPassword=nPassword
            )
            print('estatus password: ', changePassword)
            if changePassword:
                return {'messaje': 'Usuario actualizado correctamente...', 'status': True}
            return {'messaje': 'Error en contraseña de usuario!', 'status': False}
        return {'messaje': 'Error emal :{id} , no encontrado!'.format(id=email), 'status': False}
    except:
        print('error en cambio de contraseña')
        return {'messaje': 'Error al confirmar datos de usuario!', 'status': False}

def updateUser(current_user='',id='',name='',last_name='',email=''):
    user = UserDoc.objects(id=id).first()
    old_email = user.email
    
    user.name = name
    user.lastName = last_name
    user.userCreate=current_user
    user.date_modified = datetime.datetime.now
    user.email = email
    print('entro...',current_user)
    user.save()
    if old_email != email:
        updateEmail(old_email,email)
    
        
    

def updateDatePuesto(id,puesto):
    data = UserDataConfirm.objects(userId=id).first()
    data.puesto = puesto
    data.save()

