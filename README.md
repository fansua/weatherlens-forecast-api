# Getting Started with Weatherlens

Weatherlens is a simple Javscript app which allows a user to get the current forecast of a particular location. Users can input a country, state, city or 
street address. eg North carolina, america,628 clear lake or North lake.

The project comprises: 
 1) weatherlen-fe - front-end component of the app
 2) weatherlen-geocode-api- given a specifc location, returns  the latitute,longitude and location as JSON object 
 3) weatherlens-forecast-api -given a specific latitude, location, returns the forecast within that area as a JSON object

In the project directory, you can run:

### To run as docker containers: 
 1) clone the source code for each project and excecute the following commands to build docker images
    -  docker build -t weatherlens-forecast-api .  (in the top level directory of weatherlens-forecast-api folder)
    -  docker build -t weatherlens-geocode-api .  (in the top level directory of weatherlens-geocode-api folder)
    -  docker build -t weatherlens-fe .  (in the top level directory of weatherlens-fe folder)

   run docker images using the following commands:
    - docker run -d -p3005:3005 --name weatherlens-geocode-api weatherlens-geocode-api:latest
    - docker run -d -p3006:3006 --name weatherlens-forecast-api weatherlens-forecast-api:latest
    - docker run -d -p3000:3000 --name weatherlens-fe weatherlens-fe:latest


   Launch UI from browser using: http://localhost:3000/


### To run as docker images stored in dockerhub: 
 1) clone the source code for each project and excecute the following commands to build docker images
    -  docker pull fansua/weatherlens-forecast-api   
    -  docker pull fansua/weatherlens-geocode-api 
    -  docker pull fansua/weatherlens-fe 

   run docker images using the following commands:
    - docker run -d -p3005:3005 --name weatherlens-geocode-api fansua/weatherlens-geocode-api:latest
    - docker run -d -p3006:3006 --name weatherlens-forecast-api fansua/weatherlens-forecast-api:latest
    - docker run -d -p3000:3000 --name weatherlens-fe fansua/weatherlens-fe:latest


   Launch UI from browser using: http://localhost:3000/



   ### To run locally: 
 1) clone the source code for each project and excecute the following commands for each project at the top level:
    -  npm i 
    -  npm run start

   Launch UI from browser using: http://localhost:3000/


