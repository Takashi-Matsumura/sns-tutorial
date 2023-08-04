const express = require("express");
const app = express();
const authRouter = require("./routers/auth");
require("dotenv").config();

const PORT = 5000;

app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
