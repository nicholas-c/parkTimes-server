'use strict';

/**
 * Waittime.js controller
 *
 * @description: A set of functions called "actions" for managing `Waittime`.
 */

module.exports = {

  /**
   * Retrieve waittime records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.waittime.fetchAll(ctx.query);
  },

  /**
   * Retrieve a waittime record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.waittime.fetch(ctx.params);
  },

  /**
   * Count waittime records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.waittime.count(ctx.query);
  },

  /**
   * Create a/an waittime record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.waittime.add(ctx.request.body);
  },

  /**
   * Update a/an waittime record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.waittime.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an waittime record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.waittime.remove(ctx.params);
  }
};
