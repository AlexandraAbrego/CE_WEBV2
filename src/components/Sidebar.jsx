import SidebarElements from "./SidebarElements"
import { useAuth } from "../context/AuthContext";
import { sideBarContent } from "../temp/tabledata";

export const Sidebar = () => {
    const { role } = useAuth();
    return (
        <div className="sidebar">
            <div className="titulo">
                <h1 className='titleSideBar'> Control Escolar</h1>
            </div>
            <div className="rolTitle">
                {role === 'directivos' && (<h4 className="rolTitleSideBar"><strong>DIRECTIVOS</strong></h4>)}
                {role === 'padres_familia' && (<h4 className="rolTitleSideBar"><strong>PADRES</strong></h4>)}

            </div>
            <div className="elementosSideBar">
                <SidebarElements iconName={'Home'} TitleName={'Inicio'} navName={"/home"} />
                {sideBarContent[role].map((item, index) => (
                    <SidebarElements
                        key={index}
                        iconName={item.icon}
                        TitleName={item.title}
                        navName={item.navname}
                    />
                ))}

                <hr />
                <SidebarElements iconName="person" TitleName="Perfil" navName="/perfil" />
                <SidebarElements iconName="settings" TitleName="Ajustes" navName="/ajustes" />




            </div>
        </div>
    )
}
