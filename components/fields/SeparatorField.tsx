"use client";

import { ElementsType, FormElement, FormElementInstance, SubmitValue } from "../FormElements";
import { Label } from "../ui/label";
import { RiSeparator } from "react-icons/ri";
import { Separator } from "../ui/separator";

const type: ElementsType = "SeparatorField";

export const SeparatorFieldFormElement: FormElement = {
    type,
    construct: (id: string) => ({
        id,
        type,
    }),
    designerBtnElement: {
        icon: RiSeparator,
        label: "Separator Field"
    },
    designerComponent: DesignerComponent,
    FormComponent,
    PropertiesComponent,
    validate: () => true
}


function DesignerComponent({ elementInstance }: {
    elementInstance: FormElementInstance
}) {
    return (
        <div className="flex flex-col gap-2 w-full ">
            <Label className="text-muted-foreground">Separator field</Label>
            <Separator />
        </div>
    )
}


function FormComponent({ elementInstance }: {
    elementInstance: FormElementInstance,
}) {
    return (
        <Separator />
    )
}


function PropertiesComponent({ elementInstance }: {
    elementInstance: FormElementInstance
}) {
    return (<p>No properties for this element</p>)
}

export default SeparatorFieldFormElement;