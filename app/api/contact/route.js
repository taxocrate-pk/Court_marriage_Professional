import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

export async function POST(req) {
  // 1. URI ko hamesha function ke andar rakhein taake .env load ho chuki ho
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.error("ERROR: MONGODB_URI is undefined. Check your .env.local file!");
    return NextResponse.json({ error: "Database URI missing" }, { status: 500 });
  }

  // 2. Client ko yahan define karein
  const client = new MongoClient(uri);

  try {
    const body = await req.json();
    
    // 3. Database se connect karein
    await client.connect();
    
    // .env mein aapne 'LegalPortal' likha hai, toh yahan bhi wahi use karein
    const db = client.db('LegalPortal'); 
    const collection = db.collection('users');

    await collection.insertOne({
      ...body,
      submittedAt: new Date(),
    });

    return NextResponse.json({ message: "Success" }, { status: 200 });

  } catch (error) {
    console.error("DATABASE ERROR DETAILS:", error);
    return NextResponse.json({ 
      error: "Internal Server Error", 
      details: error.message 
    }, { status: 500 });

  } finally {
    // 4. Connection band karna zaroori hai
    await client.close();
  }
}