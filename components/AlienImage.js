import Image from 'next/image'

const AlienImage = () => (
  <Image
    src="/images/green-alien.jpg" // Route of the image file
    height={489} // Desired size with correct aspect ratio
    width={600} // Desired size with correct aspect ratio
    alt="Green alien"
    layout="intrinsic"
  />
)

export default AlienImage
