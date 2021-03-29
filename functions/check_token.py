
from functools import wraps
from connexion import request
from models.SesionDoc import SesionDoc

def token_required(f):
    @wraps(f)
    def decorator(*args, **kwargs):

        token = None

        if 'x-access-tokens' in request.headers:
            token = request.headers['x-access-tokens']

        if not token:
            return {'message': 'a valid token is missing'}

        try:
            current_user = SesionDoc.objects(token=token).first()
        except:
            return {'message': 'token is invalid'}
        if current_user:
            return f(current_user,*args, **kwargs)
        return {'message': 'token is invalid'}
    return decorator

