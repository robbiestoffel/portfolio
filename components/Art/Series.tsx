import { Image } from "@mantine/core";
import Display from "./display";

export default function Series() {
	return (
		<div>
			<div className="p-10 text-center">
				<p className="text-4xl font-extrabold">Advanced Studio Art</p>
			</div>
			<Display
				title="Untitled (unfinished)"
				medium="graphite on paper"
				size="size coming soon"
				year="2024"
				src="/beauty(process2).jpg"
				portrait={true}
				alt="Self portrait of the artist crying"
			/>
		</div>
	);
}
