export type TextAreaField = {
  name: "textarea";
  metadata: {
    label: string;
    placeholder: string;
  };
};

export type GradeSelectField = {
  name: "gradeSelect";
};

export type ToolField = TextAreaField | GradeSelectField;

export type Tool = {
  id: string;
  title: string;
  description: string;
  fields: ToolField[];
};
