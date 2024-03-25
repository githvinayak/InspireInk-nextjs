import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/connect"
import bcrypt from 'bcrypt'

export async function POST(req, res) {
    try {

        const { name, email, password } = await req.json();
        console.log({ name, email, password });

        const exists = await prisma.user.findFirst({
            where: {
                OR: [
                    { name: name },
                    { email: email }
                ]
            }
        })

        if (exists) {
            console.log('User already exists!')
            return NextResponse.json({ message: 'Username or Email Already Exists.' }, {
                status: 500
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword
            }
        })

        return NextResponse.json({ message: 'User Registered' }, { status: 201 });

    } catch (error) {
        console.log("Error while Registeing", error);
        return NextResponse.json({ message: 'Error Occured While Registering the user.' }, { status: 500 });
    }
}