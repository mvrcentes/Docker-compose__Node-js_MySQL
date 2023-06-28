# Docker Compose Node-js_MySQL

## Description 

This repository contains an example configuration to run a Node.js application and a MySQL database in Docker containers and enable communication between them. We will use docker-compose, a Docker tool that allows configuring and managing multiple services through a docker-compose.yml file.

## Prerequisites
Make sure you have the following components installed:

* Docker: https://docs.docker.com/get-docker/
* docker-compose: https://docs.docker.com/compose/install/

## Configuration 

1. `git clone https://github.com/mvrcentes/Node-js_MySQL.git <REPOSITORY_NAME>`
2. `cd <REPOSITORY_NAME>`
3. Open the `.env` file in a text editor and make sure the environment variables are set according to your needs:

1. Start the containers using docker-compose: `docker-compose up`
2. Access the Node.js application in your browser: `http://localhost:4000`


## Additional Notes

If you want to stop the containers, run the following command in the same location as the docker-compose.yml file:
```docker-compose down```

This will stop and remove the containers, but the MySQL database data will be preserved in a Docker volume for future use.

You can modify the Node.js application code and SQL scripts according to your needs. Make sure to restart the containers after making changes to the code or configuration.
If you want to explore more configuration options, refer to the official Docker Compose documentation: https://docs.docker.com/compose/
Enjoy your Node.js and MySQL setup in Docker containers! If you have any questions or issues, feel free to contact us.
