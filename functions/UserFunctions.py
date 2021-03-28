from models.UserDoc import UserDoc
from werkzeug.security import generate_password_hash


def userAll():
    res = []
    for i in UserDoc.objects:
        print(i.parseJson())
        res.append(i.parseJson())
    return res


def userEmail(email):
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
        return usr.parseJson()
    except:
        print('error...')
        return None
