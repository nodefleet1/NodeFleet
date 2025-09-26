import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const { message } = await req.json();
    console.log("User message:", message);

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", 
      messages: [{ role: "user", content: message }],
    });

    const reply = completion.choices[0]?.message?.content || "⚠️ No reply from AI";

    console.log("OpenAI reply:", reply);

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { reply: "⚠️ Error: Unable to get response." },
      { status: 500 }
    );
  }
}
