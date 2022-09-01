const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        title:{
            type: DataTypes.STRING,
            
        },
        post:{
            type: DataTypes.STRING,
            
        },
        author:{
            type: DataTypes.STRING,
            
        }

    },
    {
        sequelize,
        modelName: 'post',
    }



);

module.exports = Post;