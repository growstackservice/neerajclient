// src/app/api/submit-to-sheet/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // Parse the incoming JSON request body
    const { name, email, phone, message } = await req.json();

    // Google Apps Script Web App URL (should be deployed as "Web App" with access "Anyone")
    const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbxSQSTdILaygF2T6ebV3VsiKBaegf_6C07bqFgOz_gqNVqVWZ-rhCqYU5DOBhsbeiw/exec';

    // Send POST request to Apps Script with JSON body
    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, message }),
    });

    const result = await response.text();

    // Return a success response to the client
    return NextResponse.json({ status: 'success', response: result });
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return NextResponse.json(
      { status: 'error', message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
