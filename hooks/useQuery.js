// @flow
import * as React from "react";
import { useContext } from "react";
import { createClient, Provider } from "urql";

/**
 * To make use of the Client in React we will have to provide it via the Context API.
 * This may be done with the help of the Provider export.
 * @type {React.Context<Client>}
 */
const client = createClient({
  url: "https://us-central1-tinder-dverde.cloudfunctions.net/graphql"
});

/**
 * The Provider export is a React component that wraps the Client.
 * It is used to provide the Client to the React components.
 * @return {React.Element<useQuery>}
 */
export const GraphQLProvider = ({ children }): React.Element<Object> => {
  return <Provider value={client}>{children}</Provider>;
};

