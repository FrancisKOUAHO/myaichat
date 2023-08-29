FROM ubuntu:latest AS build

RUN apt-get update && \
    apt-get install -y openjdk-17-jdk && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY . .

RUN ./gradlew bootJar --no-daemon

FROM openjdk:17-jdk-slim

COPY --from=build /app/build/libs/spring-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]