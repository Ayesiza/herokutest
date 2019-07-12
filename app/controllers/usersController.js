import { users } from '../models/users';
const appSecreteKey = 'hckjdsjsdadnbqdkjdqxbjkqwkn'
import jwt from 'jsonwebtoken';
export class userController{
signUp(req, res){
    const user = {
        id: users.length + 1,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        isadmin: req.body.isadmin
    };
    
    const token = jwt.sign({email:req.body.email}, appSecreteKey, { expiresIn: '1hr' });
    user.token = token;
    users.push(user);
            res.status(201).send({status:201,message:'successfuly signedUp', data:{
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        isadmin: req.body.isadmin,
        token
    }
            
       })
};

signIn(req, res){
    const user = users.find(user => {
        return user.email === req.body.email && user.password === req.body.password
    });
    // check if user doesnt exist
    if (!user) {
        return res.status(404).send({message: 'wrong email or password'})
    }
    const token = jwt.sign({email:req.body.email}, appSecreteKey, { expiresIn: '1hr' });
    user.token = token;
    res.send({status:200,message:'success',user})
};
};