/// app/app.js
// app/app.js
const express = require('express');
const sequelize = require('./models/db.js');
const User = require('./models/todoModel.js');
const todoRouter=require('./Routes/todoRouter.js')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/admin",todoRouter)

sequelize
  .sync()
  .then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to sync database:', error);
  });

