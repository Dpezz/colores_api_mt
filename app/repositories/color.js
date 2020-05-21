"use strict";

const { Color } = require("../models");
const LIMIT = 6;

exports.all = (page = 0) => {
    return Color.findAll({
        attributes: ["id", "name", "color"],
        limit: LIMIT,
        offset: page * LIMIT,
    });
};

exports.find = (id) => {
    return Color.findByPk(id);
};

exports.allCount = async() => {
    return await Color.count();
};
