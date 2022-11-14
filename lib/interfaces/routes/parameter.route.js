'use strict';

const router = {};

//Controllers import
const parameter_controller = require('../controllers/parameter.controller');

module.exports = {
    name: 'parameter',
    version: '1.0.0',
    register: async (server) => {
        server.route([
            {
                method: 'GET',
                path: '/parameters/{type_id?}',
                handler: async (req, res) => {
                    return await parameter_controller.list(req, res)
                },
                options: {
                    description: 'Method list parameters from database.',
                    tags: ['api']
                }
            },
             {
                method: 'GET',
                path: '/parameters/type/{id?}',
                handler: async (req, res) => {
                    return await parameter_controller.type(req, res)
                },
                options: {
                    description: 'Method list parameters from database.',
                    tags: ['api']
                }
            }
        ])
    }
};
