# reddit-code-exchange
Simple proxy for handling reddit OAuth2 code exchange for installed applications that should not store secrets.

It provides two `POST` endpoints:
- `/exchange`: exchanges `code` from your JSON request body for OAuth tokens
- `/token`: exchanges `refreshToken` from your JSON request body for a fresh reddit `access_token`

# Quickstart

    make setup

Edit `config.json` to your reddit client id, secrect and redirect uri.

    make dev

Your OAuth2 code exchange proxy is now running via nodemon with debug messages.

    make start

Proxy is now running via node without additional debug messages.  You may now POST to the endpoints.
