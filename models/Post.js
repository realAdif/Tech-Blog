const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

Post.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        post:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        author:{
            type: DataTypes.STRING,
            allowNull: false,
        }

    },
    {
        sequelize,
        modelName: 'post',
    }



);

module.exports = Post;