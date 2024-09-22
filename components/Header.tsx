import Link from "next/link";

export default function Header() {

  type Links = {
    link: string,
    label: string,
  }

  const links: Links[] = [
    {link: '/#about', label: 'About'},
    {link: '/#contact', label: 'Contact'},
    {link: '/art', label: 'Art'}
  ]

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className='p-2 text-xl font-bold hover:text-rose-900'
    >
      {link.label}
    </Link>
  )) 
  
  return (
    <div className='h-18 w-screen fixed top-0 left-0 z-2 rounded-none'>
      <div className='flex flex-row justify-around items-center relative h-full w-full bg-brown-900 text-stone-300 p-5'>
      <Link href="/" className='text-2xl font-bold justify-center'>
        Robbie <em className="text-xl">(they/them)</em>
      </Link>
      <div>
        {items}
      </div>
    </div>
    </div>
  )
}