const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

class Comment extends Model{}

Comment.init(
    {
        user_id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            references:{
                model:'user',
                key:'id',
            }
        },
        post_id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            references:{
                model:'post',
                key:'id',
            }
        },
        
        comment:{
            type:DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'comment',
    }
);

module.exports = Comment;