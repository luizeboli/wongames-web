/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs-extra');
const graphql = require('graphql');

async function convert(inputFile, outputFile) {
  const schema = graphql.parse(await fs.readFile(inputFile, 'utf8'));
  const visitor = {
    ObjectTypeDefinition: (node) => {
      if (node.name.value.endsWith('Entity') || node.name.value.endsWith('EntityResponse')) {
        return {
          ...node,
          fields: node.fields.map((field) => {
            return {
              kind: 'NonNullType',
              type: {
                ...field,
              },
            };
          }),
        };
      }
    },
  };
  const newSchema = graphql.visit(schema, visitor);
  await fs.outputFile(outputFile, graphql.print(newSchema), 'utf8');
}

// convert the schema
convert('schema-temp.gql', 'schema.gql');

// delete the temporary schema
fs.unlinkSync('schema-temp.gql');
