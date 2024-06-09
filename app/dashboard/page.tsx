import { ToolPreviewCard } from "@/components/tool-preview-card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { sampleTools } from "@/lib/sampleTools";
import { SearchIcon } from "lucide-react";

export default async function DashboardLayout() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <h2 className="text-3xl font-bold tracking-tight text-center">
          AI Tools
        </h2>

        <div className="relative">
          <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search" className="pl-8" />
        </div>
      </div>

      <Tabs defaultValue="account" className="w-full">
        <TabsList>
          <TabsTrigger value="teachers">Teachers</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
        </TabsList>
        <TabsContent value="teachers" className="mt-4">
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {sampleTools.map((tool) => (
              <ToolPreviewCard
                key={tool.id}
                title={tool.title}
                description={tool.description}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="students">student tools</TabsContent>
      </Tabs>
    </div>
  );
}
