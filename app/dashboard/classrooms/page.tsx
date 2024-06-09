import { DataTable } from "@/components/data-table";
import { fetchClassrooms } from "@/lib/data";
import { Classroom } from "@/lib/definitions";
import { auth } from "@clerk/nextjs/server";
import { ColumnDef } from "@tanstack/react-table";

const columns: ColumnDef<Classroom>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "join_code",
    header: "Join Code",
  },
];

export default async function ClassroomPage() {
  const { userId } = await auth();
  const classrooms = await fetchClassrooms(userId);
  console.log("classrooms", classrooms);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-bold tracking-tight">Classrooms</h2>
      <DataTable columns={columns} data={classrooms} />
    </div>
  );
}
