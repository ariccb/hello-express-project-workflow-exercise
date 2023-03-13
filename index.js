import express from "express";
import { drinkHandler } from "./drinkHandler.js";

const app = express();
const PORT = 9000;
app.use(express.json());

app.get("/", (request, response) => {
   response.send("You requested the home endpoint.\n");
});

app.use("/drinks", drinkHandler);

app.listen(PORT, () => {
   console.log(`Server is up and running on PORT: ${PORT}`);
});
