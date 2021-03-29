import connexion
import config.database
from flask_cors import CORS
###
# se cargan los archivos de rutas
##
# rutas de api base para usuarios
app = connexion.App(
    __name__, specification_dir='./config/api/')

###
# se agregan las rutas al app
##
app.add_api('user_v1.yml')
app.add_api('sesion_v1.yml')

CORS(app.app)


@app.route('/')
def hello_world():
    return 'Este el el index de sistema base para aplicaciones.'


if __name__ == "__main__":
    app.run(debug=True, port=8000)
