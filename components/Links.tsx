import { Group } from "@mantine/core";

export default function Links() {
	// const links: string[] = ['']

	return (
		<div className="flex flex-row px-20 justify-center">
			<div className="flex flex-col">
				<p className="text-4xl text-center font-bold">Where you can find me</p>
				<Group align='start' justify='center' mt={24}>
          {}
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
