#!/bin/bash

DO_LOOP="true"

clear

BOT_FILE=""

if [ "$BOT_FILE" == "" ]; then
	if [ -f ./VoltBot.js ]; then
		BOT_FILE="./VoltBot.js"
	else
		echo "[ERROR] Volt BOT JS not found!"
		exit 1
	fi
fi

LOOPS=0

while [ "$LOOPS" -eq 0 ] || [ "$DO_LOOP" == "true" ]; do
	if [ "$DO_LOOP" == "true" ]; then
		node VoltBot.js $@
	else
		exec node VoltBot.js $@
	fi
	((LOOPS++))
done
	