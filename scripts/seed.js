const { db } = require("@vercel/postgres");
const { sampleTools } = require("../lib/sampleTools");
const {
  sampleClassrooms,
  sampleTeacherIds,
} = require("../lib/sampleClassrooms");

const seedTools = async (client) => {
  try {
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

const seedClassrooms = async (client) => {
  try {
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS classrooms (
      id UUID default uuid_generate_v4() PRIMARY KEY,
      title TEXT NOT NULL,
      join_code TEXT NOT NULL UNIQUE
    )
    `;

    console.log(`Created "classrooms" table`);

    const insertedClassrooms = await Promise.all(
      sampleClassrooms.map(
        (room) => client.sql`
      INSERT INTO classrooms (title, join_code)
      VALUES (${room.title}, ${room.joinCode});
      `
      )
    );

    console.log("Inserted classrooms");
  } catch (error) {
    console.error("Error seeding classrooms:", error);
    throw error;
  }
};

const seedTeachers = async ({ client, classroomId }) => {
  try {
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS teachers (
      classroom_id UUID NOT NULL,
      teacher_id TEXT NOT NULL,
      FOREIGN KEY (classroom_id) REFERENCES classrooms(id) ON DELETE CASCADE
    )
    `;

    console.log(`Created "classrooms" table`);

    // Insert sample teachers
    const insertedTeachers = await Promise.all(
      sampleTeacherIds.map(
        (teacherId) => client.sql`
      INSERT INTO teachers (teacher_id, classroom_id)
      VALUES (${teacherId}, ${classroomId});
      `
      )
    );

    console.log("Inserted teachers");
  } catch (error) {
    console.error("Error seeding teachers:", error);
    throw error;
  }
};

const getAnyClassroom = async (client) => {
  try {
    const classroom = await client.sql`
      SELECT * FROM classrooms
      LIMIT 1
    `;

    if (classroom.rows.length === 0) {
      console.log(`No classrooms found`);
      return null;
    }

    console.log("Retrieved classroom:", classroom.rows[0]);
    return classroom.rows[0];
  } catch (error) {
    console.error("Error retrieving classroom:", error);
    throw error;
  }
};

async function main() {
  const client = await db.connect();

  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  // await seedTools(client);
  await seedClassrooms(client);
  const classroom = await getAnyClassroom(client);
  await seedTeachers({ client, classroomId: classroom.id });

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
