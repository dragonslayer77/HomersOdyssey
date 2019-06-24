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
            if(error){
                console.log('error: ', error);
                res.status(500).end();
            }
            res.end();
        }
    );
});

module.exports = router;