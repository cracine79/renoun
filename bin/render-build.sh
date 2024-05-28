#!/usr/bin/env bash

# exit on error
set -o errexit

bundle install
rails db:migrate
rails db:seed #if needed