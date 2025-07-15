// Utility function to generate a random delay
function getRandomDelay() {
  return (Math.floor(Math.random() * 7) + 1) * 1000;
}

// Individual message functions
async function firstMsg() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Initializing Hacking");
    }, getRandomDelay());
  });
}

async function secondMsg() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Reading your Files");
    }, getRandomDelay());
  });
}

async function thirdMsg() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Password files Detected");
    }, getRandomDelay());
  });
}

async function fourthMsg() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Sending passwords to server");
    }, getRandomDelay());
  });
}

async function fifthMsg() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Cleaning up");
    }, getRandomDelay());
  });
}

// Typing effect function
async function typeWriterEffect(msg) {
  const html = document.querySelector(".container");

  const msgBox = document.createElement("div");
  msgBox.classList.add("msg");

  const p = document.createElement("p");
  msgBox.appendChild(p);

  // Add 3 blinking dots
  for (let i = 0; i < 3; i++) {
    const dot = document.createElement("div");
    dot.classList.add("first");
    msgBox.appendChild(dot);
  }

  html.appendChild(msgBox);

  // Letter-by-letter typing
  for (let i = 0; i < msg.length; i++) {
    p.textContent += msg[i];
    await new Promise((res) => setTimeout(res, 50)); // adjust speed here
  }
}

// Master calling function
async function calling() {
  await typeWriterEffect(await firstMsg());
  await typeWriterEffect(await secondMsg());
  await typeWriterEffect(await thirdMsg());
  await typeWriterEffect(await fourthMsg());
  await typeWriterEffect(await fifthMsg());
}

calling(); // Start on load
