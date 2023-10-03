import style from './Label.module.scss'
import badge from '../../../assets/Label.svg'
import Image from 'next/image'

interface Props {
    class: string
}

const Label = (props: Props ) => {
    return(
            <Image className={style.label_wrapper && props.class} src={badge} alt="alt" />
    )
}

export default Label;
