const express = require("express");
const bodyParser = require("body-parser");
const mc = require("./controllers/messages_controller");

const app = express();

app.use(express.static(__dirname + "/../public/build"));
app.use(bodyParser.json());

app.get("/api/messages", mc.read);
app.post("/api/messages", mc.create);
app.put("/api/messages/:id", mc.update);
app.delete("/api/messages/:id", mc.destroy);

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
