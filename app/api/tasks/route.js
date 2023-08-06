import Tasks from '../../models/tasks';
import { connectDB } from '../../utils/mongoose';
import { NextResponse } from 'next/server';

export async function GET() {
  connectDB();

  const tasks = await Tasks.find();

  return NextResponse.json({
    message: tasks,
  });
}

export async function POST(req) {
  const body = await req.json();

  connectDB();

  const taskCreated = await Tasks.create(body);

  return NextResponse.json({
    message: taskCreated,
  });
}
