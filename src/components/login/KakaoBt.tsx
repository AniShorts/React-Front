import "../../css/intro.css"
import { RiKakaoTalkFill } from 'react-icons/ri';

const KakaoBt = (props : any) => {
  return (
    <div className='kakaoBt'>
        <h3>{props.name}</h3>
    </div>
  )
}

export default KakaoBt