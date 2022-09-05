const router = require('express').Router();
const {Comment} = require('../../models');

router.post('/', async(req,res)=>{
    try{
        const commentData = await Comment.create({
            comment: req.body.comment
        });

        res.status(400).json(commentData);
    }catch(err){
        res.status(400).json(err);
    }
});

module.exports = router;