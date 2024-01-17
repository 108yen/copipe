import getTweet from '@/utils/tweet';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'

export async function GET() {
    const result = await getTweet()
    return NextResponse.json(result);
}