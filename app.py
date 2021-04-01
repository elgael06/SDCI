import connexion
import config.database.mongo_bd
from flask import render_template
from flask_cors import CORS
from flask import url_for

##
# instancia de la app con la rutas de configuracion de las api.
##
app = connexion.FlaskApp(
    __name__, options={"swagger_ui": False}, specification_dir='./config/api/')

###
# se agregan las rutas al app
##
app.add_api('user_v1.yml')  # api v1 usuarios
app.add_api('sesion_v1.yml')  # api v1 sesion
CORS(app.app)  # activacion de cors


@app.route('/')
@app.route('/<page>/')
@app.route('/<page>/<name>/')
@app.route('/page/<name>/<modulo>/')
@app.route('/page/<name>/<modulo>/<submodulo>/')
@app.route('/page/<name>/<modulo>/<submodulo>/<id>/')
def index(page=None, name=None, modulo=None, submodulo=None, id=None):
    print(name)
    return render_template('index.html')


if __name__ == "__main__":
    app.run(debug=True, port=8000)
