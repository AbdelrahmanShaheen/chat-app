# Chat App

<details>
<summary>Table of content</summary>

- [Description](#description)
- [Features ✨](#features-)
- [Screenshots 🖵](#screenshots-)
- [Project structure](#project-structure)
- [Installation 📥](#installation-)
- [How to use](#how-to-use)
- [Tech/Framework used 🧰](#techframework-used-)
- [Deployment/Live Demo](#deploymentlive-demo)
</details>

### Description

The chat app is a real time application , users can join a room and chat with individuals in that specific room. \
This app uses Socket.IO library that built on top of the WebSocket protocol ,This allowed us to set up an application with real time bidirectional communication where the client can send information to the server and the server can send information to the client over this persistent connection.

## Features ✨

The system serves 2 types of users (Admin & who Join chat room).

- As an admin : - When joining a chat room an admin sends a welocme message to only the user who just joined \
  and notify all users in the same chat room that someone has joined the room - When leaving/logout from the chat room an admin notify all the users in the same chat room that \
  some one has left the room - As users enter and leave the room, the room list updates and an admin message announces the change.
- As a user :
  - user can join a room using username and room name.
  - user can send messages to users in the room.
  - user can send his/her location to users in the room.

## Screenshots 🖵

<details>
<summary>Join page</summary>

![login page](https://user-images.githubusercontent.com/77184432/215225829-48e24b82-f755-48d4-b741-1bf86f3a2d60.png)

</details>

<details>
<summary>2 users try to login to same room</summary>
    
![user1 and 2 try to login](https://user-images.githubusercontent.com/77184432/215226619-64727aec-087c-4192-87ee-a29efbfb3867.png)
   
</details>

<details>
<summary>User1 logged in</summary>
    
![user1 login](https://user-images.githubusercontent.com/77184432/215227090-1d8c8685-d3a1-4e55-b993-29135a9c7bd5.png)
    
</details>

<details>
<summary>User2 logged in</summary>

![user1 after user2 logged in](https://user-images.githubusercontent.com/77184432/215227614-beaa34cb-c3f6-491a-817d-d154e0e36af1.png)

</details>

<details>
<summary>user1 and user2 chatting</summary>

![user1 and user2 chatting](https://user-images.githubusercontent.com/77184432/215227988-a1076834-b81f-41f4-8c33-2f275ad3cbe2.png)

</details>

<details>
<summary>user1 sent location to user2</summary>

![user1 sent location to user2](https://user-images.githubusercontent.com/77184432/215228682-f5dcb959-87e1-435a-a20d-6398894fda93.png)

</details>

<details>
<summary>user1 logged out from Egypt chat room</summary>

![user1 logout from Egypt chat room](https://user-images.githubusercontent.com/77184432/215228749-380d9d9f-c31a-4eba-8d25-3b26dabf54d8.png)

</details>

## Project structure

<details>
<summary>Click to expand!</summary>

```bash
## Project Structure
📦chat-app
 ┣ 📂public
 ┃ ┣ 📂css
 ┃ ┃ ┣ 📜.DS_Store
 ┃ ┃ ┣ 📜styles.css
 ┃ ┃ ┗ 📜styles.min.css
 ┃ ┣ 📂img
 ┃ ┃ ┗ 📜favicon.png
 ┃ ┣ 📂js
 ┃ ┃ ┗ 📜chat.js
 ┃ ┣ 📜chat.html
 ┃ ┗ 📜index.html
 ┣ 📂src
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📜messages.js
 ┃ ┃ ┗ 📜users.js
 ┃ ┗ 📜index.js
 ┣ 📜.gitignore
 ┣ 📜package.json
 ┗ 📜README.md

```

</details>

## Installation 📥

Install my-project with npm

```bash
> git clone https://github.com/AbdelrahmanShaheen/chat-app
> cd chat-app/
> npm install
```

## How to use

use the scripts in package.json

```bash
> npm run start
or
> npm run dev
```

or

```bash
> node src/index.js
or
> nodemon src/index.js
```

the backend server will be running on prot 3000

## Tech/Framework used 🧰

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Git](https://git-scm.com/)
- [Socket.io](https://socket.io/)
- [mustache.js](https://github.com/janl/mustache.js)
- [moment.min.js](https://momentjs.com/)
- [qs](https://cdnjs.com/libraries/qs)
- [VSCode](https://code.visualstudio.com/)

## Deployment/Live Demo

Deployed Website: [chat app](https://chat-app-m018.onrender.com/)
