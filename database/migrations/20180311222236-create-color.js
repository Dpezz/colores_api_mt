"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("Colors", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
                required: true,
            },
            color: {
                type: Sequelize.STRING,
                required: true,
            },
            pantone_value: {
                type: Sequelize.STRING,
                required: true,
            },
            year: {
                type: Sequelize.INTEGER,
                required: true,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("Colors");
    },
};
