import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PatientOrderByInput } from "../../../inputs/PatientOrderByInput";
import { PatientWhereInput } from "../../../inputs/PatientWhereInput";
import { PatientWhereUniqueInput } from "../../../inputs/PatientWhereUniqueInput";
import { PatientDistinctFieldEnum } from "../../../../enums/PatientDistinctFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPatientArgs {
  @TypeGraphQL.Field(_type => PatientWhereInput, { nullable: true })
  where?: PatientWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PatientOrderByInput], { nullable: true })
  orderBy?: PatientOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => PatientWhereUniqueInput, { nullable: true })
  cursor?: PatientWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PatientDistinctFieldEnum], { nullable: true })
  distinct?: Array<"firstName" | "lastName" | "email"> | undefined;
}
