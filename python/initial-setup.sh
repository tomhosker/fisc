#!/bin/bash

virtualenv venv --python=python3
. venv/bin/activate
pip3 install -r requirements.txt
