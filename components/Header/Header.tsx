import { useMantineTheme } from "@mantine/core"

export default function Header() {

  type Links = {
    link: string,
    label: string,
  }

  const links: Links[] = [
    {link: '#about', label: 'About'},
    {link: '#art', label: 'Art'},
    {link: '#contact', label: 'Contact'},
  ]

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className='p-2'
    >
      {link.label}
    </a>
  )) 
  
  return (
    <div className='flex flex-row justify-between p-5 bg-zinc-900'>
      <h1 className='text-2xl justify-center'>
        Robbie <em>(they/them)</em>
      </h1>
      <div>
        {items}
      </div>
    </div>
  )
}