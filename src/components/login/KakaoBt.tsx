import "../../css/intro.css"
import { RiKakaoTalkFill } from 'react-icons/ri';

const KakaoBt = (props : {name : string} ) => {
  return (
    <div className='kakaoBt'>
        <p><RiKakaoTalkFill/></p>
        <p>{props.name}</p>
    </div>
  )
}

export default KakaoBt