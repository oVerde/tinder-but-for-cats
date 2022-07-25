const { find, filter } = require("lodash/fp");
const admin = require("firebase-admin");
const db = admin.database(); // Now the realtime database is available

/** # GraphQL Context
 * A context is usually created for each execution of a GraphQL
 * Operation, and it is passed to the resolver functions as a
 * third argument.
 * You can learn more about Context in GraphQL Tools docs.
 * @type {Promise}
 * @see https://www.graphql-tools.com/docs/connectors
 */
module.exports = async () => {
  return {
    db,
    find,
    filter
  };
};
