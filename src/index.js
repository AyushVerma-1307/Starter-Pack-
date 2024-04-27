import dotenv from "dotenv";
import connectDb from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./env",
});

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send("server is up and running");
  });

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on port http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDb connection falied !!!", error);
  });
