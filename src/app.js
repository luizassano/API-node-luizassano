import express from "express";
import categoriesRouter from "./routers/categories.routes";
import productsRouter from "./routers/products.routes";
import { startDatabase } from "./database";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);
app.use('/',(req,res) => {res.send('hello world')})
export default app.listen(3000, () => {
     startDatabase();
});