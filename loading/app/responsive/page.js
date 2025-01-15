import Image from 'next/image'
import mountains from '../1.jpg'
 
// export default function Responsive() {
//   return (
//     <div style={{ display: 'flex', flexDirection: 'column' }}>
//       <Image
//         alt="Mountains"
//         // Importing an image will
//         // automatically set the width and height
//         src={mountains}
//         sizes="100vw"
//         // Make the image display full width
//         style={{
//           width: '100%',
//           height: 'auto',
//         }}
//       />
//     </div>
//   )
// }


//add background image
export default function Background() {
    return (
      <Image
        alt="Mountains"
        src={mountains}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
      />
    )
  }