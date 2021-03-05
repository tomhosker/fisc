#!/bin/bash

virtualenv venv --python=python3
. venv/bin/activate
pip install -r requirements.txt
