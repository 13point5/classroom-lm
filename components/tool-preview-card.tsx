import { Tool } from "@/lib/definitions";
import Link from "next/link";

type Props = {
  id: Tool["id"];
  title: Tool["title"];
  description: Tool["description"];
};

export const ToolPreviewCard = ({ id, title, description }: Props) => {
  return (
    <Link href={`/dashboard/tools/${id}`}>
      <div className="border rounded-md px-4 py-2 flex flex-col gap-1 hover:shadow-md">
        <p className="text-md font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
};
