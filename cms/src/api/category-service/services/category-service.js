'use strict';

/**
 * category-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::category-service.category-service');
