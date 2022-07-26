Architecture decisions - 
 - Node JS used with mongo db, using mongodb as product entity might have unstructured data and mongoDB flexible document schemas would help in making changes and additions in the future.
 - MongoDB has atlas as its own cloud based database hosting solution with options for cluster scaling and redundancy for higher data availability 
 - Authentication handled via JWT token as it implements a stateless approach as opposed to session cookies based approach. A stateless application will have the same state across all servers making scalability trivially simple
 - Semaphore used along with digital ocean due to both having horizontal and vertical scaling options even on a free account
 - Javascript used over typescript only due to time constraint, otherwise typescript would be the go to choice due to better code readability and consistency 

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

## Completed deliverables 
 - The API to run a promotion should be protected i.e. only a logged-in user should be allowed to access that API. Rest, all other APIs are public endpoints
 - All the code should be well-styled with proper namings. We pay a lot of attention to code-styling.
 - Use Git for version control, and host the project in a public Github repository. Share the Github link with us.
 - Host the service in a Public Cloud (Eg AWS or Azure or similar).
 - Write the instructions on how to build and run the application in the readme file in the repository.

## Partially completed 
 - Implement CICD using Jenkins/Azure DevOps/CircleCI or any other CICD service
 CI CD being implemented via semaphore and deployment to digital ocean
 CI has been finished, on pushing code, docker image is built in semaphore pipeline
 Deployment on kubernetes isnt finished

 - Dockerize the service and host them using Kubernetes or similar.
  DOckerised container for just app and also packaged mongo db container is setup
  Deployment on kubernetes not finished 

## Not done 
 - Use a logging framework
 - Include unit tests
 - Use Dependency Injection


 