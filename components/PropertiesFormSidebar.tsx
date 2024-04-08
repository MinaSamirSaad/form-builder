import { FormElements } from "./FormElements";
import useDesigner from "./hooks/useDesigner";
import { Button } from "./ui/button";
import { AiOutlineClose } from "react-icons/ai"
import { Separator } from "./ui/separator";
import { BiSolidTrash } from "react-icons/bi";

interface IProps {

}
const PropertiesFormSidebar = ({ }: IProps) => {
    const { selectedElement, setSelectedElement, removeElement } = useDesigner();
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
            <Button
                className="rounded-md bg-red-500 text-md hover:bg-red-400 hidden max-xl:flex mt-3"
                onClick={() => {
                    removeElement(selectedElement.id)
                    setSelectedElement(null);
                }}
            >
                <BiSolidTrash className="h-6 w-6 text-white text-center" />
            </Button>
        </div>
    )
}
export default PropertiesFormSidebar;