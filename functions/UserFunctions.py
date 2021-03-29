from models.UserDoc import UserDoc
from functions.SesionFunctions import createSesion


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
