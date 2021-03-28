
def read():
    return 'listo'

def getOne(id):
    return id
    
def create(user):
    name = user.get('name',None)
    lasName = user.get('lastname',None)
    email = user.get('email', None)

    print({name,lasName,email})

    return 'listo agregado'