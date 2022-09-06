const router = require("express").Router();
const { Comment } = require("../../models");

router.post("/", async (req, res) => {
    console.log({ ...req.body, user_id: req.session.user_id })
  Comment.create({ ...req.body, user_id: req.session.user_id })
    .then((data) => {
    //   const comment = data.map((comment) => comment.get({ plain: true }));  
        
        const comment = data.get({plain: true});
        res.status(200).json(comment);
    })
    .catch((err) => {
      console.log(err);
        res.status(500).json(err);
      
    });
});

module.exports = router;