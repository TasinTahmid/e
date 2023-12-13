const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    // process.env.DATABASE_NAME,
    // process.env.SERVER_NAME,
    // process.env.DB_PASSWORD,
    "blog_server",
    "root",
    "my-secret-pw",
    {
        host: "db",
        dialect: "mysql",
    }
);

sequelize
    .sync({ force: false })
    .then(() => {
        console.log("connected successfully");
    })
    .catch((e) => {
        console.log("not conneted");
        console.log("from db.js", e);
    });

module.exports = sequelize;
