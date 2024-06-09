import { Textarea } from "@/components/ui/textarea";
import { TextAreaField as TextAreaFieldDef } from "@/lib/definitions";

type Props = {
  metadata: TextAreaFieldDef["metadata"];
};

export const TextAreaField = ({ metadata }: Props) => {
  console.log("metadata", metadata);
  return (
    <div className="flex flex-col gap-2 w-full">
      <p className="font-medium">{metadata.label}</p>

      <Textarea placeholder={metadata.placeholder} />
    </div>
  );
};
