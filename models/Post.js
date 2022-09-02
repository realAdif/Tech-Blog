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
            
        },
        user_id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: "user"
            }
        }

    },
    {
        sequelize,
        modelName: 'post',
    }



);

module.exports = Post;