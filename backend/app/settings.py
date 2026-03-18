import os
from dataclasses import dataclass


@dataclass(frozen=True)
class Settings:
    database_url: str | None


def get_settings() -> Settings:
    return Settings(
        database_url=os.getenv("DATABASE_URL"),
    )
