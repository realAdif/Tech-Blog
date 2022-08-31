const sequelize = require('../config/connection');

const seedUsers = require('./userDate.json');
const User = require('../models/user')

const seedDataBase = async () =>{
    await sequelize.sync({force: true});

    const users = await User.bulkCreate(seedUsers, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);

};
seedDataBase();