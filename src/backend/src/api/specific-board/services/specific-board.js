'use strict';

/**
 * specific-board service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::specific-board.specific-board');
