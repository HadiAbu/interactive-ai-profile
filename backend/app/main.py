from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from app.db import check_db_connection
from app.settings import get_settings

app = FastAPI()

_settings = get_settings()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[_settings.frontend_origin],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health():
    return {"status": "ok"}


@app.get("/health/db")
def health_db():
    is_ok, detail = check_db_connection()
    if is_ok:
        return {"status": "ok", "database": "connected"}

    return JSONResponse(
        status_code=503,
        content={
            "status": "error",
            "database": "unavailable",
            "detail": detail,
        },
    )
