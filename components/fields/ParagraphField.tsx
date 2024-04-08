"use client";

import { ElementsType, FormElement, FormElementInstance, SubmitValue } from "../FormElements";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import useDesigner from "../hooks/useDesigner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { LuHeading1 } from "react-icons/lu";
import { BsTextParagraph } from "react-icons/bs";
import { Textarea } from "../ui/textarea";

const type: ElementsType = "ParagraphField";
const extraAttributes = {
    text: "Text here",
}

const propertiesSchema = z.object({
    text: z.string().min(2).max(500),
})

export const ParagraphFieldFormElement: FormElement = {
    type,
    construct: (id: string) => ({
        id,
        type,
        extraAttributes
    }),
    designerBtnElement: {
        icon: BsTextParagraph,
        label: "Paragraph Field"
    },
    designerComponent: DesignerComponent,
    FormComponent,
    PropertiesComponent,
    validate: () => true
}


type CustomInstance = FormElementInstance & {
    extraAttributes: typeof extraAttributes;

}


function DesignerComponent({ elementInstance }: {
    elementInstance: FormElementInstance
}) {
    const element = elementInstance as CustomInstance;
    const { text } = element.extraAttributes;
    return (
        <div className="flex flex-col gap-2 w-full ">
            <Label className="text-muted-foreground">Paragraph field</Label>
            <p >{text}</p>
        </div>
    )
}


function FormComponent({ elementInstance }: {
    elementInstance: FormElementInstance,
}) {
    const element = elementInstance as CustomInstance;
    const { text } = element.extraAttributes;
    return (
        <p >{text}</p>
    )
}


type propertiesFormSchemaType = z.infer<typeof propertiesSchema>;
function PropertiesComponent({ elementInstance }: {
    elementInstance: FormElementInstance
}) {
    const element = elementInstance as CustomInstance;
    const { updateElement } = useDesigner()
    const { text } = element.extraAttributes;
    const form = useForm<propertiesFormSchemaType>({
        resolver: zodResolver(propertiesSchema),
        mode: "onBlur",
        defaultValues: {
            text
        }
    })
    useEffect(() => {
        form.reset(element.extraAttributes);
    }, [element, form])
    function applyChanges(values: propertiesFormSchemaType) {
        updateElement(element.id, {
            ...element,
            extraAttributes: {
                ...values
            }
        })
    }
    return (<Form {...form}>
        <form onBlur={form.handleSubmit(applyChanges)} onSubmit={(e) => {
            e.preventDefault();
        }} className="space-y-3">
            <FormField
                control={form.control}
                name="text"
                render={({ field }) => (<FormItem>
                    <FormLabel>Paragraph</FormLabel>
                    <FormControl>
                        <Textarea
                            rows={5}
                            {...field} onKeyDown={(e) => {
                                if (e.key === "Enter")
                                    e.currentTarget.blur();
                            }} />
                    </FormControl>
                    <FormMessage />
                </FormItem>)}
            />
        </form>
    </Form>)
}

export default ParagraphFieldFormElement;
