import DateFieldFormElement from "./fields/DateField";
import NumberFieldFormElement from "./fields/NumberField";
import ParagraphFieldFormElement from "./fields/ParagraphField";
import SelectFieldFormElement from "./fields/SelectField";
import SeparatorFieldFormElement from "./fields/SeparatorField";
import SpacerFieldFormElement from "./fields/SpacerField copy";
import SubTitleFieldFormElement from "./fields/SubTitleField";
import TextAreaFieldFormElement from "./fields/TextAreaField";
import { TextFieldFormElement } from "./fields/TextField";
import TitleFieldFormElement from "./fields/TitleField";

export type ElementsType =
    "TextField" |
    "TitleField" |
    "SubTitleField" |
    "ParagraphField" |
    "SeparatorField" |
    "SpacerField" |
    "NumberField" |
    "TextAreaField" |
    "DateField" |
    "SelectField";
export type SubmitValue = (key: string, value: string) => void;
export type FormElement = {
    type: ElementsType;
    construct: (id: string) => FormElementInstance;
    designerBtnElement: {
        icon: React.ElementType;
        label: string;
    };
    designerComponent: React.FC<{
        elementInstance: FormElementInstance;
    }>;
    FormComponent: React.FC<{
        elementInstance: FormElementInstance;
        submitValue?: SubmitValue;
        isInvalid?: boolean;
        defaultValue?: string;
    }>;
    PropertiesComponent: React.FC<{
        elementInstance: FormElementInstance;
    }>;
    validate: (formElement: FormElementInstance, currentValue: string) => boolean;
}

export type FormElementInstance = {
    id: string;
    type: ElementsType;
    extraAttributes?: Record<string, any>;
}

type FormElementsType = {
    [key in ElementsType]: FormElement;
}
export const FormElements: FormElementsType = {
    TextField: TextFieldFormElement,
    TitleField: TitleFieldFormElement,
    SubTitleField: SubTitleFieldFormElement,
    ParagraphField: ParagraphFieldFormElement,
    SeparatorField: SeparatorFieldFormElement,
    SpacerField: SpacerFieldFormElement,
    NumberField: NumberFieldFormElement,
    TextAreaField: TextAreaFieldFormElement,
    DateField: DateFieldFormElement,
    SelectField: SelectFieldFormElement,
};
