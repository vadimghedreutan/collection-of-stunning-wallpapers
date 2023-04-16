"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import clsx from "clsx"
import { saveAs } from "file-saver"

const images = {
	hidden: { y: 20, opacity: 0 },
	show: {
		y: 0,
		opacity: 1,
	},
}

interface Props {
	item: ImagesProps
}

export default function GalleryList({ item }: Props) {
	const [isLoading, setLoading] = useState(true)

	const handleClick = () => {
		let url = `${item.image}`
		saveAs(url, "wallpapers")
	}

	return (
		<motion.div
			onClick={handleClick}
			className="group cursor-pointer"
			variants={images}
		>
			<div className="relative w-full aspect-[9/16] overflow-hidden rounded-lg">
				<Image
					src={item.image}
					alt="Mobile Wallpaper Photos"
					fill
					sizes="100"
					priority
					className={clsx(
						"object-cover group-hover:opacity-75 duration-700 ease-in-out",
						isLoading
							? "grayscale blur-2xl scale-110"
							: "grayscale-0 blur-0 scale-100"
					)}
					onLoadingComplete={() => setLoading(false)}
				/>
			</div>
		</motion.div>
	)
}
