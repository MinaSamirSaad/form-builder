"use client";
import { Button } from "./ui/button";
import { MdOutlinePublish } from "react-icons/md";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "./ui/alert-dialog";
import { FaIcons, FaSpinner } from "react-icons/fa";
import { useTransition } from "react";
import { toast } from "./ui/use-toast";
import { DeleteForm } from "@/actions/form";
import { useRouter } from "next/navigation";
import { BiSolidTrash } from "react-icons/bi";
const DeleteFormBtn = ({ id }: { id: number }) => {
    const [loading, startTransition] = useTransition();
    const router = useRouter();
    async function deleteForm() {
        try {
            await DeleteForm(Number(id))
            toast({
                title: "Success",
                description: "Your form deleted successfully",
            })
            router.refresh();
        } catch (error) {
            toast({
                title: "Error",
                description: "Something went wrong",
            })
        }
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    className="rounded-md rounded-l-none bg-red-500 text-md hover:bg-red-400"
                >
                    <BiSolidTrash className="h-6 w-6 text-white" />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. After delete the form you will not be able to show it again.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction disabled={loading} onClick={(e) => {
                        e.preventDefault();
                        startTransition(deleteForm);
                    }}>Delete {loading && <FaSpinner className="animate-spin" />}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
export default DeleteFormBtn;