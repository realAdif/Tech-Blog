const router = require('express').Router();
const {Post, User} = require('../models');


router.get('/', async(req,res)=>{
    Post.findAll({
        include:[
            {
                model: User
            }
        ]

    }).then(data =>{
        const posts = data.map((post)=>
            
            post.get({ plain: true })
        );

        console.log(posts);
        
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