"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Header() {
	const pathname = usePathname();

	type Links = {
		link: string;
		label: string;
	};

	const links: Links[] = [
		{ link: "/#about", label: "About" },
		{ link: "/#contact", label: "Contact" },
		{ link: "/art", label: "My Art" },
	];

	const items = links.map((link) => (
		<Link
			key={link.label}
			href={link.link}
			className="p-3 text-lg sm:text-xl font-bold hover:text-rose-900"
		>
			{link.label}
		</Link>
	));

	const artLinks: Links[] = [
		{ link: "/art/drawing", label: "Drawing" },
		{ link: "/art/sketchbook", label: "Sketchbook" },
		// { link: "/art/painting", label: "Photography" },
		// { link: "/art/photography", label: "Photography" },
		{ link: "/art/", label: "My Art" },
	];

	const artItems = artLinks.map((link) => (
		<Link
			key={link.label}
			href={link.link}
			className={clsx(
				"p-3 text-lg sm:text-xl font-bold hover:text-rose-900",
				{
					'text-brown-900 hover:text-rose-900 bg-stone-300 rounded-md': link.label === "My Art" && pathname.slice(0, 4) === "/art"
				}
			)}
		>
			{link.label}
		</Link>
	));

	return (
		<div className="h-18 w-screen fixed top-0 left-0 z-2 rounded-none bg-brown-900">
			<div className="flex flex-rox justify-between h-full w-full p-5 items-center">
				<Link href="/" className="text-xl sm:text-2xl font-bold justify-center">
					Robbie <em className="hidden sm:inline sm:text-xl">(they/them)</em>
				</Link>
				<div
					className={clsx("", {
						'hidden': pathname.slice(0, 4) != "/art"
					})}
				>
					{artItems}
				</div>
				<div
					className={clsx("", {
						hidden: pathname != "/",
					})}
				>
					{items}
				</div>
			</div>
		</div>
	);
}
