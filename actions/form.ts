"use server";

import prisma from "@/lib/prisma";
import { formSchema, formSchemaType } from "@/schemas/form";
import { currentUser } from "@clerk/nextjs";

class UserNoFoundErr extends Error { }

export async function GetFormStats() {
    const user = await currentUser();
    if (!user) throw new UserNoFoundErr("User not found");
    const stats = await prisma.form.aggregate({
        where: {
            userId: user.id
        },
        _sum: {
            visits: true,
            submissions: true
        }
    })
    const visits = stats._sum.visits || 0;
    const submissions = stats._sum.submissions || 0;
    let submissionsRate = 0;
    if (visits > 0) submissionsRate = (submissions / visits) * 100
    const bounceRate = 100 - submissionsRate;

    return {
        visits,
        submissions,
        submissionsRate,
        bounceRate
    }
}

export async function CreateForm(data: formSchemaType) {
    const validation = formSchema.safeParse(data);
    if (!validation.success) throw new Error("Form not valid");
    const user = await currentUser();
    if (!user) throw new UserNoFoundErr("User not found");
    const { name, description } = data;
    const form = await prisma.form.create({
        data: {
            name,
            description,
            userId: user.id
        }
    })
    if (!form) throw new Error("something went wrong");

    return form.id;

}

export async function GetForms() {
    const user = await currentUser();
    if (!user) throw new UserNoFoundErr("User not found");
    const forms = await prisma.form.findMany({
        where: {
            userId: user.id
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
    return forms;
}

export async function GetFormById(id: number) {
    const user = await currentUser();
    if (!user) throw new UserNoFoundErr("User not found");
    const form = await prisma.form.findUnique({
        where: {
            id,
            userId: user.id
        }
    })
    return form;
}

export async function UpdateFormContent(id: number, jsonContent: string) {
    const user = await currentUser();
    if (!user) throw new UserNoFoundErr("User not found");
    const form = await prisma.form.update({
        where: {
            userId: user.id,
            id
        },
        data: {
            content: jsonContent
        }
    })
    return form;
}

export async function PublishForm(id: number) {
    const user = await currentUser();
    if (!user) throw new UserNoFoundErr("User not found");
    const form = await prisma.form.update({
        where: {
            userId: user.id,
            id
        },
        data: {
            published: true
        }
    })
    return form;
}