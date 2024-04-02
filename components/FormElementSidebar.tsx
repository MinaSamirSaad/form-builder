import { FormElements } from "./FormElements";
import SidebarBtnElement from "./SidebarBtnElement";

interface IProps {

}
const FormElementSidebar = ({ }: IProps) => {
    return (
        <div>
            Elements
            <SidebarBtnElement formElement={FormElements.TextField} />
        </div>
    )
}
export default FormElementSidebar;