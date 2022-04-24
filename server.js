const app = require("./app");
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server Port: ${PORT}`);
    console.log("Server Is Running")
});