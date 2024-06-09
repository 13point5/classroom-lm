import { GradeSelect } from "@/components/tool-fields/grade-select";
import { Select } from "@/components/tool-fields/select";
import { TextAreaField } from "@/components/tool-fields/textarea";
import { ToolField as ToolFieldDef } from "@/lib/definitions";

export const ToolField = ({ field }: { field: ToolFieldDef }) => {
  if (field.name === "gradeSelect") return <GradeSelect />;

  if (field.name === "textarea")
    return <TextAreaField metadata={field.metadata} />;

  // if (name === "select") return <Select />;

  return null;
};
