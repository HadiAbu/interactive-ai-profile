from sqlalchemy import create_engine, text
from sqlalchemy.engine import Engine
from sqlalchemy.exc import SQLAlchemyError

from app.settings import get_settings

_engine: Engine | None = None


def get_engine() -> Engine:
    global _engine

    if _engine is not None:
        return _engine

    settings = get_settings()
    if not settings.database_url:
        raise RuntimeError("DATABASE_URL is not set")

    _engine = create_engine(settings.database_url, pool_pre_ping=True, future=True)
    return _engine


def check_db_connection() -> tuple[bool, str]:
    try:
        engine = get_engine()
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))
        return True, "ok"
    except RuntimeError as exc:
        return False, str(exc)
    except SQLAlchemyError as exc:
        return False, str(exc.__class__.__name__)
