var express = require('express');
var router = express.Router();

router.get('/hello234234', (req,res)=>{
    res.send({
        message:'Weclome to EMS backend'
    })
})
module.exports = router;