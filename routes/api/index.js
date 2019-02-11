/**
 * Global API endpoint URL conf.
 */
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const { MoviesCallApi } = require("../../controllers");

/**
 * Router with global prefix declaration
 */
const router = new Router({ prefix: "/endpoint/api" });

/**
 * Movies auth endpoint api route
 * API Route URL:
 * http://(host:port)/endpoint/api/movies
 */
router.get("/movies", bodyParser(), async ctx => {
  await MoviesCallApi(ctx);
});

module.exports = router;
