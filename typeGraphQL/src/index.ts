import "reflect-metadata";
import { GraphQLServer } from "graphql-yoga";
import { buildSchema } from "type-graphql";
import ProjectResolver from "./resolvers/TaskResolver";
import TaskResolver from "./resolvers/ProjectResolver";

async function bootstrap() {
    const schema = await buildSchema({
    resolvers: [ProjectResolver, TaskResolver],
    emitSchemaFile: true}
    );

    const server = new GraphQLServer({
        schema,
    });

server.start(() => console.log("Server is running on http://localhost:4000"));
}
bootstrap();