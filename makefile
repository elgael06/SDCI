
serve_dev:
	python app.py
serve_web:
	gunicorn -w 4 --bind 0.0.0.0:8000 backend.config.wsgi:app