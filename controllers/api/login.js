const router = require('express').Router();
const {User} = require('../../models');


router.post('/login', async (req,res) =>{
    try{
        const userDate = await User.findOne({where: {email: req.body.email}});

        if(!userDate){
            res.status(400).json({message:"'Incorrect email ' "});
            return;
        }
        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
            .status(400)
            .json({ message: 'Incorrect password,' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });


    } catch(err){
        res.status(400).json(err);
    }


})