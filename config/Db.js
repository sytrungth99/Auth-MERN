const mongoose = require('mongoose');
const connectDB = async () =>{
    try{
        const conn = await mongoose.connect('mongodb+srv://sytrung:jlmTWVMynRVlfr4H@cluster0.nug8j.mongodb.net/mern-auth?retryWrites=true&w=majority',{
            useUnifiedTopology : true,
            useNewUrlParser : true,
            useCreateIndex :true
        })
        console.log('DB connect successfully')
    }catch (error) {
        console.log(error);
    }
}
module.exports = {connectDB}