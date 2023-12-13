const express = require("express");
const userRouter = require("./routes/user.routes");

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

app.use("/api/v1/users", userRouter);

app.listen(5000, () => {
    console.log("Listening on port 5000...");
});
