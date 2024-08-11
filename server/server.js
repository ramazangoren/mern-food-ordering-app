import express from "express";
import cors from "cors";
// import chalk from "chalk";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("api working");
});

app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`);
    // console.log(chalk.bgWhite.red(`\n\n   server started on http://localhost:${PORT}   \n\n`));
});
