import { useMantineTheme } from "@mantine/core"

export default function Header() {

  type Links = {
    link: string,
    label: string,
  }

  const links: Links[] = [
    {link: '#about', label: 'About'},
    {link: '#resume', label: 'Resume'},
    {link: '#art', label: 'Art'}
  ]

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className='p-2 text-xl hover:text-rose'
    >
      {link.label}
    </a>
  )) 
  
  return (
    <div className='flex flex-row justify-around p-5 bg-brown-900 text-stone'>
      <h1 className='text-2xl justify-center'>
        Robbie <em className="text-xl">(they/them)</em>
      </h1>
      <div>
        {items}
      </div>
    </div>
  )
}