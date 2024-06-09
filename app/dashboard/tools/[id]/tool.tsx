"use client";

import { ToolField } from "@/components/tool-fields/field";
import { Button } from "@/components/ui/button";
import { Tool as ToolDef, ToolField as ToolFieldDef } from "@/lib/definitions";
import { SparklesIcon } from "lucide-react";
import { useState } from "react";

const getInitialState = (fields: ToolFieldDef[]) => {
  const state: { [key: string]: any } = {};

  fields.forEach((field) => {
    state[field.name] = null;
  });

  return state;
};

export default function Tool({ tool }: { tool: ToolDef }) {
  console.log("tool", tool);
  const [data, setData] = useState(getInitialState(tool.fields));
  console.log("data", data);

  const setFieldValue = (name: string, value: any) => {
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="border rounded-md p-8 flex flex-col gap-6 items-center w-[500px]">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-3xl font-bold tracking-tight">{tool.title}</h2>
        <p className="text-muted-foreground">{tool.description}</p>
      </div>

      <div className="flex flex-col w-full gap-6">
        {tool.fields.map((field, index) => (
          <ToolField
            key={index}
            field={field}
            value={data[field.name]}
            setValue={setFieldValue}
          />
        ))}
      </div>

      <Button className="w-full rounded-full font-bold">
        <SparklesIcon className="mr-2" size={16} />
        Generate
      </Button>
    </div>
  );
}
