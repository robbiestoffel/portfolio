import { useMantineTheme } from "@mantine/core"

export default function Header() {

  type Links = {
    link: string,
    label: string,
  }

  const links: Links[] = [
    {link: '#about', label: 'About'},
    {link: '#contact', label: 'Contact'},
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
    <div className='h-18 w-screen fixed top-0 left-0 z-2 rounded-none'>
      <div className='flex flex-row justify-around items-center relative h-full w-full bg-brown-900 text-stone p-5'>
      <a href="#home" className='text-2xl justify-center'>
        Robbie <em className="text-xl">(they/them)</em>
      </a>
      <div>
        {items}
      </div>
    </div>
    </div>
  )
}