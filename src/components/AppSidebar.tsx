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
import NoteFolder from "./NoteFolder";

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
						className="sidebar-item hover:bg-text-300 "
					>
						<Link href="/">
							<Home />
							<span className="text-transparent font-bold text-xl">All</span>
						</Link>
					</SidebarMenuButton>
				</SidebarGroup>
				<SidebarSeparator className="ml-0" />
				<SidebarGroup>
					<SidebarGroupLabel className="p-0 select-none text-xs">
						TODOs
						<SidebarGroupAction title="Add TODO" className="hover:bg-transparent hover:[&>svg]:text-text-400 active:bg-transparent active:[&>svg]:opacity-75 [&>svg]:text-text-300">
							<Plus />
							<span className="sr-only">Create TODO Folder</span>
						</SidebarGroupAction>
					</SidebarGroupLabel>
					<SidebarSeparator className="ml-0" />
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<NoteFolder />
							</SidebarMenuItem>
						</SidebarMenu>
						<SidebarSeparator className="ml-0 group-data-[state=expanded]:hidden" />
						<SidebarMenuButton className="group-data-[state=expanded]:hidden not-md:hidden hover:bg-transparent hover:[&>svg]:text-text-400 active:bg-transparent active:[&>svg]:opacity-75 [&>svg]:text-text-300">
							<Plus />
							<span className="sr-only">Create TODO Folder</span>
						</SidebarMenuButton>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	);
}
