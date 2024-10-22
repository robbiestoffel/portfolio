import Display from "../../../components/Art/display"

export default function Page() {
  return(
    <div className='pt-24 bg-brown-950 place-content-around'>
			<Display
				title="Wrist"
				medium="graphite on paper"
				size="size coming soon"
				year="2024"
				src="/wrist.jpg"
        portrait={true}
				alt="Sketchbook Drawing of my wrist"
			/>
      <Display
				title="Lil Penguin"
				medium="graphite on paper"
				size="size coming soon"
				year="2024"
				src="/lilpenguin.jpg"
        portrait={true}
				alt="Little Penguin Sketchbook Drawing"
			/>
      <Display
				title="Big Penguin"
				medium="graphite on paper"
				size="size coming soon"
				year="2024"
				src="/bigpenguin.jpg"
        portrait={true}
				alt="Big Penguin Sketchbook Drawing"
			/>
      <Display
				title="Lil Penguin (process)"
				medium="graphite on paper"
				size="size coming soon"
				year="2024"
				src="/lilpenguin(process).jpg"
        portrait={true}
				alt="Lil Penguin Process Sketchbook Drawing"
			/>
    </div>
  )
}