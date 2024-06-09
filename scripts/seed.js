const { db } = require("@vercel/postgres");
const { sampleTools } = require("../lib/sampleTools");

const seedTools = async (client) => {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
  CREATE TABLE IF NOT EXISTS tools (
    id UUID default uuid_generate_v4() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    fields JSON NOT NULL
  );
  `;

    console.log('Created "tools" table', createTable);

    const insertedTools = await Promise.all(
      sampleTools.map(
        (tool) => client.sql`
    INSERT INTO tools (title, description, fields)
    VALUES (${tool.title}, ${tool.description}, ${JSON.stringify(tool.fields)})
    ON CONFLICT (id) DO NOTHING;
    `
      )
    );

    console.log("Inserted tools", insertedTools);
  } catch (error) {
    console.error("Error seeding tools:", error);
    throw error;
  }
};

async function main() {
  const client = await db.connect();

  await seedTools(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
