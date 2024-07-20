const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    `${process.env.DATABASE_URL}`
  );

  console.log("MongoDB conectado com sucesso!");
}

module.exports = main;
