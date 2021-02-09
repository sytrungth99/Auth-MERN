const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name:{type: String, unique:true,require:[true,"Please enter your name!"],trim:true},
    email:{type: String,require:[true,"Please enter your email!"],trim:true,unique:true},
    password:{type: String,require:[true,"Please enter your name!"]},
    role:{type: Number,default: 0},//0 = user, 1 = admin
    avatar:{type: String,default:"https://www.vippng.com/png/detail/416-4161690_empty-profile-picture-blank-avatar-image-circle.png"},
},{timestamps:true});
userSchema.pre('save', function(next){
    let user = this;
    //ma hoa password trong data base
    bcrypt.hash(user.password,10,function(error,hash){
        if(error){
            return next(error);
        }else{
            user.password = hash;
            next();
        }
    })
})


const Users = mongoose.model('Users',userSchema);
module.exports = Users;