const database = require("../database/config.MYSQL");
const table_parameter = "`parameter`.parameter";
const table_type = "`parameter`.type";

async function select_parameter(type_id) {
    try {
        // Abrir conexion a la base de datos
        let connection = await database.getConnection();
        let result = await new Promise((resolve, reject) => {
            let query = `SELECT p.id, p.value,  p.status, t.id type_id, t.name, t.apply_campaign, t.status type_status
                        FROM ${table_parameter} p
                        INNER JOIN ${table_type} t ON p.type_id = t.id
                        ${type_id != null ? ("WHERE t.id = '" + type_id + "'") : ""}`;
            
            connection.query(query, async function (error, result) {
                    if (error) {
                        console.log(error);
                        return reject([]);
                    }
                    if (result.length > 0) {
                        return resolve(result);
                    } else {
                        return reject([]);
                    }
                });
        });

        return result;

    } catch (error) {
        return [];
    } finally {
        database.getClose();
    }
}

async function select_type(id) {
    try {
        // Abrir conexion a la base de datos
        let connection = await database.getConnection();
        let result = await new Promise((resolve, reject) => {
            let query = `SELECT t.id, t.name, t.apply_campaign, t.status
                        FROM  ${table_type} t
                        ${id != null ? ("WHERE t.id = '" + id + "'") : ""}`;

            connection.query(query, async function (error, result) {
                if (error) {
                    console.log(error);
                   return reject([]);
                }
                if (result.length > 0) {
                    console.log(result);
                    return resolve(result);
                } else {
                    return reject([]);
                } 
            });
        });

        return result;

    } catch (error) {
        return [];
    } finally {
        database.getClose();
    }
}

module.exports = {
    select_parameter,
    select_type
};