export const NotificationsBarElements = ({ iconName, userName, info }) => {
  return (
    <div className="notBarElement">
      <img className='iconNotBar' src={iconName} />
      <div className="notBarTextInfo">
        <div className="notBarName">
          <p> <small>{userName}</small></p>
        </div>
        <div className="notBarNotification">
          <p><small> {info}</small></p>

        </div>
      </div>


    </div>
  )
}
