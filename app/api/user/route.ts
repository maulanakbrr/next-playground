import { addUser, fetchUsers, fetchUsersByQuery} from "@/utils/db/users"
import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get('category')
    const searchValue = searchParams.get('searchValue')
    // console.log('REQ:: ', query)

    const res = category && searchValue ? await fetchUsersByQuery({category, searchValue}) : await fetchUsers()
    return Response.json({res})
}

export async function POST(request: Request) {
    try {
        const data = await request.json()
        const { name, email, service, phoneNo } = data
        await addUser(name, email, service, phoneNo)
        return new Response('Success!', { status: 200 })
    } catch(err) { 
        return new Response('Error!', { status: 500 })
    } 
    
}