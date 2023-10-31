//it is a special file that routes to the file folder strucutere and map to teh rest api point
// this represetns /api/createNoteBook

import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req:Request){
    const {userId} = auth()
    if(!userId){
        return new NextResponse("Unauthorized",{status:401})
    }

    const body = await req.json();
    const {name} = body;
}

