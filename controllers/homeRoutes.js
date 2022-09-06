const router = require('express').Router();
const {User,Post,Comment} = require('../models')

router.get('/', async (req, res) => {
    try {
      res.render('homepage',{
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
});
router.get('/login',async (req,res) =>{
    try {
        res.render('login');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard/:id', async(req,res)=>{
  try{
    const postData = await Post.findByPk(req.params.id);
    const commentData = await Comment.findAll({where:{post_id: req.params.id}, include:[{ model: User}] })
    


    res.render('postComment',{
      logged_in: req.session.logged_in,
      postData: postData.get({ plain: true }) ,
      comments: commentData.map(c => c.get({plain: true})),
    });
  }catch(err){
    console.log(err);
    res.status(500).json(err)

  }
});

router.get('/post', async(req,res)=>{
  try{
    res.render('post',{
      logged_in: req.session.logged_in
    });
  }catch(err){
    res.status(500).json(err)
  }
});

router.get('/signup', (req, res) => {
  res.status(200).render('signup');
});

module.exports = router;