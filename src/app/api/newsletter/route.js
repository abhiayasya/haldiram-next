import { NextResponse } from "next/server";
import _get from "lodash/get";
import { submitnewsLetter } from "@/service/newsletter.service";

export async function POST(req) {
  const response = await req.json();
  try {
    const result = await submitnewsLetter(response);
    if (result.error) {
      throw new Error(`This email is already subscribed to the newsletter.`);
    }
    if (result.errorMessage) {
      throw new Error(`Something went wrong.`);
    }
    return NextResponse.json(
      {
        message: "Thank you for subscribing to our newsletter!",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(error.message, { status: 500 });
  }
}
