#!/bin/bash

cp .npmrc build/
cp package.json build/
cp .env build/

rm -rf build/web
cp -r ui build/web
