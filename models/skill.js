// const moment = require('moment');
module.exports = function(sequelize, DataTypes) {
    const Skill = sequelize.define("Skill", {

        name: DataTypes.STRING,
        email: DataTypes.STRING,
        skills: DataTypes.TEXT,
        category: DataTypes.STRING,
        title: DataTypes.STRING,
        compensation: DataTypes.TEXT,
        location:DataTypes.TEXT,
        description: DataTypes.STRING,


    });
    return Skill;
};
