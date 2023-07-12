import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSun} from "@fortawesome/free-solid-svg-icons";
import {useContext} from "react";
import {AppContextContainer} from "@/Context/AppContext";

export const ThemeSwitcher = () => {
    const {toggleDarkMode}: WrapperFnInterface | any = useContext(AppContextContainer)

    return <div>
        <button onClick={e => toggleDarkMode()}>
            <FontAwesomeIcon icon={faSun}/>
        </button>
    </div>
}