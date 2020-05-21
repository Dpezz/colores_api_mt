"use strict";

const { Color } = require("../models");

const colorRepository = require("../repositories/color");

exports.all = (req, res) => {
    const page = parseInt(req.query.page);
    const offset = page > 1 ? page - 1 : 0;

    colorRepository.all(offset).then(async (response) => {
        const total_count = await colorRepository.allCount();
        res.send(getPagination(response, page, total_count));
    });
};

exports.store = (req, res) => {
    Color.create(req.body)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.send(err);
        });
};

exports.show = (req, res) => {
    colorRepository.find(req.params.id).then((data) => {
        res.send(data);
    });
};

const getPagination = (data, page, total) => {
    try {
        const page_current = page > 1 ? page : 1;
        const limit = 6;
        const rest = total % limit;
        const round = Math.round(total / limit);
        const total_pages = round + (rest > 0 ? 1 : 0);

        return {
            data: data,
            page: page_current,
            per_page: limit,
            total: total,
            total_pages: total_pages,
        };
    } catch (e) {
        return e;
    }
};
