const socket = io();
//DOM elements
const input = document.querySelector("#message-input");
const form = document.querySelector("#message-form");
const locationBtn = document.querySelector("#send-location");
const sendBtn = form.querySelector("#btn");
const messages = document.querySelector("#messages");
const sidebar = document.querySelector(".chat__sidebar");
//templates
const messageTemplate = document.querySelector("#message-template").innerHTML;
const locationMessageTemplate = document.querySelector(
  "#location-message-template"
).innerHTML;
const sidebarTemplate = document.querySelector("#sidebar-template").innerHTML;
//................................................

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendBtn.setAttribute("disabled", "disabled");
  const message = input.value;
  input.value = "";
  input.focus();
  socket.emit("sendMessage", message, (message) => {
    sendBtn.removeAttribute("disabled");
    console.log("The message was delivered! " + message);
  });
});

locationBtn.addEventListener("click", () => {
  if (!navigator.geolocation)
    return alert("Geolocation is not supported by your browser.");

  locationBtn.setAttribute("disabled", "disabled");
  navigator.geolocation.getCurrentPosition((position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    socket.emit("sendLocation", { latitude, longitude }, () => {
      locationBtn.removeAttribute("disabled");
      console.log("Location shared!");
    });
  });
});

const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});
socket.emit("join", { username, room }, (error) => {
  if (error) {
    alert(error);
    location.href = "/";
  }
});
const autoscroll = () => {
  // New message element
  const newMessage = messages.lastElementChild;

  // Height of the new message
  const newMessageStyles = getComputedStyle(newMessage);
  const newMessageMargin = parseInt(newMessageStyles.marginBottom);
  const newMessageHeight = newMessage.offsetHeight + newMessageMargin;

  // Visible height
  const visibleHeight = messages.offsetHeight;

  // Height of messages container
  const containerHeight = messages.scrollHeight;

  // How far have I scrolled?
  const scrollOffset = messages.scrollTop + visibleHeight;

  if (
    Math.round(containerHeight - newMessageHeight) <= Math.round(scrollOffset)
  ) {
    messages.scrollTop = messages.scrollHeight;
  }
};
socket.on("message", (message) => {
  console.log(message);
  const html = Mustache.render(messageTemplate, {
    username: message.username,
    message: message.text,
    createdAt: moment(message.createdAt).format("h:mm a"),
  });
  messages.insertAdjacentHTML("beforeend", html);
  autoscroll();
});

socket.on("locationMessage", (URL) => {
  console.log(URL);
  const html = Mustache.render(locationMessageTemplate, {
    username: URL.username,
    URL: URL.text,
    createdAt: moment(URL.createdAt).format("h:mm a"),
  });
  messages.insertAdjacentHTML("beforeend", html);
  autoscroll();
});

socket.on("roomData", ({ room, users }) => {
  const html = Mustache.render(sidebarTemplate, {
    room,
    users,
  });
  sidebar.innerHTML = html;
});
