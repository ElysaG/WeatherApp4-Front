// Insert your code here
const registerBtn = document.getElementById("register");
const connectionBtn = document.getElementById("connection");

// Inscription
registerBtn.addEventListener("click", () => {
  const user = {
    name: document.getElementById("registerName").value,
    email: document.getElementById("registerEmail").value,
    password: document.getElementById("registerPassword").value,
  };

  fetch("http://localhost:3000/users/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "données envoyées");
      //le data.result sera true ou false
      if (data.result) {
        window.location.assign("index.html"); //on renvoie sur index.html
      } else {
        alert("Erreur : " + data.error); //on renvoie le message error du back
      }
    })
    .cath((err) => console.log("erreur catchée POST Signup", err));
});

// Connection
connectionBtn.addEventListener("click", () => {
  const user = {
    email: document.getElementById("connectionEmail").value,
    password: document.getElementById("connectionPassword").value,
  };

  fetch("http://localhost:3000/users/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      // /le data.result sera true ou false
      if (data.result) {
        window.location.assign("index.html");
      } else {
        alert("Erreur : " + data.error); //on renvoie le message error du back
      }
    })
    .cath((err) => console.log("erreur catchée POST Signin", err));
});
