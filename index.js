require("dotenv").config();
const server = require("./api/server");

const port = process.env.PORT || 5123;

server.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
