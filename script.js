let random;
let timing;

async function firstMsg() {
  random = Math.floor(Math.random() * 7) + 1;
  timing = random * 1000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Initializing Hacking...");
    }, timing);
  });
}
async function secondMsg() {
  random = Math.floor(Math.random() * 7) + 1;
  timing = random * 1000;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Reading your Files...");
    }, timing);
  });
}
async function thirdMsg() {
  random = Math.floor(Math.random() * 7) + 1;
  timing = random * 1000;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Password files Detected...");
    }, timing);
  });
}

async function fourthMsg() {
  random = Math.floor(Math.random() * 7) + 1;
  timing = random * 1000;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Sending all passwords and personal files to server...");
    }, timing);
  });
}

async function fifthMsg() {
  random = Math.floor(Math.random() * 7) + 1;
  timing = random * 1000;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Cleaing up...");
    }, timing);
  });
}

async function calling() {
  let html = document.querySelector(".container");

  let firstmsg = await firstMsg();
  html.insertAdjacentHTML("beforeend", `<p>${firstmsg}</p>`);

  let secondmsg = await secondMsg();
  html.insertAdjacentHTML("beforeend", `<p>${secondmsg}</p>`);

  let thirdmsg = await thirdMsg();
  html.insertAdjacentHTML("beforeend", `<p>${thirdmsg}</p>`);

  let fourthmsg = await fourthMsg();
  html.insertAdjacentHTML("beforeend", `<p>${fourthmsg}</p>`);

  let fifthmsg = await fifthMsg();
  html.insertAdjacentHTML("beforeend", `<p>${fifthmsg}</p>`);
}

calling();
