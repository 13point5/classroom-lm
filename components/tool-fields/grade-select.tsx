import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectProps } from "@radix-ui/react-select";

export const GradeSelect = ({
  onChange,
}: {
  onChange: SelectProps["onValueChange"];
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <p className="font-medium">Grade</p>

      <Select onValueChange={onChange}>
        <SelectTrigger className="">
          <SelectValue placeholder="Select grade level" />
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: 12 }).map((_, i) => (
            <SelectItem key={i} value={`${i}`}>
              Grade {i}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
