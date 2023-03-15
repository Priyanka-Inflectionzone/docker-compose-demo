# docker-compose-demo 
* Steps to follow: 
  1. Clone this repository on your local system. 
  2. Open folder in terminal.
  3. Run command `docker compose up --build -d`
  4. See the list of your running containers using `docker ps`
  5. You can check logs of your containers using command `docker logs <container name>`
  6. Go to postman & try adding users by sending post request on "http://localhost:3000/user". 
  7. If you want to see your database created in db container, use command `docker exec -it <db container name> /bin/bash`. You will be in your db container. Here just login to your mysql using command `mysql -u <usernsme> -p`.
  8. Here you can now run your sql querries such as : 
      1. `SHOW DATABASES;`
      2. `USE <database name>;`
      3. `SHOW TABLES;`
      4. `SELECT * FROM <tablename>;` 
      
  9. To exit from mysql run command `exit` & to come out of your container use command `exit`.
  10. To stop all the running services use command `docker compose down`. It will stop & remove the containers.
