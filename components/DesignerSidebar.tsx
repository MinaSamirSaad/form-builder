import { FormElements } from "./FormElements";
import FormElementSidebar from "./FormElementSidebar";
import useDesigner from "./hooks/useDesigner";
import PropertiesFormSidebar from "./PropertiesFormSidebar";
import SidebarBtnElement from "./SidebarBtnElement";

const DesignerSidebar = () => {
    const { selectedElement } = useDesigner();
    return (
        <aside className="md:w-[300px] max-w-[300px] flex flex-col flex-grow gap-2 boarder-l-2 border-muted p-4 bg-background overflow-y-auto h-full">
            {!selectedElement && <FormElementSidebar />}
            {selectedElement && <PropertiesFormSidebar />}
        </aside>
    )
}
export default DesignerSidebar;