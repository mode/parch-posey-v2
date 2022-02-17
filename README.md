# Parch-Posey-Customer-Portalv4

[Link](https://github.com/mode/parch-posey-backend) to the repo for the backend application that supports this React Application. 

## WELCOME!!


![Screen Shot 2022-02-15 at 2 55 39 PM](https://user-images.githubusercontent.com/41496659/154163964-3745e823-684d-4591-8834-1c6d67a34894.png)


Welcome to the 4th version of Parch & Posey's WLE Customer Portal! This version utilizes React, Heroku, Node and Express to showcase WLEs. Here are the reports that embeded within the Application. 

_Overview_ - https://app.mode.com/demo/reports/635ba62f4a21 

_All Orders_ - https://app.mode.com/demo/reports/cb3fcbd2efeb



## HEROKU 

Please see this [Guru Card](https://app.getguru.com/card/T4pepjnc/Heroku-) on Heroku. 


## RUN LOCALLY

To run the application locally you will have to clone down a copy of this repo and then install the dependencies. Here is a [guide](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) on how to clone down a repo to your local machine.

Once you have the repo cloned down to your local machine, use your package manager to install all the dependencies in the package.json file. This app was built using NPM, so the following example would be how to run the command in NPM. 

`npm install`

Once everything is installed, to start the app and run it on a local server please use the following command. 

`npm start`

That command should pop-up a window with the app running on local host. 

## HOW TO UPDATE LIVE VERSION

<img width="1674" alt="Screen Shot 2022-02-17 at 9 44 21 AM" src="https://user-images.githubusercontent.com/41496659/154540174-5357597f-fa45-41ee-acbe-529d6fd0765c.png">

Once the app is running locally, you can use your IDE to make changes to the code. Most folks use VS Code (Visual Studio) or Atom. Feel free to use which every IDE you would like.

Before you make a change though, please branch off the "Main". It is good practice to make branches to update applications and it will ensure that the production site is clean. 

To create a branch in your IDE, open up a terminal. If you IDE doesn't have a terminal feature, that is why you should use VS code. Just kidding, but not really. Open up your terminal and navigate to the path of the application. If you just completed the step above you should already be within it. If not just go to the file where you are storing the local version of the application. 

From your main directory it should look something like the following: 

`cd ENTER_NAME_OF_DIRECTORY`

`cd ENTER_NAME_OF_FILE_HOUSING_APP`

on my computer it would be the following:

`cd solutions_examples`

`cd parch-posey-react-app`

Now from there we will create a branch so that we can work off that branch: 

First check if there are unstaged changes
`git status`

Most likely there aren't, if there are just discard them. We will then create the new branch and change over to it. The following command does both of those things at once:

`git checkout -b NAME_OF_BRANCH`

Once in the branch, make all the changes needed. For guidance on what things do and where they are please go to the guide below. Now when all changes are done, commit the changes up to Github. 

`git add .`

`git commit -m"Add a message of what you did"`

`git push`

Now that the branch is updated in Github, we can go into the Github UI (website) to make a Pull Request to merge our branch to the "Main" branch. In the repo, select the newly created branch. In the image below the new branch is "example"


![Screen Shot 2022-02-17 at 10 07 32 AM](https://user-images.githubusercontent.com/41496659/154544042-564cb1b4-2fec-4dca-8c96-b019ba0c1176.png)


When you are on the right branch, in the tool bar just above the files, select "Pull requests"


![Screen Shot 2022-02-17 at 10 07 52 AM](https://user-images.githubusercontent.com/41496659/154544189-61e6426f-2d43-448e-b310-a2261877a9c0.png)


And then click "Create pull request" to merge the branch to the "Main" branch. 


![Screen Shot 2022-02-17 at 10 08 12 AM](https://user-images.githubusercontent.com/41496659/154544309-202344be-2f4f-449e-b64d-46eed55756ed.png)

Github will merge the branches so long as there aren't conflicts. If there are any conflicts, it will show you a line by line breakdown where you can correct the conflicts. Now we can merge the request and close the branch. 

![Screen Shot 2022-02-17 at 10 08 28 AM](https://user-images.githubusercontent.com/41496659/154544553-708553b4-63dd-4531-9fd5-f624baccf010.png)


And the app should be updated!!! 


## COMPONENTs 

This application is built using React, which is a fun frontend framework to use. React constructs a single page application that contains an ecosystem of elements that are dependant on parent-child relationships and variables called State that can update various components when they change. 

In our Parch and Posey app we use very simple components to render the single page and the iFrames within the signed URLs. For simplicity I will only cover the main-page folder within the src folder. That is where most of the magic happends and where most likely changes will happen. 

### App.js 

The App is a component that houses all of our parent components. In it we have we have most of the user related methods and state variables. 


<img width="773" alt="Screen Shot 2022-02-17 at 11 25 45 AM" src="https://user-images.githubusercontent.com/41496659/154555807-858c667a-913d-4ded-9074-aa4fb5cd0201.png">

When a user first goes to the page, all of the values in the user State will be empty by default. Once they use a valid username/password combo, our backend will update these values. Once they are updated, we can access them in all child components of app.js 

#### User Auth Methods

The methods to validate a user also live in the app.js component. These methods get passed down as props to the child components to ensure we are getting the right user information. In this case, we are passing these methods down to the login.js component which is the landing page. 


<img width="1094" alt="Screen Shot 2022-02-17 at 11 27 46 AM" src="https://user-images.githubusercontent.com/41496659/154556763-3cb9f890-8133-44bd-91d6-c6a255583616.png">

The handleLogin method will call our backend API with the values the user enters into the username and password fields using axios. If the call succeeds, it will return a JWT token, which is how we know a user is logged into the application, and will set the user state with all the information about the user. 

If it fails, because it could not find a user, it will return a "Incorrect Username/email" message. 


<img width="1099" alt="Screen Shot 2022-02-17 at 11 27 53 AM" src="https://user-images.githubusercontent.com/41496659/154557336-cb859e89-ff31-49c5-9a73-5ad76cca6922.png">


The handleLogut method does everything in reverse. It will clear the JWT token, and make the user state empty. Once the state is empty, React will send the user to the signin page. 

And the final method is the handleinput method. All it does is record what a user types in the username/password fields and sends it to handleLogin method. So it is a helpful, helper function. 

### app.css 

Is where all the styling for the application is handled. Each section is marked within the file and the class names are pretty clear so that you know what you're updating. 


<img width="1161" alt="Screen Shot 2022-02-17 at 11 39 21 AM" src="https://user-images.githubusercontent.com/41496659/154557875-6e8ebe82-b78d-49d6-8bad-cf815a507406.png">


### mainContainer.js 

Is the 2nd largest component which houses the iFrames, toggleButtons, and the export buttons. It too will receive variables from the parent, app.js, but it will also send down it's own variables to it's children. 

It has two state variables. The first is `activeId` which identifies which report the user wants to see. It defaults to "Overview". The 2nd is `links`, this variable will record the CSV download link returned by the iFrame to allow users to download CSV data from the reports. 

The mainContainer.js alos has methods that are passed down to children to assist with keeping state updated. The first is `handleClick` which will do as it is named. When a user clicks on the toggleButtons, it will cause a cascading effect throughout the components. 

<img width="1239" alt="Screen Shot 2022-02-17 at 11 45 05 AM" src="https://user-images.githubusercontent.com/41496659/154558936-279de9e5-c532-4792-abbd-312c12a994fc.png">

If we click "All Orders", the components will re-render and change the report to the "All Orders" report. This happens because we change the `activeId` on the click event, when that value is changed it will send the new value downstream which will make a new request to get the signedURL for that report. 


<img width="1373" alt="Screen Shot 2022-02-17 at 11 49 11 AM" src="https://user-images.githubusercontent.com/41496659/154559552-499aa919-f80c-49b7-a262-484742cde67d.png">


The above is the HTML of how a component will be constructed and how we pass values to children components. Using the values in buttonData.json, which is just a json object of the possible reports, we create a toggleButton for each report using a map method. Map is just a way to iterate through a collection of values. 

As we do this, we are passing down values to the child components as attributes. 

<img width="955" alt="Screen Shot 2022-02-17 at 11 52 32 AM" src="https://user-images.githubusercontent.com/41496659/154560052-1204c52a-3183-4f7d-8279-4c6f5d0e4d00.png">

In the example above we are passing down the `handleClick` method so that we can update the value of the chosen report. We also pass down the current value of `activeId` so that the component can know which to highlight. 

And you are now a sort of React expert!!!

### Buttons Folder 

This folder containers the buttonData.json object that let's us know which repairs we can toggle through. It also contains all of the export button components. 

### Embed Folder 

The embed folder contains the iFrame component that will make a request to our backend to sign a report URL and deliver it back. When the report is returned from the backend, the embed.js component will add it to an iFrame and render it to the page. 

### login.js 

<img width="1670" alt="Screen Shot 2022-02-17 at 11 58 42 AM" src="https://user-images.githubusercontent.com/41496659/154561006-c2720cfe-533c-4ccd-a777-bf3e42274d48.png">

This component is what builds the landing page. It contains all the fancy SVGs that make up the design on the page. Also it will use the `handleLogin` and `handleLogut` methods listed in app.js

### header.js 

<img width="1680" alt="Screen Shot 2022-02-17 at 12 00 55 PM" src="https://user-images.githubusercontent.com/41496659/154561341-1be0fa99-8593-4b22-bb82-98e569ad70eb.png">


This component will only render when a user is logged into the application. It contains the "P" logo, the application title with the customer's name and the logout button. 

### assets 

This section contains all the images,jpgs that are used in the app such as the "P" logo and the login icons. 


## HAPPY HACKING, PLEASE FEEL FREE TO REACH OUT TO A POST-SALES SOLUTION ENGINEER IF YOU HAVE ANY QUESTIONS

