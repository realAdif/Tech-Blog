const router = require('express').Router();


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

// router.get('/dashboard', async(req,res)=>{
//   try{
//     res.render('dashboard',{
//       logged_in: req.session.logged_in
      
//     });
//   }catch(err){
//     res.status(500).json(err);
//   }
// });

router.get('/post', async(req,res)=>{
  try{
    res.render('post');
  }catch(err){
    res.status(500).json(err)
  }
})

router.get('/signup', (req, res) => {
  res.status(200).render('signup');
});

module.exports = router;