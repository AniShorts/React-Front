import "../../css/intro.css"

const Dash = (props : {title : string} ) => {
  return (
    <div className='line'>{props.title}</div>
  )
}

export default Dash