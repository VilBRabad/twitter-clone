import { GraphQLClient } from "graphql-request";

const isClient = typeof window !== "undefined";

export const graphqlClient = new GraphQLClient(process.env.SERVER_URL || "http://localhost:8000/graphql",
    {
        headers: ()=>({
            Authorization: isClient? `Bearer ${window.localStorage.getItem("__twitter_token")}`: ""
        })
    }
);
