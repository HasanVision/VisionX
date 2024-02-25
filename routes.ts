/**
 * An array of routes that are accessible without authentication
 * @type{string[]}
 */

export const publicRoutes = [
    "/",
    "/auth/new-verification"
];

/**
 * an array of routes to be used for authentication
 * these routes will direct after login to /settings.
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",

];

/**
 * API authentication routes prefix
 * this is used for api authentication and should be accessible for longed in and logged-out users
 * @type{string}
 */
export const apiAuthPrefix = "/api/auth";


/**
 * Default redirect after log in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings"





