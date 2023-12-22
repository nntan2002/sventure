'use strict';

/**
 * page-building service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::page-building.page-building');
