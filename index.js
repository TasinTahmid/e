const express = require("express");
const userRouter = require("./routes/user.routes");

const app = express();
require("dotenv").config();

app.use(express.json());

const cors = require("cors");
app.use(cors());

app.use("/api/v1/users", userRouter);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...
    ${process.env.DB_PASSWORD}

    `);
});
