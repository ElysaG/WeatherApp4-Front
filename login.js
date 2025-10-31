// Insert your code here
const registerBtn = document.getElementById("register");
const connectionBtn = document.getElementById("connection");
console.log(connectionBtn);

// Inscription
registerBtn.addEventListener("click", async () => {
  // console.log("click inscription button");
  const user = {
    name: document.getElementById("registerName").value,
    email: document.getElementById("registerEmail").value,
    password: document.getElementById("registerPassword").value,
  };

  const res = await fetch(
    "https://weather-app4-back-ten.vercel.app/users/signup",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }
  );
  const data = await res.json();

  // console.log(data, "données envoyées");
  //le data.result sera true ou false
  if (data.result) {
    window.location.assign("index.html"); //on renvoie sur index.html
  }
});

// Connection
connectionBtn.addEventListener("click", () => {
  // console.log("click connection button");

  const user = {
    email: document.getElementById("connectionEmail").value,
    password: document.getElementById("connectionPassword").value,
  };

  fetch("https://weather-app4-back-ten.vercel.app/users/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      // /le data.result sera true ou false
      // console.log(data);

      if (data.result) {
        window.location.assign("index.html");
      }
    });
});
