import { ToolPreviewCard } from "@/components/tool-preview-card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchTools } from "@/lib/data";
import { sampleTools } from "@/lib/sampleTools";
import { auth } from "@clerk/nextjs/server";
import { SearchIcon } from "lucide-react";

export default async function DashboardLayout() {
  const tools = await fetchTools();
  console.log("tools", tools);

  const user = await auth();
  console.log("user", user);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <h2 className="text-3xl font-bold tracking-tight">AI Tools</h2>

        <div className="relative">
          <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search" className="pl-8" />
        </div>
      </div>

      <Tabs defaultValue="teachers" className="w-full">
        <TabsList>
          <TabsTrigger value="teachers">Teachers</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
        </TabsList>
        <TabsContent value="teachers" className="mt-4">
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {tools.map((tool) => (
              <ToolPreviewCard
                key={tool.id}
                id={tool.id}
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
