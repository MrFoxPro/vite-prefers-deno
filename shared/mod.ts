import { gql } from "graphql-tag";
import { z } from "zod";

export function parseQuery(query: string) {
  return gql(query);
}

const mySchema = z.string();
export function validateObject(o: any) {
  return mySchema.safeParse(o);
}

export function doCommonThing() {
  const queryResult = parseQuery(`
  {
    user {
      firstName
    }
  }
`);
  const validateResult = validateObject(5);
  console.log(queryResult, validateResult);
}

doCommonThing()