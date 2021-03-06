import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ProblemOrderByInput } from "../../../inputs/ProblemOrderByInput";
import { ProblemWhereInput } from "../../../inputs/ProblemWhereInput";
import { ProblemWhereUniqueInput } from "../../../inputs/ProblemWhereUniqueInput";
import { ProblemDistinctFieldEnum } from "../../../../enums/ProblemDistinctFieldEnum";

@TypeGraphQL.ArgsType()
export class AggregateProblemArgs {
  @TypeGraphQL.Field(_type => ProblemWhereInput, { nullable: true })
  where?: ProblemWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProblemOrderByInput], { nullable: true })
  orderBy?: ProblemOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ProblemWhereUniqueInput, { nullable: true })
  cursor?: ProblemWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ProblemDistinctFieldEnum], { nullable: true })
  distinct?: Array<"id" | "problemText" | "creatorId"> | undefined;
}
