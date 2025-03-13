import styles from './card.module.css';
import Image from 'next/image';

export default function Card({venueName, imgSrc}:{venueName:string, imgSrc:string}) {
    return (
        <div className={`${styles.card} w-1/5 h-[300px] rounded-lg shadow-lg bg-white`}>
            <div className={`w-full h-[70%] relative rounded-t-lg`}>
                <Image src={imgSrc}
                alt={venueName}
                fill={true}
                style={{objectFit: 'cover'}}
                className='object-cover rounded-t-lg'
                />
            </div>
            <div className={`w-full h-[30%] p-[10px] text-black`}>
                {venueName}
            </div>
        </div>
    )
}