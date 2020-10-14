---
id: designing
title: Designing Microservices
---

## File Structure

For applications with multiple microservices, focusing on each individually and uniquely may lead to a loss in productivity with development and debugging down the line. Below are some examples of issues that may arise: 

* Reinventing the wheel for other microservices when a working structure exists for a developed microservice
* Using different directory/file names for different microservices that house similar information may lead to confusion when trying to locate components of a micorservice

These were some of the issues that were faced when initially working on Bee Travels. The way that Bee Travels has dealt with this is by coming up with a microservice template. The template is a skeleton microservice with the code that is needed to set the foundation for the microservice. 

By using a template:

* All microservices follow the same consistent naming conventions for directories, files and variables
* Time is saved in not needing to start from scratch
* Sets standards that all developers can follow

## Containerize

Containerizing your microservices (ex. Docker) is essential for cloud native application development. It is needed for deploying your microservices to Kubernetes or OpenShift. Containerizing also helps when developing and debugging locally. It allows for a standardized way of interacting with microservices when dealing with cross platform development and varrying versionings of dependencies.

When using Docker, the best way to run multiple microservices in parallel is to create a `docker-compose.yml` file. You can view an example from Bee Travels [here](https://github.com/bee-travels/bee-travels-node/blob/master/docker-compose.yml).

## Communication

Because microservices are parts of an application, they need a way to interact and communicate with each other to make sure the application functions correctly. Unlike in a monolith application, microservices are unable to communicate internally and need an external way to communicate. As a result, these microservices will require a web framework to be built within them.

Web frameworks allow for the use of RESTful APIs. When designing microservices, one of the first things to consider is what functions do you want your microservice to provide and what data is needed to achieve these functions. 

Let's look at an example of this using the Bee Travels destination microservice. The goal of the destination service is to provide information associated with different destinations (cities) across the world. A user or other service might be interested in viewing data related to a specific city. To get this information, the service should have an endpoint that looks like this: `GET /api/v1/destinations/{country}/{city}`. When this endpoint is called it should return a JSON object with data related to the specified `country` and `city` from the API call. With this design plan in mind, we can then write the code necessary in the destination microservice to retrieve and return the necessary information.

Another benefit to designing microservices with RESTful APIs before development is it allows for parallel development of multiple microservices. Microservices that call an API endpoint from a different microservice will already know what the data returned from the API call is expected to look like. This is beneficial when writing tests, because you can create test data without needing to rely on making API calls to a microservice that may be in the process of being developed.

## Code Consistency

When writing code, it is important to keep code consistent not only among the developers working on the application, but also between the individual microservices. One way to help with this is by using a [linter](https://en.wikipedia.org/wiki/Lint_%28software%29). A linter helps with finding problematic code or code that does not follow formatting/style rules.