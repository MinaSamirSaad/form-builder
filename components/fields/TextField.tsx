"use client";

import { MdTextFields } from "react-icons/md";
import { ElementsType, FormElement, FormElementInstance } from "../FormElements";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const type: ElementsType = "TextField";
const extraAttributes = {
    label: "TextField",
    helperText: "Text",
    required: false,
    placeHolder: "value her..."
}

export const TextFieldFormElements: FormElement = {
    type,
    construct: (id: string) => ({
        id,
        type,
        extraAttributes
    }),
    designerBtnElement: {
        icon: MdTextFields,
        label: "TextField"
    },
    designerComponent: DesignerComponent,
    FormComponent: () => <div>Form Component</div>,
    PropertiesComponent: () => <div>Properties Component</div>
}
type CustomInstance = FormElementInstance & {
    extraAttributes: typeof extraAttributes;

}
function DesignerComponent({ elementInstance }: {
    elementInstance: FormElementInstance
}) {
    const element = elementInstance as CustomInstance;
    const { label, helperText, required, placeHolder } = element.extraAttributes;
    return (
        <div className="flex flex-col gap-2 w-full ">
            <Label>
                {label}
                {required && "*"}
            </Label>
            <Input readOnly disabled placeholder={placeHolder} />
            {helperText && <p className="text-muted-foreground text-[0.8rem]">{helperText}</p>}
        </div>
    )
}
export default TextFieldFormElements;
