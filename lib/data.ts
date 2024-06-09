import { Classroom, Tool } from "@/lib/definitions";
import { sql } from "@vercel/postgres";

export const fetchTools = async () => {
  try {
    const result = await sql<Tool>`
   SELECT * FROM tools;
   `;

    return result.rows;
  } catch (error) {
    console.error("Error fetching tools", error);
    throw new Error("Error fetching tools");
  }
};

export const fetchTool = async (id: Tool["id"]) => {
  try {
    const result = await sql<Tool>`
   SELECT * FROM tools
   WHERE id = ${id};
   `;

    return result.rows[0];
  } catch (error) {
    console.error("Error fetching tool", error);
    throw new Error("Error fetching tool");
  }
};

export const fetchClassrooms = async (userId: string | null) => {
  try {
    if (!userId) throw new Error("User id cannot be null");

    const result = await sql<Classroom>`
      SELECT DISTINCT c.*
      FROM classrooms c
      INNER JOIN teachers t ON c.id = t.classroom_id
      WHERE t.teacher_id = ${userId}
    `;

    return result.rows;
  } catch (error) {
    console.error("Error fetching classrooms", error);
    throw new Error("Error fetching classrooms");
  }
};
