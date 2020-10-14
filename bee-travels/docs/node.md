---
id: node
title: Designing Microservices with Node.js
---

When designing microservices in Node.js or any other language, [these](/docs/designing) recommendations should be considered.

## Package Manager

When writing Node.js code, you will most likely be using some packages. Because of this, it is recommended to use a Node package manager. Two commonly known package managers are [npm](https://www.npmjs.com/) and [yarn](https://yarnpkg.com/). With a package manager you can easily run and test your code as well as install dependencies. Bee Travels currently uses yarn.

## Communication

Web frameworks and RESTful APIs from [this](/docs/designing#communication) communication section play a key part in designing Node.js microservices.

One of the most common web frameworks for Node.js that Bee Travels takes advantage of is [express](http://expressjs.com/). Using express allows you to create RESTful APIs. [Here](https://github.com/bee-travels/bee-travels-node/blob/master/services/destination-v1/src/routes/destinations.js#L25-L47) is the code for the Bee Travels API endpoint from the example in the main communication section. From this code we can see that there are two main components. The first are the comments that use decorators. This code takes advantage of the [OpenAPI Comment Parser](https://developer.ibm.com/technologies/api/blogs/document-apis-with-open-source-openapi-comment-parser/) which helps with documentation of your API endpoint and displays it in your [Swagger](https://swagger.io/). The second main comonent is the actual Node.js express code the defines the `GET` API endpoint for getting destination data for a specified country and city and returns the necessary data in the form of a JSON object. It is also important to note that error handling is also being handled in this code and a different response will be sent if an error occurs.

## Code Consistency

Expanding on [this](/docs/designing#code-consistency) code consistency section, Bee Travels uses [eslint](https://eslint.org/) and [prettier](https://prettier.io/) as linters for code consistency.