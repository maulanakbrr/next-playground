import { addUser, fetchUsers } from "@/utils/db/users"
import { NextRequest, NextResponse } from "next/server"

export async function GET() {
    const res = await fetchUsers()
    return NextResponse.json({res})
}

export async function POST(request: NextRequest) {
    try {
        const data = await request.json()
        const { name, email, service, phoneNo } = data
        await addUser(name, email, service, phoneNo)
        return new Response('Success!', { status: 200 })
    } catch(err) { 
        return new Response('Error!', { status: 500 })
    }
    
}