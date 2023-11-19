<h1 align="center">
  Game List V1 (Frontend)
  <br> 
</h1>
<h4 align="center">Game List is a social game-tracking app that allows users to easily search, filter, and track their video game collections, enabling them to share their gaming status and interact with others through comments, likes, and following. The V1 backend can be accessed <a href="https://github.com/Yzma/game-list-backend-v1">here.</a></h4>
<br>

<p align="center">
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#media">Media</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#building">Building</a> •
  <a href="#authors">Authors</a> 
</p>

<h3 align="center">Live Demo: <a href="https://gamelistapp.netlify.app/home/">https://gamelistapp.netlify.app/home</a></h3>
<br>

## Tech Stack

- [React.js](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Ant Design](https://ant.design/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [Lodash](https://lodash.com/)
- [DayJS](https://day.js.org/)
- [React Beautiful DND](https://github.com/atlassian/react-beautiful-dnd)
- [React Intersection Observer](https://www.npmjs.com/package/react-intersection-observer)
- [XState](https://xstate.js.org/)

## Media

### Index page and infinite scrolling
![Infinite Scrolling](/Media/Infinite%20Scrolling.gif)

### Add game to list
![Add game to list](/Media/Add%20game%20to%20list.gif)

### Using normal filters
![Using normal filters](/Media/Using%20normal%20filters.gif)

### Using exclusion/inclusion game filters
![Using exclusion filters](/Media/Using%20exclusion%20filters.gif)

### Profile Page
![Profile page](/Media/Profile%20page.gif)

### Game list profile page
![Game list profile page](/Media/Game%20list%20profile%20page.gif)

### Social Forum
![Forum page](/Media/Forum%20page.gif)

## Getting Started

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

1. Clone the repository

```sh
git clone https://github.com/Yzma/game-list-frontend-v1.git
```

2. Move to the correct directory

```sh
cd game-list-frontend-v1
```

3. Install dependencies

```sh
npm install
```

4. Fill out all variables in .env file.

```sh
VITE_BACKEND="http://127.0.0.1:3000/graphql"
REACT_APP_BACKEND="http://127.0.0.1:3000/graphql"
VITE_TOKEN_TEST=""
VITE_USER_EMAIL_TEST="v@gmail.com"
VITE_PASSWORD_TEST="password"
```

5. Run the application

Note: Make sure the [backend](https://github.com/Yzma/game-list-backend-v1) is running first before starting the client!

```sh
npm start
```

## Building

Run 'npm run build' and use the newly created 'build' folder for deployment.

## Authors

- <a href="https://github.com/Yzma">Andrew Caruso</a>
- <a href="https://github.com/changLiCoding">Chang Li<a>
- <a href="https://github.com/tienviet10">Viet Tran<a>
