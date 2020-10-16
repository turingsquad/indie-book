FROM adoptopenjdk/openjdk11:ubi
ADD target/indie-book.jar /app.jar
ENTRYPOINT ["java","-jar", "-Dspring.profiles.active=docker","/app.jar"]