FROM mcr.microsoft.com/devcontainers/base:ubuntu-24.04

# Basic dev tooling + Postgres client
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates curl git unzip jq make build-essential \
    postgresql-client \
  && rm -rf /var/lib/apt/lists/*

# (Python + Node installed via Dev Container features)
