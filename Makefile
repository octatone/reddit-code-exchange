include config/env.source

npm:
	npm install

setup:npm
	cp env.source.sample env.source

dev:
	DEBUG=rce:* nodemon --harmony index.js

start:
	DEBUG=rce:index node --harmony index.js