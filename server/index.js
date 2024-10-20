import express from "express";

const PORT = 7000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("success");
});

app.listen(PORT, () => {
  console.log(`Server is succesfully working. PORT: ${PORT}`);
});
