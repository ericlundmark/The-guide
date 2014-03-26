#The guide
Restaurant rating web app written in Meteor

##Functional specification

The projects main goal is to supply a platform that allows rating, adding and searching restaurants.

###The possible actions for a logged in user
A user that has logged in will be able to perform the following tasks:
*Add a restaurant
*View restaurants
*Search restaurants
*Comment on a restaurant
*Upvote a restaurant

###The possible actions for a user that has not logged in
A user that has not logged in will be able to perform the following tasks:
*View a restaurant
*Search restaurants
=========
##Technological specification

###Server and client framework
Since I have decided to use Meteor as my framework it will both me my server- and client-side framework. The server-side will handle storage and access of data. The client-side will be responsible for rendering and storing data locally.

###Storage
Data will be stored on the server using MongoDB. On the client it will be stored in a so called 'minimongo' allowing heavy caching and hopefully a responsive app.

###Authentication
Authentication will be handled using a package called 'accounts-base' and for the UI I will use a package called 'accounts-ui-bootstrap-3'. Accounts-base will allow oAuth from several providers such as Github, Facebook and Google.

###Multiple clients
As meteor uses a protocol called DDP it is difficult but possible to hook up multiple clients. Though this is something I will not intend to do. See link below for possible ways to handle e.g. Android clients. 
http://stackoverflow.com/questions/10581948/how-can-meteor-be-coupled-to-an-android-app