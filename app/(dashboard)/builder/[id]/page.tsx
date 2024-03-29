import { GetFormById } from "@/actions/form";
import FormBuilder from "@/components/FormBuilder";

const BuilderPage = async ({ params }: { params: { id: string } }) => {
    const form = await GetFormById(Number(params.id))
    if (!form) throw new Error("form not found");
    return (
        <FormBuilder form={form} />
    )
}
export default BuilderPage;