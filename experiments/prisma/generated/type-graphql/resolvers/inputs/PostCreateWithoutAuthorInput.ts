import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { ClientCreateOneWithoutEditorPostsInput } from "../inputs/ClientCreateOneWithoutEditorPostsInput";
import { PostKind } from "../../enums/PostKind";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PostCreateWithoutAuthorInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  uuid?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false,
    description: undefined
  })
  published!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  subtitle!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  content?: string | undefined;

  @TypeGraphQL.Field(_type => PostKind, {
    nullable: true,
    description: undefined
  })
  kind?: "BLOG" | "ADVERT" | undefined;

  @TypeGraphQL.Field(_type => GraphQLJSON, {
    nullable: false,
    description: undefined
  })
  metadata!: InputJsonValue;

  @TypeGraphQL.Field(_type => ClientCreateOneWithoutEditorPostsInput, {
    nullable: true,
    description: undefined
  })
  editor?: ClientCreateOneWithoutEditorPostsInput | undefined;
}
