# hub-ui

Web UI for Kraken Hub

## Build the site locally

    cd site
    npm install
    npm run build

To run and dev locally: 

    npm start

## Setup the container

Build the image (it uses the builder pattern):

    docker build --tag hub-ui .

Run an ephemeral instance:

    docker run --rm -it -p 8080:80 hub-ui

Run as a daemon:

    docker run -d --rm -p 8080:80 --name hub-ui hub-ui

## References

* [Create React App](https://github.com/facebook/create-react-app)
