'use strict';

const controller_parameter = {};
const response_management = require("../../application/server/response.management");
const parameter_select = require("../../application/uses_case/list");

controller_parameter.list = async function (req, res) {
    var type_id = req.query.type_id;
    let list = await parameter_select.select_parameter(type_id);
    return response_management.bussines_response(res, list);
}

controller_parameter.type = async function (req, res) {
    var id = req.params.id;
    let list = await parameter_select.select_type(id);
    return response_management.bussines_response(res, list);
}

module.exports = controller_parameter;