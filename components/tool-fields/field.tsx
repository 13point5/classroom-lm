import { GradeSelect } from "@/components/tool-fields/grade-select";
import { Select } from "@/components/tool-fields/select";
import { TextAreaField } from "@/components/tool-fields/textarea";
import { ToolField as ToolFieldDef } from "@/lib/definitions";

export const ToolField = ({
  field,
  value,
  setValue,
}: {
  field: ToolFieldDef;
  value: any;
  setValue: (name: string, value: any) => void;
}) => {
  if (field.component === "gradeSelect")
    return (
      <GradeSelect onChange={(newValue) => setValue(field.name, newValue)} />
    );

  if (field.component === "textarea")
    return (
      <TextAreaField
        metadata={field.metadata}
        value={value}
        onChange={(newValue) => setValue(field.name, newValue)}
      />
    );

  // if (name === "select") return <Select />;

  return null;
};
