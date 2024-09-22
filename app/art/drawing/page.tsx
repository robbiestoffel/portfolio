import Display from "../../../components/Art/display";

export default function Page() {
	return (
		<div className='pt-24 bg-brown-950'>
			<Display
				title="Messenger Bag"
				medium="graphite on paper"
				size="size coming soon"
				year="2024"
				src="/messengerbag.jpg"
        portrait={false}
				alt="My messenger bag"
			/>
      <Display
				title="snake"
				medium="graphite on paper"
				size="size coming soon"
				year="2024"
				src="/snake.jpg"
        portrait={true}
				alt="Snake Still Life Drawing"
			/>
      <Display
				title="snake (process)"
				medium="graphite on paper"
				size="size coming soon"
				year="2024"
				src="/snake(process).jpg"
        portrait={true}
				alt="Snake Still Life Drawing Unfinished"
			/>
      <Display
				title="Solar Panel"
				medium="graphite on paper"
				size="size coming soon"
				year="2024"
				src="/solarpanel.jpg"
        portrait={false}
				alt="Solar Panel Linear Perspective Drawing"
			/>
      <Display
				title="Solar Panel (process)"
				medium="graphite on paper"
				size="size coming soon"
				year="2024"
				src="/solarpanel(process).jpg"
        portrait={false}
				alt="Solar Panel Linear Perspective Drawing Unfinished"
			/>
      <Display
				title="Pond"
				medium="graphite on paper"
				size="size coming soon"
				year="2024"
				src="/gesture.jpg"
        portrait={false}
				alt="Art Pond Gesture Drawing"
			/>
		</div>
	);
}
