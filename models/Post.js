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
            allowNull: false,
        },
        post:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        // user_name:{
        //     type: DataTypes.STRING,
        //     references:{
        //         model:"user",
        //         key:"username"
        //     }
            
        // },
        user_id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: "user",
                key: "id"
            }
        }

    },
    {
        sequelize,
        modelName: 'post',
    }



);

module.exports = Post;