// const router = require('express').Router();
// const {Comment} = require('../../models');

// router.post('/', async(req,res)=>{
//     Comment.findAll({
//         where: {
//             user_id: req.session.user_id
    
//         }
//     }).then(data =>{
//         const comment = data.map((comment)=>/
//             comment.get({plain: true})
//         )

//         res.render('/comment:id', {
//             logged_in: req.session.logged_in,
//             comment
//         });

//     }).catch(err =>{
//         res.status(400).json(err);
//     });  
// });

// module.exports = router;