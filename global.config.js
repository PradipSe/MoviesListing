/**
 * Env URLs
 */
const protocol = "http://";
const protocolSecure = "https://";
const DEFAULT_PORT = 3000;

const LOCAL_URL = `${protocol}localhost:${DEFAULT_PORT}`;

/**
 * Personio base URLs
 */
const API_CONNECT_URL = `${protocol}backend-ygzsyibiue.now.sh/api/v1/movies`;
const baseURL = process.env.NODE_ENV == "development" ? LOCAL_URL : PROD_URL;

/**
 * API Service URLs
 */
const API_ENDPOINT_URL = `${baseURL}/endpoint/api/movies`;

const IMAGE_DEFAULT_URL =`${protocolSecure}image.tmdb.org/t/p/w500/`;

const movieURL = "/md";

/**
 * Global constants
 */
const headerType = "application/json";
const timeout = 180000;
const endpointErrorMsg = "Something went wrong!";

/**
 * Exporting all constant globally
 */
module.exports = {
  baseURL,
  movieURL,
  API_CONNECT_URL,
  API_ENDPOINT_URL,
  IMAGE_DEFAULT_URL,
  DEFAULT_PORT,
  timeout,
  headerType,
  endpointErrorMsg
};
