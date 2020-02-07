# React Auth
This mobile-responsive chat app was built as a personal project to practice and learn React with Hooks & Context, Node & Express, websockets, testing with Jest and Cypress and setting up a CI/CD pipeline.\
\
Users can sign up and chat with multiple people after being redirected to the home route.  The avatar in the login screen is dynamic, and changes with every refresh.


## Installing

####  ```npm i```
In your clone (or fork) server (backend) directory, run ```npm i``` to install all necessary dependencies. After doing this, ```cd client``` and do the same for the client (frontend) directory.

#### Environment Variable Setting

Below are the list of the environment variables that you need to configure before being able to run this program:

Server .env variables:
- MONGO_URL   (The url for your MongoDB instance. You are free to choose between a local Mongo instance, a cloud-based one or a Docker container)
- SECRET      (jwt secret; this can be any random value)

Client .env variables:
- REACT_APP_WS_URL      (This is the URL of your websocket instance. If running locally, set it as ```wss://<your local url>:8080```\
\

## Running the tests

I have configured 2 types of frontend tests for this project - Unit testing with Jest and e2e testing with Cypress.

### Unit testing - Jest
```cd client``` and enter the client directory. In the client directory, enter the ```npm run test``` command.\
If you decide to change some of the source code, please update the snapshots with the ```npm run test -- -u```.

### End to End testing - Cypress
In order to configure testing for e2e, open the ```seeder.js``` file in the server directory and change the databaseURL to your own test MongoDB.\
After doing this, change the server environment variable of MONGO_URL to that of your test DB.

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
