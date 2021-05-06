
dev:
	python app.py
web:
	gunicorn -w 4 --bind 0.0.0.0:8000 backend.config.wsgi:app