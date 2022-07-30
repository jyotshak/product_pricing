Architecture decisions - 
 - Node JS used with mongo db, using mongodb as product entity might have unstructured data and mongoDB flexible document schemas would help in making changes and additions in the future.
 - MongoDB has atlas as its own cloud based database hosting solution with options for cluster scaling and redundancy for higher data availability 
 - Authentication handled via JWT token as it implements a stateless approach as opposed to session cookies based approach. A stateless application will have the same state across all servers making scalability trivially simple
 - Semaphore used along with digital ocean due to both having horizontal and vertical scaling options even on a free account
 - Javascript used over typescript only to save time while building from scratch, otherwise typescript would be the go to choice due to better code readability and consistency 

 App URL is https://arcane-depths-33383.herokuapp.com 


If deploying via docker image from outside main folder - >

# Docker Compose Nodejs and MongoDB example

## Run the System
We can easily run the whole with only a single command:
```bash
docker-compose up
```

## Stop the System
Stopping all the running containers is also simple with a single command:
```bash
docker-compose down
```

If you need to stop and remove all containers, networks, and all images used by any service in <em>docker-compose.yml</em> file, use the command:
```bash
docker-compose down --rmi all
```


If deploying via NPM start be inside 'main' folder

## npm install
## npm start 

## Key Features
 - Auhtnetication implemented VIA JWT
 - The API to run a promotion is protected, and needs authentication first
 - Hosted in heroku after pipeline handles build and deployment
 - CI CD being implemented via semaphore and deployment to digital ocean
 - CI is triggered, on pushing code, docker image is built in semaphore pipeline


 
