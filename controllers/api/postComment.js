const router = require("express").Router();
const { Comment } = require("../../models");

router.post("/", async (req, res) => {
  Comment.create({ ...req.body, user_id: req.session.user_id })
    .then((data) => {
    //   const comment = data.map((comment) => comment.get({ plain: true }));
        console.log(data);
        res.status(200)
    })
    .catch((err) => {
      console.log(err);
        res.status(500).json(err);
      
    });
});

module.exports = router;