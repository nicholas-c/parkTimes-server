'use strict';

/**
 * Ride.js controller
 *
 * @description: A set of functions called "actions" for managing `Ride`.
 */

module.exports = {

  /**
   * Retrieve ride records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.ride.fetchAll(ctx.query);
  },

  /**
   * Retrieve a ride record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.ride.fetch(ctx.params);
  },

  /**
   * Count ride records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.ride.count(ctx.query);
  },

  /**
   * Create a/an ride record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.ride.add(ctx.request.body);
  },

  /**
   * Update a/an ride record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.ride.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an ride record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.ride.remove(ctx.params);
  }
};
