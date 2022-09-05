const sequelize = require('../config/connection');

const seedUsers = require('./userDate.json');
const seedPost = require('./postDate.json');
const seedComment = require('./commentDate.json');

const {User,Post,Comment} = require('../models');


const seedDataBase = async () =>{
  await sequelize.sync({force: true});

  const users = await User.bulkCreate(seedUsers, {
    individualHooks: true,
    returning: true,
  });

  for (const post of seedPost) {
    await Post.create({
      ...post,
    });
  }
  
  for(const comment of seedComment){
    await Comment.create({
      ...comment
    });
  }

  process.exit(0);

};
seedDataBase();