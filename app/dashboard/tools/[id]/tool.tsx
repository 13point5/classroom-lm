"use client";

import { ToolField } from "@/components/tool-fields/field";
import { Button } from "@/components/ui/button";
import { Tool as ToolDef } from "@/lib/definitions";
import { SparklesIcon } from "lucide-react";

export default function Tool({ tool }: { tool: ToolDef }) {
  return (
    <div className="border rounded-md p-8 flex flex-col gap-6 items-center w-[500px]">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-3xl font-bold tracking-tight">{tool.title}</h2>
        <p className="text-muted-foreground">{tool.description}</p>
      </div>

      <div className="flex flex-col w-full gap-6">
        {tool.fields.map((field, index) => (
          <ToolField key={index} field={field} />
        ))}
      </div>

      <Button className="w-full rounded-full font-bold">
        <SparklesIcon className="mr-2" size={16} />
        Generate
      </Button>
    </div>
  );
}
