import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const GradeSelect = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <p className="font-medium">Grade</p>

      <Select>
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
