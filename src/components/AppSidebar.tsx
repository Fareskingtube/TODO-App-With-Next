"use client";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupAction,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarSeparator,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { Home, NotebookPen, Plus } from "lucide-react";
import ModeToggle from "./ui/ModeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppSidebar() {
	const currentPath = usePathname();
	return (
		<Sidebar collapsible="icon">
			<SidebarHeader>
				<div className="flex justify-between text-muted-foreground opacity-50 not-md:flex-row-reverse">
					<SidebarTrigger />
					<span className="group-data-[state=collapsed]:hidden">
						<ModeToggle />
					</span>
				</div>
				<div className="group-data-[state=collapsed]:hidden flex justify-center items-center gap-1.5">
					<NotebookPen />
					<span className="font-bold text-2xl">TODO APP</span>
				</div>
				<SidebarSeparator className="ml-0" />
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarMenuButton
						isActive={currentPath === "/"}
						asChild
						className="hover:bg-text-300 hover:[&>svg]:text-text-300 data-[active=true]:bg-transparent active:[&>svg]:text-primary-500 data-[active=true]:[&>svg]:text-primary-500 bg-text-100 active:bg-linear-to-r data-[active=true]:bg-linear-to-r from-primary-500 to-accent-500 bg-clip-text"
					>
						<Link href="/">
							<Home />
							<span className="text-transparent font-bold text-xl">All</span>
						</Link>
					</SidebarMenuButton>
				</SidebarGroup>
				<SidebarSeparator className="ml-0" />
				<SidebarGroup>
					<SidebarGroupLabel className="select-none text-xs">
						TODOs
						<SidebarGroupAction title="Add TODO">
							<Plus />
							<span className="sr-only">Add TODO</span>
						</SidebarGroupAction>
					</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenuButton className="group-data-[state=expanded]:hidden not-md:hidden">
							<Plus />
							<span className="sr-only">Add TODO</span>
						</SidebarMenuButton>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	);
}
