import getTweet from '@/utils/tweet';
import { NextResponse } from 'next/server';

export async function GET() {
    const result = await getTweet()
    return NextResponse.json(result);
}