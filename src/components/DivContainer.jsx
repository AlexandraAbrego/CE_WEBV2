import SearchBar from "./SearchBar"
import CustomButton from "./CustomButton";

const DivContainer = ({ titleC, showSearchBar = false, children, showButton=false , titleB = ''}) => {
    return (
        <div className='divBackground'>
            <div className='divColumns' style={{ justifyContent: 'space-between' }}>
                <h2>{titleC}</h2>
                {showSearchBar && <SearchBar />}
                {showButton && <CustomButton title={titleB} />}

            </div>
            <div>
                {children}
            </div>

        </div>
    )
}

export default DivContainer;