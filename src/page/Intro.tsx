import React from 'react'
import "../css/intro.css"
import ReactPlayer from 'react-player'
import { SmBt, KakaoBt } from 'components/login'

const Intro: React.FC = () => {
  return (
    <div>
      <div className='videoSort'>
        <ReactPlayer
          url={'https://youtu.be/Tqsz8nwsGU4'}    // 플레이어 url
          width='38rem'         // 플레이어 크기 (가로)
          height='60rem'        // 플레이어 크기 (세로)
          playing={true}        // 자동 재생 on
          muted={true}          // 자동 재생 on
          controls={true}       // 플레이어 컨트롤 노출 여부
          light={false}         // 플레이어 모드
          pip={true}            // pip 모드 설정 여부
        // onEnded={() => handleVideo()}  // 플레이어 끝났을 때 이벤트
        />
      </div>
      <KakaoBt name="카카오로 빠르게 시작하기"/>
      {/* <div className='sort'>
        <p><RiKakaoTalkFill/></p>
       <KakaoBt name="카카오로 빠르게 시작하기" />
      </div> */}
      {/* <div className='line'>또는</div> */}
    </div>
  )
}

export default Intro