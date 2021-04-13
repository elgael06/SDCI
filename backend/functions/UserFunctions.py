from backend.models.UserDoc import UserDoc, UserDataConfirm
from backend.functions.SesionFunctions import createSesion, updatePasswordSesion


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
        print(value)
        datos = UserDataConfirm.objects(userId=user.id).first()
        print('datos: ', datos)
        if datos is None:
            datos = UserDataConfirm()
            print(datos.number_phone)
            datos.userId = user.id
            datos.save()
        datos = datos.parseJson()
        return {"user": value, 'data': datos}
    return {"user": None, 'data': None, }, 401


def userInsert(name, lastName, email, userCreate):
    try:
        usr = UserDoc(
            name=name,
            lastName=lastName,
            email=email,
            userCreate=userCreate
        )
        usr.save()
        sesion = createSesion(email=email)
        if sesion:
            return usr.parseJson()
        return None
    except:
        print('error...')
        return None


def checkDatosUser(id=''):
    datos = UserDataConfirm.objects(userId=id).first()
    if datos is not None:
        return datos.parseJson()
    return {}


def userConfirm(email='', phone='', date='', password='', nPassword=''):
    try:
        user = userEmail(email)
        if user['user'] is not None:
            datos = UserDataConfirm(
                userId=user['user']['id'],
                number_phone=phone,
                fecha_nac=date,
                status=True
            )
            datos.save()
            changePassword = updatePasswordSesion(
                email=email,
                password=password,
                nPassword=nPassword
            )
            if changePassword:
                return {'messaje': 'Usuario actualizado correctamente...', 'status': True}
            return {'messaje': 'Error en contraseña de usuario!', 'status': False}
        return {'messaje': 'Error id :{id} , no encontrado!'.format(id=id), 'status': False}
    except:
        return {'messaje': 'Error al confirmar datos de usuario!', 'status': False}
