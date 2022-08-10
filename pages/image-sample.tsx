import {NextPage} from 'next'
import Image from "next/image";
import ProfileImage from '../public/images/profile_trim.jpg'

const ImageSample: NextPage<void> = (props) => {
    return (
        <div>
            <h1>画像表示の比較</h1>
            <p>imgタグで表示した場合</p>
            <img src="/images/profile_trim.jpg" />
            <p>Imageコンポーネントで表示した場合</p>
            <Image src={ProfileImage} />
            <p>Imageで表示した場合は事前に描写エリアが確保されます</p>
        </div>
    )
}

export default ImageSample