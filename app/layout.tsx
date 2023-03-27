import localFont from "next/font/local"
import clsx from "clsx"
import Header from "@/components/header"
import "./globals.css"

export const metadata = {
	title: "Stunning Phone Wallpapers",
	description:
		"Browse through our gallery today and discover the perfect wallpaper for your phone!",
}

const grotesk = localFont({
	src: "../public/fonts/geomanist_regular.otf",
	weight: "700",
	variable: "--font-grotesk",
	display: "swap",
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang="en"
			className={clsx("text-gray-800 bg-[#FFFEEF]", grotesk.variable)}
		>
			<body className=" max-w-6xl mx-auto">
				<Header />
				<main>{children}</main>
			</body>
		</html>
	)
}
