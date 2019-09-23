import { Field, Int, ObjectType} from "type-graphql";
import Task from "./Task";

@ObjectType()
export default class Project {
  @Field(type => Int)
  id: number

  @Field()
  name: string;

  @Field(type => [Task])
  tasks: Array<Task>;
}
//tasks is an array of individual task obj.
//tasks: Task[]
//tasks => [{}, {}, {}];