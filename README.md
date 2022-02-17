# Parch-Posey-Customer-Portalv3

[Link](https://github.com/mode/parch-posey-backend) to the repo for the backend application that supports this React Application. 

## WELCOME!!


![Screen Shot 2022-02-15 at 2 55 39 PM](https://user-images.githubusercontent.com/41496659/154163964-3745e823-684d-4591-8834-1c6d67a34894.png)


Welcome to the 3rd version of Parch & Posey's WLE Customer Portal! This version utilizes React, Heroku, Node and Express to showcase WLEs. Here are the reports that embeded within the Application. 

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

Now that the branch is updated in Github, we can go into the Github UI (website) to make a Pull Request to merge our branch to the "Main" branch. 




COMPONENTs 
