import express from "express";
import "dotenv/config";
import { startDatabase } from "./database";
const app = express();
app.use(express.json());
app.use("/teste", (req, res)=>{
     res.send("Oi")
})
export default app.listen(process.env.PORT, () => {
  startDatabase();
  console.log("Server running port:" + process.env.PORT);
});