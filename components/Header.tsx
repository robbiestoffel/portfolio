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
		{ link: "/art", label: "Art" },
	];

	const items = links.map((link) => (
		<Link
			key={link.label}
			href={link.link}
			className="p-2 text-xl font-bold hover:text-rose-900"
		>
			{link.label}
		</Link>
	));

	const artLinks: Links[] = [
		{ link: "/art/", label: "Art" },
		{ link: "/art/drawing", label: "Drawing" },
		{ link: "/art/sketchbook", label: "Sketchbook" },
		// { link: "/art/photography", label: "Photography" },
	];

	const artItems = artLinks.map((link) => (
		<Link
			key={link.label}
			href={link.link}
			className="p-2 text-xl font-bold hover:text-rose-900"
		>
			{link.label}
		</Link>
	));

	return (
		<div className="h-18 w-screen fixed top-0 left-0 z-2 rounded-none bg-brown-900">
			<div className="flex flex-rox justify-between h-full w-full p-5 items-center">
				<Link href="/" className="text-2xl font-bold justify-center">
					Robbie <em className="text-xl">(they/them)</em>
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
