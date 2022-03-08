FROM python:3.8-slim-buster

WORKDIR /home/app/

#instalar requerimientos
COPY requirements.txt requirements.txt
RUN pip3 install --no-cache-dir -r requirements.txt


COPY . .

# FROM node:16-alpine
# WORKDIR /home/app/front-control/
# RUN ls
# RUN npm start
# WORKDIR /home/app/
# RUN rm -rf frontend/
# COPY ./static    .
# COPY ./backend   .
# COPY app.py     .

CMD [ "python3", "./app.py" ]

EXPOSE 8000
# docker tag local-image:tagname new-repo:tagname
# docker push new-repo:tagname