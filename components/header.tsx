import Link from "next/link"
import { FaGithub } from "react-icons/fa"

export default function Header() {
	return (
		<header className="py-10 px-5">
			<div className="flex items-center justify-between py-2">
				<Link href="/" className="text-2xl font-bold">
					<span className="text-[#FF8BFF] text-2xl">W</span> Mobile
				</Link>
				<Link href="https://github.com/vadimghedreutan" target="_blank">
					<FaGithub className="w-7 h-7 cursor-pointer transition-all duration-500 ease-out hover:scale-125" />
				</Link>
			</div>
			<div className="mt-6">
				<h1 className="font-geomanist font-bold text-2xl sm:text-4xl">
					From abstract designs and minimalist patterns, our
					<span className="text-[#FF8BFF]"> wallpapers</span> are sure
					to enhance the visual appeal of your phone and make it stand
					out from the rest. Browse through our gallery today and
					discover the perfect wallpaper for your phone!
				</h1>
			</div>
		</header>
	)
}
