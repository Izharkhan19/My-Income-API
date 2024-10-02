const express = require("express");
const cors = require("cors");
const db = require("./db/db");
const { readdirSync } = require("fs");

const app = express();

require("dotenv").config();

const PORT = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
readdirSync(`./routes`).map((route) =>
  app.use("/api/v1", require("./routes/" + route))
);

app.get("/", (req, res) => {
  res.send("Hello App");
});

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log(`You are listen on : ${PORT}`);
  });
};

server();

// const express = require("express");
// const axios = require("axios");
// const cors = require("cors");
// const app = express();
// const qs = require("qs");

// app.use(cors());
// app.use(express.json());

// const CLIENT_ID = "ats-75bad9d1-3b4a-4b31-8865-8612d5ac1247";
// const CLIENT_SECRET = "K84ZBGSd1SDUT9BZL_3-fOo2DKnf8sVm";
// const REDIRECT_URI = "https://melodic-faint-custard.glitch.me";

// // Route to exchange authorization code for access token
// app.post("/get-access-token", async (req, res) => {
//   const { code } = req.body;

//   const data = {
//     code: code,
//     client_id: CLIENT_ID,
//     client_secret: CLIENT_SECRET,
//     redirect_uri: REDIRECT_URI,
//     grant_type: "authorization_code",
//   };

//   axios
//     .post("https://api.in1.adobesign.com/oauth/v2/token", qs.stringify(data), {
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//     })
//     .then((response) => {
//       console.log("Access Token Response:", response.data);
//       res.json({ data: response.data }); // Send the access token and response back to frontend
//     })
//     .catch((error) => {
//       console.error(
//         "Error exchanging code for token:",
//         error.response ? error.response.data : error.message
//       );
//     });
// });

// // Start the server
// app.listen(5000, () => {
//   console.log("Server running on http://localhost:5000");
// });
