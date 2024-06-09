import { Textarea } from "@/components/ui/textarea";
import { TextAreaField as TextAreaFieldDef } from "@/lib/definitions";

type Props = {
  metadata: TextAreaFieldDef["metadata"];
  value: string;
  onChange: (newValue: string) => void;
};

export const TextAreaField = ({ metadata, value, onChange }: Props) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <p className="font-medium">{metadata.label}</p>

      <Textarea
        placeholder={metadata.placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
