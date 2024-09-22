import { Group } from "@mantine/core";
import { myLinks, myContacts } from "./myLinks";
import { TbExternalLink } from "react-icons/tb";

export default function Links() {
	return (
		<div className="flex flex-col p-10 justify-center" id="contact">
			<div className="flex flex-col p-5">
				<p className="text-4xl text-center font-bold">Where you can find me</p>
				<Group align="start" justify="center" mt={24}>
					{myLinks.map((LinkCardProps) => (
						<a
							href={LinkCardProps.link}
							target="_blank"
							className="flex flex-row text-xl font-bold hover:border-brown-900 hover:bg-brown-900 hover:text-rose-900 text-stone-100 p-4 border-2 rounded-md border-stone-100"
						>
							{LinkCardProps.name} <TbExternalLink />
						</a>
					))}
				</Group>
			</div>
			<div className="flex flex-col p-5">
				<p className="text-4xl text-center font-bold">How you can  contact me</p>
				<Group align="start" justify="center" mt={24}>
					{myContacts.map((ContactCardProps) => (
						<p className="text-xl">
              {ContactCardProps.method}: {ContactCardProps.address}
            </p>
					))}
				</Group>
			</div>
			{/* 

      Find me:
      main instagram
      art instagram
      github
      gitlab
      linkedin
      spotify
      pronouns page?
      facebook?
      

      Contact Me:
      email
      whatsapp
      discord
      */}
		</div>
	);
}
