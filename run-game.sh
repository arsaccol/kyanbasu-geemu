#!/bin/bash

host='localhost'
port=8080

SOCKET_HOST=$host SOCKET_PORT=$port browser-sync start --server --files "./"
