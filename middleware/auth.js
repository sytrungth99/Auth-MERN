const jwt = require('jsonwebtoken');

const auth = (req,res,next) =>{
try{
    
    const Authorization = req.header('authorization'); 
    if(!Authorization) return res.status(400).json({msg: "Invalid Authentication."});
    const token = Authorization.replace('Bearer ','');
    console.log('token',token);

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user) =>{
        req.user = user;
        next(); 
        });
    
 
}catch(err){
    return res.status(500).json({msg:err.message})
}
    
}
module.exports = auth