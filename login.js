// Insert your code here
const registerBtn = document.getElementById("register");
const connectionBtn = document.getElementById("connection");

// Inscription
registerBtn.addEventListener("click", async () => {
  const user = {
    name: document.getElementById("registerName").value,
    email: document.getElementById("registerEmail").value,
    password: document.getElementById("registerPassword").value,
  };

  try {
    const res = fetch("https://weather-app4-back-ten.vercel.app/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await res.json();

    console.log(data, "données envoyées");
    //le data.result sera true ou false
    if (data.result) {
      window.location.assign("index.html"); //on renvoie sur index.html
    }
  } catch (err) {
    console.log("erreur catchée POST Signup", err);
  }
});

// Connection
connectionBtn.addEventListener("click", () => {
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
      if (data.result) {
        window.location.assign("index.html");
      }
    });
});
