export const NotificationsBarElements = ({ iconName }) => {
  return (
    <div className="notBarElement">
      <img className='iconNotBar' src={iconName} />
      <div className="notBarTextInfo">
        <div className="notBarName">
            <p> <small>Usuario</small></p>
        </div>
        <div className="notBarNotification">
          <p><small> Notificación</small></p>

        </div>
      </div>


    </div>
  )
}
