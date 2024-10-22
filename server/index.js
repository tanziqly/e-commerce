import express from "express";
import userRoutes from "./routes/user.routes.js";

const PORT = process.env.PORT || 7000;
const app = express();

app.use(express.json());

app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is succesfully working. PORT: ${PORT}`);
});
