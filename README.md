# Aplicacion base para backEnd

## Especificaciones:

- Esta aplicacion se creo para servir de base a sistemas web y mobiles.
- Sirve para gestionar las conexiones a bases de datos SQL y noSQL.
- Controla el acceso para inicio de sesion de usuarios.
- permite crear, modificar y eliminar usuarios.
- Controlar el acceso a los menus por rol de usuario.
- Sirve de base para ampliar segun los requerimientos del sistema que lo use.

## Uso de apis:

Las apis son creadas en la seccion de controllers, para exponerlas se crea un archivo de configuracion en la seccion de ``config/api/[controller].yml`` donde controller es el nombre del archivo de configuracion para una ruta en especifico. 

## entorno virtual:
Antes de iniciar se recomientda crear un entorno virtual.
- Installa virtualenv: ``` pip3 install virtualenv```.
- Crea el entorno virtual: ```virtualenv env```.
- Accede al entorno virtual(Linux): ```source env/bin/activate```.


## Requerimientos:
- Para instalar los requerimientos se debe ejecutar el comando -> ``pip freeze install -r requirements.txt``
- Para guardar los requerimientos usa el comando ->  ``pip freeze > requirements.txt`` 

## Ejecucion:

para equecurar la aplicacion se debe de ejecutar el comandio  ``python app.py `` esto para correr en modo desarrollo.
