import Gallery from "@/components/gallery"
import { fetchImages } from "@/utils/fetchImages"

export const revalidate = 60

export default async function Home() {
	const images: ImagesProps[] | any = await fetchImages()
	return (
		<div>
			<Gallery images={images} />
		</div>
	)
}
