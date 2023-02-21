const express = require("express");
const app = express();
const connectDB = require("./config/connection");
const cvRoute = require("./routes/cvroutes");
const clientRoute = require("./routes/userroutes");

const port = 5000;
connectDB();

app.use(express.json());

app.use("/api/client", clientRoute);
app.use("/api/cv", cvRoute);

app.listen(port, () => console.log(`server is running on port ${port}`));
