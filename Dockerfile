FROM openjdk:17-jdk-slim

WORKDIR /app

# Copy the compiled JAR file from your local system to the container
COPY build/libs/person-manager-0.0.1-SNAPSHOT.jar /app/app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app/app.jar"]

