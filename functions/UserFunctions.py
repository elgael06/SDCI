from models.UserDoc import UserDoc, UserDataConfirm
from functions.SesionFunctions import createSesion, updatePasswordSesion


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
    value = UserDoc.objects(id=id).first()
    if value is not None:
        value = value.parseJson()
    return {"user": value}


def userInsert(name, lastName, email):
    try:
        usr = UserDoc(name=name, lastName=lastName, email=email)
        usr.save()
        sesion = createSesion(email=email)
        if sesion:
            return usr.parseJson()
        return None
    except:
        print('error...')
        return None


def userConfirm(id='', phone='', date='', puesto='', password='', nPassword=''):
    try:
        user = userId(id)
        if user['user'] is not None:
            datos = UserDataConfirm(
                userId=id,
                number_phone=phone,
                fecha_nac=date,
                puesto=puesto
            )
            datos.save()
            email = user['user']['email']
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
