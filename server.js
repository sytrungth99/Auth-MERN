require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const {connectDB} = require('./config/Db');
const authRoute = require('./routes/userRoute');



app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles: true
}));

//connect to mongodb
connectDB();
//connect to route
app.use('/user',authRoute);

const port = process.env.PORT;

app.listen(port,() =>{
    console.log(`server is running on port ${port}`);
});