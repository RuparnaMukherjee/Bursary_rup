/*
 * Default Routers
 * 
 */
const express = require('express');
const router = express.Router();

/*
 * Importing all required controllers
 * i.e authController, orderController
 */
const Controllers = require('../controllers')
const { VerifyToken } = require('../middlewares')
const { Signup, Login, ResetPassword } = Controllers.Auth
const { ChangePassword } = Controllers.User

router.use((req, res, next)=>{
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Credentials', true);
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
	if ('OPTIONS' == req.method) {
      res.sendStatus(200);
    }
    else {
      next();
    }
});

router.post('/signup',Signup);
router.post('/login',Login);
router.get('/reset-password',ResetPassword);


// Protect all routes after this middleware
router.use(VerifyToken);

router.post('/change-password', ChangePassword)



//Global error handler
router.use((err, req, res, next) => {
    if (! err) {
        return next();
    }
    if (res.headersSent) {
		return next(err)
	}
    res.status(500);
    res.json({error:'500 Internal server error'});
});


module.exports = router;