import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { ClientCreateWithoutPostsInput } from "../inputs/ClientCreateWithoutPostsInput";
import { ClientUpdateWithoutPostsInput } from "../inputs/ClientUpdateWithoutPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class ClientUpsertWithoutPostsInput {
  @TypeGraphQL.Field(_type => ClientUpdateWithoutPostsInput, {
    nullable: false,
    description: undefined
  })
  update!: ClientUpdateWithoutPostsInput;

  @TypeGraphQL.Field(_type => ClientCreateWithoutPostsInput, {
    nullable: false,
    description: undefined
  })
  create!: ClientCreateWithoutPostsInput;
}
