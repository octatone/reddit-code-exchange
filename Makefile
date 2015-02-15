npm:
	npm install

setup:npm
	cp config.sample.json config.json

dev:
	DEBUG=rce:* nodemon --harmony index.js

start:
	DEBUG=rce:index node --harmony index.js