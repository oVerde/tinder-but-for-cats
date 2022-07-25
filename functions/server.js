/** # First we need to deal with all Firebase Admin SDK
 * Before you can access the Firebase Realtime Database
 * from a server using the Firebase Admin SDK, you must
 * authenticate your server with Firebase.
 * When you authenticate a server, rather than sign in
 * with a user account's credentials as you would in a
 * client app, you authenticate with a service account
 * which identifies your server to Firebase.
 * @see https://firebase.google.com/docs/database/admin/start
 */
const admin = require("firebase-admin");
const functions = require("firebase-functions");
const serviceAccount = require("./serviceAccountKey.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tinder-dverde-default-rtdb.firebaseio.com"
});

// From now on, all the Yoga GraphQL services
const { createServer } = require("@graphql-yoga/node");
const { makeExecutableSchema } = require("@graphql-tools/schema");

// And here are the three horsemen of apocal.. graphql
const resolvers = require("./api/resolvers");
const typeDefs = require("./api/schema.graphql");
const createContext = require("./api/context");

/** Builds a schema from the provided type definitions and resolvers
 * @type {GraphQLSchema}
 * @see https://www.graphql-tools.com/docs/generate-schema
 */
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

/** Create a simple yet powerful GraphQL server ready for production workloads.
 * Comes baked in with:
 * Envelop - Plugin system for GraphQL
 * GraphiQL - GraphQL IDE for your browser
 * @see https://www.graphql-yoga.com/tutorial/basic/00-introduction
 * @type {YogaNodeServerOptions}
 */
const server = createServer({
  cors: true,
  schema,
  context: createContext
});

exports.graphql = functions.https.onRequest(server);
