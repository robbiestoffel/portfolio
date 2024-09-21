import { Button, Tooltip } from "@mantine/core";
import { useClipboard } from '@mantine/hooks';
import { LinkCardProps } from "./LinkCard";

// const clipboard = useClipboard({ timeout: 500 });
const text: String = 'undefined';

export const myLinks: LinkCardProps[] = [
	{
		name: (
			<a href="https://www.instagram.com/robbiestoffel" target="_blank">
				Main Instagram
			</a>
		),
	},
	{
		name: (
			<a href="https://www.instagram.com/robbie.artistic" target="_blank">
				Art Instagram
			</a>
		),
	},
	{
		name: (
			<a href="https://github.com/robbiestoffel" target="_blank">
				GitHub
			</a>
		),
	},
	{
		name: (
			<a href="https://gitlab.com/robbiestoffel" target="_blank">
				GitLab
			</a>
		),
	},
	{
		name: (
			<a href="https://www.linkedin.com/in/robbiestoffel/" target="_blank">
				Linkedin
			</a>
		),
	},
	{
		name: (
			<a href="https://open.spotify.com/user/l6bd654q0wankqq74ioeuf6dx?si=3fd5caf38d21494d" target="_blank">
				Spotify
			</a>
		)
	}
];
