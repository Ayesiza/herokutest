import express from 'express';
import {userController } from '../controllers/usersController';
import {checkIfUserExists,authValidate,getToken,userAgent} from '../middlewares/auth';
import { PropertyController } from '../controllers/propertysController';
import { propertyType, propertyValidate, verifyUserToken} from '../middlewares/property';

const user = new userController;
const advert = new PropertyController;
const router = express.Router();

router.post('/users/auth/signup',authValidate,checkIfUserExists,user.signUp )

router.post('/users/auth/signin',user.signIn)

router.post('/property',getToken, verifyUserToken, propertyValidate, userAgent, advert.postPropertyAdvert)

router.patch('/property/:id',getToken, verifyUserToken, userAgent, advert.updateProperty)

router.patch('/property/:id/sold',getToken, verifyUserToken, userAgent, advert.markAsSold)

router.delete('/property/:id',getToken, verifyUserToken, userAgent, advert.deleteAdvert)

router.get('/propertys',propertyType, advert.allProperty)

router.get('/property/:id', advert.specificProperty)

export default router;