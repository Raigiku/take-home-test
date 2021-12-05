## Instructions for running project
**Prerequisites**
- Install Node.js (https://nodejs.org/en/download/) with the default features installed.

**Backend (NestJS - RESTful API)**
1. Verify that **port 3001** in your pc is not being used. If it is being used, either:

	1.1. Change the port in `line 20` inside the file `take-home-web-api/src/main.ts` to another one.

	1.2. Or set the **environment variable** `TKTR_PORT` to an available port (you can create a `take-home-web-api/.env.development` file if you like).
	
2. Verify that GitHub has not blocked your IP for unverified API calls, due to rate limiting. If you have been blocked then:
	
	2.1. Set the **environment variable** `TKTR_GITHUB_USERNAME` to your GitHub username.
	
	2.2. Set the **environment variable** `TKTR_GITHUB_TOKEN` to one of your GitHub personal access tokens (https://github.com/settings/tokens), if you don't have any then create a new one without any scopes selected.
	
3. Open a terminal in the `take-home-web-api` directory.

4. Run the command `npm install`.

5. Run the command `npm run build`.

6. Run the command `npm run start:prod`.

7. To verify, open a browser window to `http://localhost:PORT/swagger` (`PORT` is the port specified in Step 1).

**Frontend (React - SPA)**
1. Open the `take-home-website` directory.

2. Create the file `take-home-website/.env.development` and add the following environment variable to the file:
```
REACT_APP_TKTR_API_URL=http://localhost:PORT
``` 
Where `PORT` is the port specified in Step 1 of the backend installation instructions.

3. Open a terminal in the `take-home-website` directory.
 
4. Run the command `npm install`.

5. Run the command `npm run start`.

6. To verify, open a browser window to `http://localhost:REACT_PORT` (`REACT_PORT` is the port React tells you the application is on in the terminal window after you run the application).

## Notes
In the following paragraphs I will explain the design decisions for the code structure of the backend project (NestJS - RESTful API). As the structure is complex and can be a bit difficult to understand. 

The code structure of the project is mainly inspired by Clean Architecture and Domain Driven Design. It also has a touch of my personal style. The amount of code needed to write for this project has increased a lot by using this code structure, however, the code is highly maintanable and decoupled. I do understand that in some cases it is necessary to lower the complexity of a code structure so that the development team can work on the same project without any conflicts in understanding. I indeed could have used a smaller code structure for this project, which would have decreased development time by a lot, but I decided to use this structure to highlight how well I understand complex code structures in the backend.

The project is separated by 4 layers: domain, infrastructure, interactor, presentation; and inside these layers by features: github commits, github branches, etc. The 1st decision was chosen because I wanted to draw a clear line of decoupling between the different classes, for example: the domain should be decoupled from everything. The 2nd decision was chosen because I wanted to improve the understanding of the theme behind the project (as suggested in https://blog.cleancoder.com/uncle-bob/2011/09/30/Screaming-Architecture.html).

I will proceed with a summary of the flow of data for getting github commits. I suggest opening the files for the classes explained so you can follow along without any problems.

---

```
GithubCommitController
take-home-web-api\src\presentation\github-commit\github-commit.controller.ts
```
The flow starts in the controller, this class is in charge of modeling the REST API routes. As well as the DTO models for requests and responses.


```
GetGithubCommitsInteractor
take-home-web-api\src\interactor\github-commit\get-github-commits\get-github-commits.interactor.ts
```
The controller data is passed down to this class, which is in charge of executing specific use case business logic for getting the github commits. In this case, there are no validations to be done, therefore, it only makes a single call to get the commits. In other use cases, like registering a user, this class would do validations like checking if the username already exists in the database.


```
GetGithubCommitsInteractorInput
take-home-web-api\src\interactor\github-commit\get-github-commits\get-github-commits.interactor.input.ts
```
Before data is passed down to `GetGithubCommitsInteractor` it needs to be validated by simple "syntax" rules. Like checking if the `repositoryName` is not empty. This is important because we want to minimize calling infrastructure services (apis, databases, etc) with already wrong values that will never return anything. These validations are done through static methods from classes called ValueObjects in the domain layer, for example, `GithubAccountName.validate(accountName, errors.accountName)`. Inside these ValueObjects I have put some basic validation rules, they do not contain all the validations rules that GitHub has established. It is also important to beware when adding validations rules that depend on infrastructure services. For example, I decided to put a max length limit of 39 characters for the GitHub Account Name, however, I do not represent the GitHub organization, and this constraint could change in the future without me being notified. Therefore, some inputs would be classified as wrong when they are indeed correct.


```
GetGithubCommitsInteractorInfra
take-home-web-api\src\interactor\github-commit\get-github-commits\get-github-commits.interactor.infra.ts
take-home-web-api\src\infrastructure\interactor-infra\github-commit\get-github-commits.interactor.infra.impl.ts
```
For the `GetGithubCommitsInteractor` class to get the git commits, it needs to call infrastructure services (GitHub API). Therefore, this abstract class is in charge of compiling all the needed methods that the use case needs for communicating with the infrastructure. It is an abstract class so that we can decouple the infrastructure layer from the interactor layer. Its implementation resides in the infrastructure layer as `GetGithubCommitsInteractorInfraImpl`.


```
GithubCommitApiRepository
take-home-web-api\src\infrastructure\dependencies\github-api\github-commit\github-commit-api.repository.ts
```
Sometimes, infrastructure services can be shared (apis, database, etc). For example, in most instances inserting a user in a database will always take the same inputs. Therefore, classes can be created to act as APIs for these things and be reused in other `InteractorInfra` classes instead of duplicating code. In this case, this class is in charge of providing methods to communicate with the routes of the GitHub API responsible for managing git commits, and it is used by the `GetGithubCommitsInteractorInfra` class to get the commits.
