const router = require('express').Router();
// const { User } = require('../../models');
const {User} = require('../../models');

router.post('/signup', async (req, res) => {
    try {
      const userData = await User.create(req.body);
  
          req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.logged_in = true;
  
          res.status(200).json(userData);
        });
      } catch (err) {
        console.log(err)
        res.status(400).json(err);
      }
});


router.post('/login', async (req,res) =>{
    try{
        const userDate = await User.findOne({where: {email: req.body.email}});

        if(!userDate){
            res.status(400).json({message:"'Incorrect email ' "});
            return;
        }
        const validPassword = await userDate.checkPassword(req.body.password);

        if (!validPassword) {
            res
            .status(400)
            .json({ message: 'Incorrect password,' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userDate.id;
            req.session.logged_in = true;

            res.json({ user: userDate, message: 'You are now logged in!' });
            console.log('you are logged in');
        });


    } catch(err){
        res.status(400).json(err);
    }
});
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
});

module.exports = router;