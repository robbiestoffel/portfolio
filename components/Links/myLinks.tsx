// import { useClipboard } from '@mantine/hooks';
// const clipboard = useClipboard({ timeout: 500 });

interface LinkCardProps {
	name: string;
	link: string;
}

interface ContactCardProps {
	method: string,
	address: string,
}

export const myLinks: LinkCardProps[] = [
	{
		name: 'Main Instagram',
		link: 'https://www.instagram.com/robbiestoffel',
	},
	{
		name: 'Art Instagram',
		link: 'https://www.instagram.com/robbie.artistic',
	},
	{
		name: 'GitHub',
		link: 'https://github.com/robbiestoffel',
	},
	{
		name: 'GitLab',
		link: 'https://gitlab.com/robbiestoffel',
	},
	{
		name: 'Linkedin',
		link: 'https://www.linkedin.com/in/robbiestoffel/',
	},
	{
		name: 'Spotify',
		link: 'https://open.spotify.com/user/l6bd654q0wankqq74ioeuf6dx?si=3fd5caf38d21494d',
	}
];

export const myContacts: ContactCardProps[] = [
	{
		method: 'Email',
		address: 'stoffel25r@ncssm.edu',
	},
	{
		method: 'Discord',
		address: 'robbiestoffel',
	}
]