import express from "express";
import colors from "colors";
import "dotenv/config";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";

import connectDB from "./config/db";
import schema from "./schema/schema";

const app = express();

connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}!`)
);
