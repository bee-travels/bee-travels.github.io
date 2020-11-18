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

Check out the Bee Travels Node.JS version of the service template [here](https://github.com/bee-travels/node-service-template). To run the template and setup a Node.js microservice run:

```
npx bee-bootstrap node
```

## Containerize

Containerizing your microservices (ex. Docker) is essential for cloud native application development. It is needed for deploying your microservices to Kubernetes or OpenShift. Containerizing also helps when developing and debugging locally. It allows for a standardized way of interacting with microservices when dealing with cross platform development and varrying versionings of dependencies.

When using Docker, the best way to run multiple microservices in parallel is to create a `docker-compose.yml` file. You can view an example from Bee Travels [here](https://github.com/bee-travels/bee-travels-node/blob/master/docker-compose.yml).

## Communication

Because microservices are parts of an application, they need a way to interact and communicate with each other to make sure the application functions correctly. Unlike in a monolith application, microservices are unable to communicate internally and need an external way to communicate. As a result, these microservices will require a web framework to be built within them.

Web frameworks allow for the use of RESTful APIs. When designing microservices, one of the first things to consider is what functions do you want your microservice to provide and what data is needed to achieve these functions. 

Let's look at an example of this using the Bee Travels destination microservice. The goal of the destination service is to provide information associated with different destinations (cities) across the world. A user or other service might be interested in viewing data related to a specific city. To get this information, the service should have an endpoint that looks like this: 

```
GET /api/v1/destinations/{country}/{city}
```

When this endpoint is called it should return a JSON object with data related to the specified `country` and `city` from the API call. Below is an example of the JSON data returned for the city of New York:

```
{
  "id": "c4a3aa29-4c8b-4e4f-817e-dcf66345482e",
  "city": "New York",
  "country": "United States",
  "latitude": 40.6943,
  "longitude": -73.9249,
  "population": 19354922,
  "description": "The City of New York, usually called either New York City (NYC) or simply New York (NY), is the most populous city in the United States. With an estimated 2018 population of 8,398,748 distributed over a land area of about 302.6 square miles (784 km2), New York is also the most densely populated major city in the United States. Located at the southern tip of the state of New York, the city is the center of the New York metropolitan area, the largest metropolitan area in the world by urban landmass and one of the world's most populous megacities, with an estimated 19,979,477 people in its 2018 Metropolitan Statistical Area and 22,679,948 residents in its Combined Statistical Area. A global power city, New York City has been described as the cultural, financial, and media capital of the world, and exerts a significant impact upon commerce, entertainment, research, technology, education, politics, tourism, art, fashion, and sports. The city's fast pace has inspired the term New York minute. Home to the headquarters of the United Nations, New York is an important center for international diplomacy.",
  "images": [
    "https://s3.us.cloud-object-storage.appdomain.cloud/bee-travels-assets-destination/destination-new-york-united-states-001.jpg",
    "https://s3.us.cloud-object-storage.appdomain.cloud/bee-travels-assets-destination/destination-new-york-united-states-002.jpg",
    "https://s3.us.cloud-object-storage.appdomain.cloud/bee-travels-assets-destination/destination-new-york-united-states-003.jpg",
    "https://s3.us.cloud-object-storage.appdomain.cloud/bee-travels-assets-destination/destination-new-york-united-states-004.jpg",
    "https://s3.us.cloud-object-storage.appdomain.cloud/bee-travels-assets-destination/destination-new-york-united-states-005.jpg",
    "https://s3.us.cloud-object-storage.appdomain.cloud/bee-travels-assets-destination/destination-new-york-united-states-006.jpg",
    "https://s3.us.cloud-object-storage.appdomain.cloud/bee-travels-assets-destination/destination-new-york-united-states-007.jpg",
    "https://s3.us.cloud-object-storage.appdomain.cloud/bee-travels-assets-destination/destination-new-york-united-states-008.jpg",
    "https://s3.us.cloud-object-storage.appdomain.cloud/bee-travels-assets-destination/destination-new-york-united-states-009.jpg",
    "https://s3.us.cloud-object-storage.appdomain.cloud/bee-travels-assets-destination/destination-new-york-united-states-010.jpg",
    "https://s3.us.cloud-object-storage.appdomain.cloud/bee-travels-assets-destination/destination-new-york-united-states-011.jpg",
    "https://s3.us.cloud-object-storage.appdomain.cloud/bee-travels-assets-destination/destination-new-york-united-states-012.jpg",
    "https://s3.us.cloud-object-storage.appdomain.cloud/bee-travels-assets-destination/destination-new-york-united-states-013.jpg",
    "https://s3.us.cloud-object-storage.appdomain.cloud/bee-travels-assets-destination/destination-new-york-united-states-014.jpg",
    "https://s3.us.cloud-object-storage.appdomain.cloud/bee-travels-assets-destination/destination-new-york-united-states-015.jpg",
    "https://s3.us.cloud-object-storage.appdomain.cloud/bee-travels-assets-destination/destination-new-york-united-states-016.jpg",
    "https://s3.us.cloud-object-storage.appdomain.cloud/bee-travels-assets-destination/destination-new-york-united-states-017.jpg",
    "https://s3.us.cloud-object-storage.appdomain.cloud/bee-travels-assets-destination/destination-new-york-united-states-018.jpg",
    "https://s3.us.cloud-object-storage.appdomain.cloud/bee-travels-assets-destination/destination-new-york-united-states-019.jpg",
    "https://s3.us.cloud-object-storage.appdomain.cloud/bee-travels-assets-destination/destination-new-york-united-states-020.jpg"
  ]
}
```

With this design plan in mind, we can then write the code necessary in the destination microservice to retrieve and return the necessary information.

Another benefit to designing microservices with RESTful APIs before development is it allows for parallel development of multiple microservices. Microservices that call an API endpoint from a different microservice will already know what the data returned from the API call is expected to look like. This is beneficial when writing tests, because you can create test data without needing to rely on making API calls to a microservice that may be in the process of being developed.

## Code Consistency

When writing code, it is important to keep code consistent not only among the developers working on the application, but also between the individual microservices. One way to help with this is by using a [linter](https://en.wikipedia.org/wiki/Lint_%28software%29). A linter helps with finding problematic code or code that does not follow formatting/style rules.