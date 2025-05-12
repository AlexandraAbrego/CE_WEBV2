import { NavLink } from "react-router-dom";



const SidebarElements = ({ iconName, TitleName, navName }) => {
  return (
    <NavLink to={navName}
      className={({ isActive }) =>
        `sideBarElement ${isActive ? 'active' : ''}`
      }
    >
       
        <span className="material-symbols-rounded">{iconName}</span>
        <p className="titles-sidebar" style={{fontWeight:'600', fontSize:'1.2rem'}} > {TitleName} </p>
    </NavLink>
  )
}

export default SidebarElements