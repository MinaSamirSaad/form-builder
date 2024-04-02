import { FormElements } from "./FormElements";
import useDesigner from "./hooks/useDesigner";
import { Button } from "./ui/button";
import { AiOutlineClose } from "react-icons/ai"
import { Separator } from "./ui/separator";

interface IProps {

}
const PropertiesFormSidebar = ({ }: IProps) => {
    const { selectedElement, setSelectedElement } = useDesigner();
    if (selectedElement === null) return null;
    const PropertiesForm = FormElements[selectedElement?.type].PropertiesComponent;
    return (
        <div className="flex flex-col p-2">
            <div className="flex justify-between items-center">
                <p className="text-sm text-foreground/70">Element properties</p>
                <Button size={"icon"} variant={"ghost"} onClick={() => {
                    setSelectedElement(null);
                }}>
                    <AiOutlineClose />
                </Button>
            </div>
            <Separator className="mb-4" />
            <PropertiesForm elementInstance={selectedElement} />
        </div>
    )
}
export default PropertiesFormSidebar;