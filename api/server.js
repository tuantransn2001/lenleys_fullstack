const express = require("express");
const { sequelize } = require("./models");
const app = express();
// ? Chuyển kiểu dữ liệu thành JSON
app.use(express.json());
// ? Thiết lập đường đường dẫn tới public
const pathPublic = app.join(__dirname, "./public");
app.use(express.static(pathPublic));
const port = 8080;
app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);
  // ? Kiểm tra sequelize có kết nối được với database hay chưa
  try {
    await sequelize.authenticate();
    console.log("Connect success");
  } catch (err) {
    console.log(`Fail to connect with database <=> Error: ${err}`);
  }
});
