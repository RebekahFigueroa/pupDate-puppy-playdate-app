# Phase 5 Ruby Project for Flatiron

# Dog playdate app- pupDate

This is an app that allows you to find puppy playdates for your dogs in order to have fun experiences for your pups.

# Why

The primary goal is to have a safe and simple way to find playdates without worrying about not having other dogs at the park when you show up.

# Build Status

Currently under development and deployed.

# Tech/ Framework used

- React
- Material UI
- Ruby on Rails
- NodeJS (v16), and npm
- Postgresql
- Google Cloud Storage

# Installation

1. Install Ruby `npm install`

2. Start Ruby server `npm run server`

3. Add react `$ npm install react react-dom`

4. Add Material-UI `$ npm install @mui/material @emotion/react @emotion/styled`

5. Add MUI fonts `$ npm install @fontsource/roboto`

6. Add MUI icons `npm install @mui/icons-material`

7. Start React `npm start`

# DB Diagram

![Project DB Diagram](/client/public/dbDiagram.png)

# Features

1. Login page

   - Used to either create an account or log into your account.

   ![Project Example Login](/client/public/phase5Login.png)

2. Home Page

   - Allows you to see all of the playdates you are signed up for and have created
   - Allows you to add additional pups to these playdates
   - Allows you to edit or delete a playdate you have created
   - Allows you to add comments to the playdate to communicate with other users

   ![Project Example Search](/client/public/phase5Home.png)

3. Playdates Page

- Allows you to view all available playdates
- Allows you to add a pup to a playdate
- Allows you to create a playdate

![Project Example Library](/client/public/phase5Playdates.png)

4. Dogs Page

- Allows you to see all dogs
- Allows you to see all playdates for a dog
- Allows you to add a pup to a dog's playdate

  ![Project Example Stats](/client/public/phase5Dogs.png)

  5. Profile Page

- Allows you to see all of your dogs
- Allows you to add a new dog to your profile
- Allows you to upload a picture of your dog

  ![Project Example Stats](/client/public/phase5Profile.png)

6. NavBar

- Used to navigate to the various pages within the app as well as logout when you are ready to end your sesssion.

# Future Roadmap

(in no particular order)

- Add search feature for playdate and dog lists
- Add a map feature to find dogs in your area
- Add an interactive calendar for your playdates instead of a list
- Let you create private playdates to invite others to

# Supplemental links

How to add error handling requirements to an event in Ruby on Rails:
https://medium.com/@figueroarebekah/how-to-add-error-handling-requirements-to-an-event-in-ruby-on-rails-2be8b5a61947
