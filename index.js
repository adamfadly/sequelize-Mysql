const Sequelize = require("sequelize");
const sequelize = new Sequelize("employees", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const User = sequelize.define("user", {
  first_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  last_name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    unique: true
  }
});

// force: true will drop the table if it already exists
// User.sync({ force: true }).then(() => {
// Table created
//   console.log("table creataed");
// });

// User.create({
//   first_name: "llmlaaef",
//   last_name: "budi",
//   email: "fusaefaefash@gmail.com"
// })
//   .then(() => console.log("berhasil"))
//   .catch(() => console.log("gagal"));
// Read By Id ------------------------------------
// User.findById(1, { raw: true })
//   .then(user => console.log(user))
//   .catch(err => console.log(err));
// -----------------------------------------------

// Read All --------------------------------------
// User.findAll({ raw: true })
//   .then(user => console.log(user))
//   .catch(err => console.log(err));
// -----------------------------------------------

// Update All By Id, Last_name ect ---------------
// User.update(
//   {
//     first_name: "jjjoko",
//     email: "llll@kol.com"
//   },
//   {
//     where: {
//       last_name: "kiko"
//     }
//   }
// )
//   .then(result => {
//     console.log("Berhasil");
//   })
//   .catch(err => console.log(err));
// -----------------------------------------------

// Delet one -------------------------------------
// User.findOne({ where: { id: 1 } })
//   .then(user => {
//     user
//       .destroy()
//       .then(res => console.log(res))
//       .catch(err => console.log(err));
//   })
//   .catch(user => console.log(err));

// // Search
const Op = Sequelize.Op;

User.findAll({
  where: { [Op.or]: [{ last_name: "budi" }, { raw: true }] },
  raw: true
})
  .then(user => console.log(user))
  .catch(err => console.log(err));

// // sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch(err => {
//     console.error("Unable to connect to the database:", err);
//   });
