#!/bin/bash

TOKEN=$(git subtree split --prefix BE deploy)
git push heroku $TOKEN:master --force

echo "DEPLOY END"
