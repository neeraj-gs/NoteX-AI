//it is a special file that routes to the file folder strucutere and map to teh rest api point
// this represetns /api/createNoteBook

import { db } from "@/lib/db";
import { $notes } from "@/lib/db/schema";
import { generateImage, generateImagePrompt } from "@/lib/openai";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req:Request){
    const {userId} = auth()
    if(!userId){
        return new NextResponse("Unauthorized",{status:401})
    }

    const body = await req.json();
    const {name} = body;

    // const image_description = await generateImagePrompt(name);
    // console.log({image_description});
    // if(!image_description){
    //     return new NextResponse("Error",{status:500})
    // }
    // const image_url = await generateImage(image_description)
    // if(!image_url){
    //     return new NextResponse("Error",{status:500})
    // }
    const note_ids = await db.insert($notes).values({
        name,
        userId,
        // imageUrl: image_url,
    }).returning({
        insertedId: $notes.id
    });

    return NextResponse.json({
        note_id:note_ids[0].insertedId
    })
}

