const mongoose = require("mongoose");

mongoose
.connect(
    "mongodb+srv://" + process.env.DB_USER_PASS + "@groupomania.484g879.mongodb.net/groupomania",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));




