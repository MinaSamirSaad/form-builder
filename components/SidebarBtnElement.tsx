import { useDraggable } from "@dnd-kit/core";
import { FormElement } from "./FormElements";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface IProps {
    formElement: FormElement
}
const SidebarBtnElement = ({ formElement }: IProps) => {
    const draggable = useDraggable({
        id: `designer-btn-${formElement.type}`,
        data: {
            type: formElement.type,
            isDesignerBtnElement: true,

        }
    })
    const { label, icon: Icon } = formElement.designerBtnElement;
    return (
        <Button
            ref={draggable.setNodeRef}
            variant={"outline"}
            className={cn("flex flex-col gap-2 h-[100px] w-[100px] cursor-grab", draggable.isDragging && "ring-2 ring-primary")}
            {...draggable.listeners}
            {...draggable.attributes}
        >
            <Icon className="h-8 w-8 text-primary cursor-grab" />
            <p className="text-xs">{label}</p>
        </Button>
    )
}

export const SidebarBtnElementDragOverlay = ({ formElement }: IProps) => {
    const { label, icon: Icon } = formElement.designerBtnElement;
    return (
        <Button
            variant={"outline"}
            className="flex flex-col gap-2 h-[100px] w-[100px] cursor-grab"
        >
            <Icon className="h-8 w-8 text-primary cursor-grab" />
            <p className="text-xs">{label}</p>
        </Button>
    )
}
export default SidebarBtnElement;