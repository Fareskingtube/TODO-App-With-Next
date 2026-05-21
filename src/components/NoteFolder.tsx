"use client";

import {
	ChevronUpIcon,
	FolderIcon,
	NotebookPen,
	Plus,
	StickyNoteIcon,
} from "lucide-react";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "./ui/collapsible";
import Link from "next/link";
import { SidebarMenu, SidebarMenuButton } from "./ui/sidebar";
import { useState } from "react";
import { usePathname } from "next/navigation";

function NoteFolder() {
	const [open, setOpen] = useState(true);
	const currentPath = usePathname();
	return (
		<Collapsible open={open} onOpenChange={setOpen}>
			<CollapsibleTrigger className="group flex justify-between w-full mt-2 text-lg">
				<div className="flex items-center gap-2">
					<FolderIcon className="w-4" />
					<span className="group-data-[state=collapsed]:hidden">
						Note Folder 1
					</span>
				</div>
				<ChevronUpIcon className="w-5 transition-transform group-data-[state=open]:rotate-180" />
			</CollapsibleTrigger>
			<CollapsibleContent>
				<SidebarMenu className="flex flex-col group-data-[state=expanded]:ml-3 ">
					<SidebarMenuButton
						asChild
						className="hover:bg-text-300 p-0 m-0 h-fit py-1"
						isActive={currentPath === "/note1"}
					>
						<Link href="/note1" className="flex gap-1 items-center sidebar-item">
							<NotebookPen />
							<span className="font-bold">Note 1</span>
						</Link>
					</SidebarMenuButton>
					<SidebarMenuButton
						asChild
						className="hover:bg-text-300 p-0 m-0 h-fit py-1"
						isActive={currentPath === "/note2"}
					>
						<Link href="/note2" className="flex gap-1 items-center sidebar-item">
							<NotebookPen />
							<span className="font-bold">Note 2</span>
						</Link>
					</SidebarMenuButton>
					<SidebarMenuButton
						asChild
						className="hover:bg-text-300 p-0 m-0 h-fit py-1"
						isActive={currentPath === "/note3"}
					>
						<Link href="note3" className="flex gap-1 items-center sidebar-item">
							<NotebookPen />
							<span className="font-bold">Note 3</span>
						</Link>
					</SidebarMenuButton>

					<SidebarMenuButton className="w-fit gap-1 bg-background-300 hover:bg-background-500 active:bg-background-400 px-1.5 opacity-75 text-md my-1">
						<Plus />
						<span>Create New TODO</span>
					</SidebarMenuButton>
				</SidebarMenu>
			</CollapsibleContent>
		</Collapsible>
	);
}

export default NoteFolder;
