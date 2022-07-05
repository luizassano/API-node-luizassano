import express from "express";
import "dotenv/config";
import { startDatabase } from "./database";
const app = express();
app.use(express.json());
app.use('/categories', categoriesRouter)
app.use('/products', productsRouter)

export default app.listen(process.env.PORT, () => {
  console.log('open');
  startDatabase()
});
 