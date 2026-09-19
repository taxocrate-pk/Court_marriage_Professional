import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req) {
  let client;

  try {
    const body = await req.json();

    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid submission data.' }, { status: 400 });
    }

    const uri = process.env.MONGODB_URI;

    // Keep database configuration a runtime concern so production builds do not
    // fail when the deployment environment has not exposed MONGODB_URI yet.
    if (!uri) {
      console.error('Contact API configuration error: MONGODB_URI is not set.');
      return NextResponse.json(
        { error: 'Contact service is temporarily unavailable.' },
        { status: 503 }
      );
    }

    client = new MongoClient(uri);
    await client.connect();

    const db = client.db('CourtMarriage');
    const collection = db.collection('users');

    await collection.insertOne({
      ...body,
      submittedAt: new Date(),
    });

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Unable to submit the enquiry at this time.' },
      { status: 500 }
    );
  } finally {
    if (client) {
      await client.close().catch((error) => {
        console.error('Database close error:', error);
      });
    }
  }
}
