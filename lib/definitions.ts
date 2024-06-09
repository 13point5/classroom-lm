export type TextAreaField = {
  name: string;
  component: "textarea";
  metadata: {
    label: string;
    placeholder: string;
  };
};

export type GradeSelectField = {
  name: string;
  component: "gradeSelect";
};

export type ToolField = TextAreaField | GradeSelectField;

export type Tool = {
  id: string;
  title: string;
  description: string;
  fields: ToolField[];
};

export type Classroom = {
  id: string;
  title: string;
  joinCode: string;
};
