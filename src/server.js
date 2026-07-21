require("dotenv").config();
require("./config/db");

const app = require("./app");
const startWorker = require("./queue/worker");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

    startWorker();
});