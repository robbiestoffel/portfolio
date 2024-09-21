import { Group } from "@mantine/core";
import { myLinks } from "./myLinks";
import { LinkCard } from "./LinkCard";

export default function Links() {
	// const links: string[] = ['']

	return (
		<div className="flex flex-row p-20 justify-center" id='contact'>
			<div className="flex flex-col">
				<p className="text-4xl text-center font-bold">Where you can find me</p>
				<Group align='start' justify='center' mt={24}>
          {myLinks.map((link, i) => (
            <LinkCard key={i} {...link} />
          ))}
        </Group>
			</div>
			{/* instagram
      github
      email
      discord
      linkedin
      gitlab
      costar
      spotify
      whatsapp */}
		</div>
	);
}
