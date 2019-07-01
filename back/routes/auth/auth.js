const express = require('express');
const router = express.Router();
const connection = require('../../helpers/db');


router.post('/signup', function(req, res, next) {
    console.log('req: ', req.body.email);
    const user  = { 
        email: req.body.email, 
        password: req.body.password, 
        name: req.body.name, 
        lastname: req.body.lastname 
    };
    connection.query('INSERT INTO users SET ?', user, function(
        error,
        results,
        fields,
        ) {
            if (error){
                res.status(500).json({ flash:  error.message });
            } else{
                res.status(200).json({ flash:  "User has been signed up!" });
            }
            res.end();
        }
    );
});

module.exports = router;