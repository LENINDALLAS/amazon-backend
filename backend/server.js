import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";
import orderRouter from "./routers/orderRouter.js";

// import data from './data.js'
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || " mongodb://localhost/amazona", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use("/api/users", userRouter);

app.use("/api/products", productRouter);

app.use("/api/orders", orderRouter);

app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb')
});

app.get("/", (req, res) => {
  res.send("Server is up");
});

// app.get('/api/products' , (req , res) => {
//     res.send(data.products);
// })

// app.get('/api/products/:id' , (req , res) => {
//    const product = data.products.find((x) => x._id === req.params.id);
//    if (product) {
//        res.send(product);
//    } else {
//        res.status(404).send({
//            message: 'Product not found'
//        })
//    }
// })

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
