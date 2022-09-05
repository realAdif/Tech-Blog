const router = require('express').Router();
const {Post} = require('../models');


router.get('/', async(req,res)=>{
    Post.findAll({
        where:{
            // user_id: req.session.user_id
        } 
    }).then(data =>{
        const posts = data.map((post)=>
            
            post.get({ plain: true })
        )
        
        res.render('dashboard', {
            logged_in: req.session.logged_in,    
            posts
        });

    })
    .catch(err =>{
        res.status(400).json(err);
    });
});
module.exports = router;