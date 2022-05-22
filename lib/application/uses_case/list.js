const select_parameter = require("../../domain/repository/parameter.repository");
const model_parameter = require("../../domain/models/parameter.model");
const model_type = require("../../domain/models/type.parameter.model");
const parameter_select = {};

parameter_select.select_parameter = async function (type_id) {
    var list_parameter = [];
    let list = await select_parameter.select_parameter(type_id);
    list.forEach(element => {
        let type = new model_type(element.type_id, element.name, element.apply_campaign, element.type_status);
        let parameter = new model_parameter(element.id, element.value, element.status, type);
        list_parameter.push(parameter);
    });
    return list_parameter;
}

parameter_select.select_type = async function (id) {
    var list_type = [];
    let list = await select_parameter.select_type(id);
    list.forEach(element => {
        let type = new model_type(element.id, element.name, element.apply_campaign, element.type_status);
        list_type.push(type);
    });
    return list_type;
}

module.exports = parameter_select;
