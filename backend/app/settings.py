import os
from dataclasses import dataclass


@dataclass(frozen=True)
class Settings:
    database_url: str | None
    frontend_origin: str


def get_settings() -> Settings:
    return Settings(
        database_url=os.getenv("DATABASE_URL"),
        frontend_origin=os.getenv("FRONTEND_ORIGIN", "http://localhost:5173"),
    )
