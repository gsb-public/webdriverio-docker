# webdriverio-docker

## Setup 
- Install Docker
- You'll need to have a temp folder on your Desktop, or change the line under volumes in docker-compose.yml

## Running a test
- Open a terminal window and enter the following commands

```
docker-compose build
docker-compose up
```

## Stopping and Removing Docker containers
- Open a terminal window and enter the following command

```
docker-compose down
```

## Additional Notes
- If you run into a case where the selenium server gives you a connection error, then run the following commands

```
docker ps -a
docker rm <container-id-for-selenium-server>
```

- If you need to look into the selenium server container, then run the following commands

```
docker ps
docker exec -it <container-id-for-selenium-server> /bin/bash
```
