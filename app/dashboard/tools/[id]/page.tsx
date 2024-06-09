import Tool from "@/app/dashboard/tools/[id]/tool";
import { ToolField } from "@/components/tool-fields/field";
import { Button } from "@/components/ui/button";
import { fetchTool } from "@/lib/data";
import { ChevronLeftIcon, SparklesIcon } from "lucide-react";
import Link from "next/link";

export default async function ToolPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const tool = await fetchTool(id);

  return (
    <div className="w-full flex items-center justify-center relative">
      <Link href="/dashboard">
        <Button className="absolute top-0 left-0" size="sm" variant="ghost">
          <ChevronLeftIcon className="mr-2" size={16} />
          Back
        </Button>
      </Link>

      <Tool tool={tool} />
    </div>
  );
}
