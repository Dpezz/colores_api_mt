"use strict";

module.exports = (sequelize, DataTypes) => {
    const Color = sequelize.define(
        "Color",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: true,
                    notEmpty: true,
                },
            },
            color: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: true,
                    notEmpty: true,
                },
            },
            year: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: true,
                    notEmpty: true,
                    isInt: true,
                },
            },
            pantone_value: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: true,
                    notEmpty: true,
                },
            },
        },
        { timestamps: false }
    );
    Color.associate = function (models) {
        // associations can be defined here
    };
    return Color;
};
