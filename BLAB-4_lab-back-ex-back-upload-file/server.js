const express = require('express');;
const connectBD = require('./config/connectDB.config');
const fileUploadMiddleware = require('./middlewares/fileUpload.middelwares');
const indexRouter = require('./routers/index.routers');
const contacFormRouter = require('./routers/contactForm.routers');




//Middelware
const app = express();
connectBD();
app.use(fileUploadMiddleware);


//Routing
app.use('/', indexRouter);
app.use('/api/user', contacFormRouter);


//connect server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});

