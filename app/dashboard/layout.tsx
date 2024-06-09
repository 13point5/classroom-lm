"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { UserButton } from "@clerk/nextjs";
import { BotIcon, SchoolIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex gap-4 w-full h-screen overflow-hidden">
      <div className="w-[200px] bg-white h-full flex flex-col gap-4 px-4 py-8">
        <Link href="/">
          <h4 className="text-2xl font-bold tracking-tight text-[#131316]">
            ClassroomLM
          </h4>
        </Link>

        <Separator />

        <Link href="/dashboard">
          <NavItem
            label="AI Tools"
            icon={<BotIcon size={18} />}
            active={pathname.endsWith("dashboard")}
          />
        </Link>

        <Link href="/dashboard/classrooms">
          <NavItem
            label="Classroons"
            icon={<SchoolIcon size={18} />}
            active={pathname.endsWith("classrooms")}
          />
        </Link>

        <Separator />

        <UserButton showName />
      </div>

      <Separator orientation="vertical" />

      <div className="flex-1 h-full p-8">{children}</div>
    </div>
  );
}

const NavItem = ({
  icon,
  label,
  active,
}: {
  icon: ReactNode;
  label: string;
  active: boolean;
}) => {
  return (
    <Button
      variant={active ? "default" : "ghost"}
      className="w-full items-center justify-start gap-2 text-[1rem]"
    >
      {icon}
      <span className="">{label}</span>
    </Button>
  );
};
