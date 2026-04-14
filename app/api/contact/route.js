import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

// Connection string ko bahar rakhein
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function POST(req) {
  try {
    // Check karein data aa raha hai ya nahi
    const body = await req.json();
    
    if (!body) {
      return NextResponse.json({ error: "Data empty hai" }, { status: 400 });
    }

    await client.connect();
    const db = client.db('CourtMarriage');
    const collection = db.collection('users');

    await collection.insertOne({
      ...body,
      submittedAt: new Date(),
    });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    // Connection close karna mat bhooliye ga
    await client.close();
  }
}