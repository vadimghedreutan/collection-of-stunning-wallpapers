"use client"
import { motion } from "framer-motion"
import GalleryList from "./GalleryList"

const variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 1,
			ease: "easeInOut",
			stiffness: 50,
			staggerChildren: 0.1,
		},
	},
}

interface Props {
	images: ImagesProps[]
}

export default function Gallery({ images }: Props) {
	return (
		<motion.div
			className="grid grid-cols-2 gap-y-10 sm:grid-cols-3 gap-x-6 lg:grid-cols-4 xl:gap-x-8 px-5"
			variants={variants}
			initial="hidden"
			animate="show"
		>
			{images &&
				images.map((item, index) => (
					<GalleryList key={item.id} item={item} />
				))}
		</motion.div>
	)
}
