# Pixabay Feed
A Full Stack Rails/React Project providing user authentication and the ability to browse Pixabay content (photos/videos).

1. [Quick Start](#quick-start)
1. [Front-End Architecture](#front-end)
1. [Back-End Architecture](#back-end)
1. [Trade-Offs](#trade-offs)
1. [Testing](#testing)
1. [To-Do](#to-do)

## 🚀 Quick Start
<a name="quick-start"/>

Clone the site and change to its directory. Prerequisites for this project require having Docker.

  ```sh
  git clone https://github.com/xbreid/pixabay-feed
  cd pixabay-feed
  ```

##Deployment

Build/rebuild docker containers:

    make build

If this is your first run, set up db, etc:

    make setup

Run containers:

    make start



## ⚙️ Front-End Architecture
<a name="front-end"/>

### Built on Vite

Since this project was spun up using [Vite](https://vitejs.dev/), it's purely a client side rendered single page React application. Uses the power of esbuild over webpack for faster build times.

### Styles

Styles in this project are written in SASS using SCSS syntax. Implementation is handled by node-sass, and esbuild. BEM styling model was used.

### Animations/Transitions

All Animations and transitions are done through react-pose and pure SCSS.

### Design

I followed I very minimalist design approach. The site was styled mobile first, meaning media queries are done for tablet, desktop.

## ⚙️ Back-End Architecture
<a name="back-end"/>

### Ruby on Rails

This project uses a decoupled Rails API backend. Acting as a middleware microservice for managing queries to Pixabay.

### Security/API Auth

Currently the project is using JWTs to authorize users and provides a valid 48 hours token. 

## 👨‍💻 Trade Offs
<a name="trade-offs"/>

### Production Deployments
Due to time constraints, this projects doesn't have much set up for an optimized production environment. Currently the site is hosted using Vite's Preview functionality which is not meant for a scalable production environment.

### Testing
<a name="testing"/>

Unit Testing to come soon hopefully, but right now no unit tests have been created.


## ✔️ To Do
<a name="to-do"/>

1. Unit Testing

1. UI Build out
