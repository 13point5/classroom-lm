type Props = {
  title: string;
  description: string;
};

export const ToolPreviewCard = ({ title, description }: Props) => {
  return (
    <div className="border-2 rounded-md px-2 py-2 flex flex-col gap-1 hover:shadow-md">
      <p className="text-md font-medium">{title}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};
