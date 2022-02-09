const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();

// app.use(() => {
//   console.log("Bom dia");
// });

app.use(cors());

app.use(express.json());
console.log("Porta: localhost:3333");
app.use(routes);

app.listen(3333);
