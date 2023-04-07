const express = require("express");
const cors = require("cors");
require("./db/config");
const users = require("./db/Users");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/signup", async (req, resp) => {
  let data = new users(req.body);
  let result = await data.save();
  result.save();
  resp.send(result);
});

app.post("/login");

// /////////////////////////////////////////////

// const os = require("os");
// console.log(os.arch());
// console.log(os.platform());
// console.log(os.userInfo());
// console.log(os.totalmem() / (1024 * 1024 * 1024));
// console.log(os.freemem() / (1024 * 1024 * 1024));

// //////////////////////////////////////////////

app.listen(5000);
