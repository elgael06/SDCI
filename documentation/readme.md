# DOCUMENTACION DE SISTEMA BASE (SDCI).

## DESCRIPCION:

En este apartado se detalla la funcionalidades de del sistema asi como los directorios de carpeta y arquitectura utilizada.

### El sistema de backend ( servicios, arquitectura y tecnologias).

El siguente sistema expone sus sercios a travz del sistema de comunicacion cliente servidor denominado como API REST.
Este a su ves cuenta con controladores expuestos atravez de configuraciones guardadas en archivos yml los cuales indican la ruta los parametros y la respuesta de cada uno de los controladores estos archivos de configuracion se guardan en el directorio `<proyecto>/backend/config/api/[nombre_controlador_version].yml`, luego se agregan a las configuraciones del app agregando en el archivo `app.py` la siguiente line `app.add_api('[nombre_controlador_version].yml')` la cual indica que los controladores y su configuracion seran expuestas en el servicio.

#### Ej. encabezado de configuracion de controlador:

```
swagger: "2.0"
info:
  description:
  version: "1.0.0"
  title:
consumes:
  - "application/json"
produces:
  - "application/json"

basePath: "/api/v1/user"
```

#### Ej. ruta

```
/login:# Ruta del controlador.
    post:
      operationId: #Funcion expocitora.
      tags:
        - "sesion" #
      parameters:
        - name: sesion # nombre de variable que tendra los parametros en la funcion
          in: body # tipo de parametro.
          required: True
          schema:
            type: object
            properties:
              email:
                type: string
      responses:
        201:
          description: "Successful read users list operation"
          schema:
            type: object
```
