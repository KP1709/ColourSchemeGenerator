# Colour Scheme Generator
[![Netlify Status](https://api.netlify.com/api/v1/badges/50d6bd96-0cd1-40da-afb9-b29b7086678e/deploy-status)](https://app.netlify.com/sites/kareenapatel-colourschemegenerator/deploys)

## ⌨️ Tech stack
React / HTML / CSS / Axios / React (TanStack) Query 

## 🍼 Introduction
Having too many UseEffect hooks can make code buggy and difficult to manage. Additional logic is also required for error handling and loading. Therefore I created this project to practice using React Query as it comes with all of this built into the library. Multiple API calls are made with some queries dependent on each other and others running in parallel. This application allows the user to randomly generate a colour and see all the colour schemes relating to that colour. There are 8 colour schemes displayed: monochrome, monochrome light, monochrome dark, analogic, analogic complement, triad, complement and quad.

## 🛠️ Features
- Uses Axios and React Query to fetch and manage API calls
- Generates colour schemes based on a specific colour and displays them
- Able to generate a new colour and update the colour schemes for that colour
- Responsive design + basic Sass syntax implemented in plain CSS as now supported
- Tap on colour to copy hex code for use

## 📚 Resources
- React-query (TanStack) documentation - https://tanstack.com/query/latest/docs/framework/react/quick-start
- Learn React query in 50 minutes (Web Dev Simplified) - https://www.youtube.com/watch?v=r8Dg0KVnfMA
- Beginners guide to React Query (Refine) - https://refine.dev/blog/react-query-guide/#introduction
- The color API - https://www.thecolorapi.com/
  - Used for generating a random colour
  - Getting the details about a specific colour
  - Getting the colours for the colour schemes with the random colour used

## ➕ Features to add
- Suspense to show when each colour scheme is loading


