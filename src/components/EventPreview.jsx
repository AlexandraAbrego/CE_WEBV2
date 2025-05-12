
const EventPreview = ({colorT,type='',title}) => {
  return (
    <div className="eventDiv">
        <span style={{color:colorT}} className="material-symbols-rounded">{'crop_square'}</span>
        <p>{title}</p>
    </div>
  )
}

export default EventPreview