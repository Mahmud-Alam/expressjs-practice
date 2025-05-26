import express from "express";
import  router  from "./routes/routes.js";
import cors from 'cors'

const PORT = 8000;

const app = express();

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

app.use(cors());
app.use("/api", router);
app.use((req, res)=>res.status(404).json({message:"Endpoint is not found!"}));
