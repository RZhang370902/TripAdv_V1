const express = require('express');
const app = express(); 

app.use(express.json());

//databse
const db = require('./models');

//router
const tripsRouter = require('./routes/trips');
app.use('/trips', tripsRouter);

db.sequelize.sync().then(() => {
    app.listen(3002, () => {
        console.log('server started running on port 3002');
      });
}   
);

