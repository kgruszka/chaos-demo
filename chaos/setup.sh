#!/bin/sh

VENV_NAME=chaostk

python3 -m venv ~/.venvs/${VENV_NAME}
source  ~/.venvs/${VENV_NAME}/bin/activate
pip3 install -r requirements.txt