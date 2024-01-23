'use strict';

/**
 * sell service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sell.sell');
