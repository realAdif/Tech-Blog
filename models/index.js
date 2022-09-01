const User = require('./Post');
const Post = require('./User');

Post.belongsTo(User,{
    foreignKey: 'id',
    onDelete: 'CASCADE'
});

module.exports = {User, Post};