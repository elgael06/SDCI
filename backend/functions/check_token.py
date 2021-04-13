
from functools import wraps
from connexion import request
from backend.models.SesionDoc import SesionDoc
from backend.models.UserDoc import UserDoc


def token_required(f):
    @wraps(f)
    def decorator(*args, **kwargs):

        token = None

        if 'x-access-tokens' in request.headers:
            token = request.headers['x-access-tokens']

        if not token:
            return {'message': 'a valid token is missing'}

        try:
            current_user = SesionDoc.objects(token=token, status=True).first()
        except:
            return {'message': 'token is invalid'}, 401
        if current_user:
            user = UserDoc.objects(email=current_user.email).first()
            print(user.id)
            return f(user.id, *args, **kwargs)
        return {'message': 'token is invalid'}, 401
    return decorator
