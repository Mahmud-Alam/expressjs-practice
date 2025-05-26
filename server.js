import express from "express";
import  router  from "./routes/routes.js";

const PORT = 8000;

const app = express();

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

app.use("/api", router);
