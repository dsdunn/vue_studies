# Overview

The goal of this coding task is to give us an idea of your coding and problem solving skills. We will use this code as a discussion point during your in-person interview.

Please give this your best effort and let us know if you have any questions along the way. You should allocate at least a couple of hours to the task. It will require you to install docker and to be familiar with the basics of Vue.js. You can use whatever tools or materials you need to assist you.

Please follow the instructions below for submitting your files. 

# Project Requirements

We would like you to create a SPA that displays a list of surveys based on this interactive design mockup:
https://www.figma.com/proto/PF4PRhuoM8xqbHWdWlgzYj/StudyList_Practical

We have setup an API route (described below) that requests a list of surveys from a server. You can use that to populate the interface with an initial dataset.
We have not setup an API route to update the data. If you would like to setup your own backend, that is up to you (otherwise don't worry about it).

Ideally, each survey in the list should be rendered using a child vue.js component

Your app functionality should include:
*  Editing a study name
*  Incrementing the study completion count via the "Add Complete" button
*  Add a study to the list via the "Add Study" list
*  Delete a study in the list via the "Remove Study" list

We would also like to see some CSS styling and for you to follow the mockup as closely as possible. 
However, when it comes to the details, it is better to focus on spacing/alignment rather than getting extact colors/fonts.

# Vue Docker Container Setup, Development & Running

First, make sure Docker is installed and running.

Once you have cloned this repository, create the docker image by runing this command from your terminal in the cloned directory:

`docker build -t developer-sample-task . `

To create and run the docker container (**replacing ONLY the capitalized words in the command**):

`docker run -v \INSERT/PATH/TO/THE/CLONED/DIRECTORY:/app -v /app/node_modules -p 8081:8080 --rm developer-sample-task `

Ignore npm warnings for dependencies

Go to http://localhost:8081/ to verify the install worked properly.

If the Vue page loads, you're ready to start! While developing, you will need to get the changes to show on the page, which they will not do while loaded from the Docker container. 

Exit the docker container in the terminal and enter the following command:

`npm run serve`

Go to http://localhost:8080/

While in development, localhost:8080 will hot reload and reflect the changes you made in the application code. 

Be sure that everything still builds and runs with the `docker run` command above along the way.

# API Route to get initial data

ROUTE: 
https://www.cxsurveys.com/devtest/getStudyData.php

Will return json file with study data needed to initialize the interface.


# Submitting Results

Please add a comment in the main.js file with your name so we know this is your project. If there are any speical instructions, please provide them in an additional readme file.

When you have completed the task, create a zip archive of all files and include your name or initials in the archive name.
Upload it to the following dropbox file request link:

https://www.dropbox.com/request/NLv8VTB2JVH4lsqLACX3

