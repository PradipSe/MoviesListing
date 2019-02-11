/**
 * Global Movies page routes URL.
 * (HINT): Make an entry of component name to create a new URL.
 */
const routes = require("next-routes");
const route = new routes();

/**
 * homePageRoute: home page custom route url
 */
route.add("index", "/");

/**
 * Movie details page: Movie details page custom route url
 */
route.add("movies", "/md/:id");

module.exports = route;
