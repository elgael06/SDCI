import connexion
import config.database.mongo_bd
from flask_cors import CORS

##
# instancia de la app con la rutas de configuracion de las api.
##
app = connexion.App(
    __name__, specification_dir='./config/api/', options={"swagger_ui": False})

###
# se agregan las rutas al app
##
app.add_api('user_v1.yml')  # api v1 usuarios
app.add_api('sesion_v1.yml')  # api v1 sesion
CORS(app.app)   # activacion de cors


@app.route('/')
def index():
    return 'Este el el index de sistema base para aplicaciones.'


if __name__ == "__main__":
    app.run(debug=True, port=8000)
