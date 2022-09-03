const sequelize = require('../config/connection');

const seedUsers = require('./userDate.json');
const seedPost = require('./postDate.json');


const {User,Post} = require('../models');
console.log(seedPost);

const seedDataBase = async () =>{
    await sequelize.sync({force: true});

    const users = await User.bulkCreate(seedUsers, {
        individualHooks: true,
        returning: true,
    });

    // const post = await Post.bulkCreate(seedPost, {
        
    // });

    for (const post of seedPost) {
        await Post.create({
          ...post,
        });
      }
    
    // for (const post of seedPost) {
    //     await Post.create({
    //       ...post,
    //     });
    // }
    process.exit(0);

};
seedDataBase();