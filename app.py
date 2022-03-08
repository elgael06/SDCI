import connexion
import backend.config.database.mongo_bd
from flask import render_template, redirect
from flask_cors import CORS
from flask import url_for

##
# instancia de la app con la rutas de configuracion de las api.
##
app = connexion.FlaskApp(
    __name__, options={"swagger_ui": True}, specification_dir='./backend/config/api/')

###
# se agregan las rutas al app
##
app.add_api('user_v1.yml')  # api v1 usuarios
app.add_api('sesion_v1.yml')  # api v1 sesion
CORS(app.app)  # activacion de cors


@app.route('/control/', defaults={'path': '/control'})
@app.route('/control/<path:path>')
def index(path):
    print(path)
    return render_template('control.html')


@app.route('/store-products/', defaults={'path': '/store-products/'})
@app.route('/store-products/<path:path>')
def store_products(path):
    # return 'hola'
    print('store_products')
    return render_template('/store-products/index.html')


@app.route('/static/')
def staticos():
    return redirect('/')


@app.route('/')
def landing():
    return render_template('landing.html')


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def error(path):
    print(path)
    return render_template('_404.html', path=path), 404


if __name__ == "__main__":
    app.run(debug=True, port=8000)
