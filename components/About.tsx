import Image from "next/image";

export default function About() {
	return (
		<div
			className="bg-brown-900 flex flex-row justify-around py-20 px-4 md:px-20"
			id="about"
		>
			<Image
				src="/profile.jpg"
				height={600}
				width={450}
				className="h-600px w-450 m-10 border-2 border-stone-100 hidden xl:block"
				alt="Picture of the Artist"
			/>
			<p className="text-xl md:p-10">
				Robbie is from Mount Holly, North Carolina, just outside Charlotte. In
				middle school, they took Visual Art three years in a row and Digital
				Photography in eighth grade. When they entered high school, Robbie began
				creating art through theater. In the last 4 years, they have played main
				characters in seven productions on the stage and taken three theater
				classes. In addition, they contribute to theatrical productions from off
				the stage, Robbie has been the lighting designer for two shows, one of
				which they also were the stage manager. At the end of their sophomore
				year of high school, Robbie was accepted into the North Carolina School
				of Science and Math (NCSSM), where they continued to pursue their STEM
				and artistic interests. At NCSSM, Robbie has taken an introductory
				visual art class where they made exceptional growth learning to capture
				the world around them in their art. Now a Senior in High School, Robbie
				as been accepted into the Advanced Studio Art class, where they are
				taking new creative strides and building their own portfolio. Influenced
				by a variety of singer-songwriters such as Conan Gray, Lizzy McAlpine,
				Gracie Abrams, Kevin Atwater, Mitski, and Billie Eilish, Robbie
				strives to capture emotions that go unseen in their work.
			</p>
		</div>
	);
}
