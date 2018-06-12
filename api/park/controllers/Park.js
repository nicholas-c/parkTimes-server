'use strict';

/**
 * Park.js controller
 *
 * @description: A set of functions called "actions" for managing `Park`.
 */

module.exports = {

  /**
   * Retrieve park records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.park.fetchAll(ctx.query);
  },

  /**
   * Retrieve a park record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.park.fetch(ctx.params);
  },

  /**
   * Count park records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.park.count(ctx.query);
  },

  /**
   * Create a/an park record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.park.add(ctx.request.body);
  },

  /**
   * Update a/an park record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.park.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an park record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.park.remove(ctx.params);
  }
};
