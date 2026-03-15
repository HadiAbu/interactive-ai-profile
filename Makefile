BACKEND_DIR=backend
FRONTEND_DIR=frontend

.PHONY: backend-dev frontend-dev install-frontend docker-up docker-down health

backend-dev:
	uvicorn app.main:app --app-dir $(BACKEND_DIR) --reload --host 0.0.0.0 --port 8000

install-frontend:
	cd $(FRONTEND_DIR) && npm install

frontend-dev:
	cd $(FRONTEND_DIR) && npm run dev

docker-up:
	docker compose up -d --build

docker-down:
	docker compose down

health:
	curl http://localhost:8000/health
