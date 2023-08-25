# --- BUILD STAGE ---
FROM gradle:7.2.0-jdk17 AS build

WORKDIR /usr/app

COPY gradlew ./
COPY gradle ./gradle
COPY build.gradle ./
COPY settings.gradle ./
COPY src ./src
COPY src/main/resources/application.properties ./application.properties

RUN chmod +x ./gradlew
RUN ./gradlew clean bootJar

# --- PACKAGE STAGE ---
FROM arm64v8/openjdk:17-jdk-slim

WORKDIR /usr/app

COPY --from=build /usr/app/build/libs/springapi-0.0.1-SNAPSHOT.jar ./app.jar

EXPOSE 8081

CMD ["java", "-jar", "app.jar"]