import { NextResponse } from 'next/server';
import Tasks from '../../../models/tasks';
import { connectDB } from '../../../utils/mongoose';

export async function GET(req, { params }) {
  connectDB();

  const task = await Tasks.findOne({
    _id: params.id,
  });

  return NextResponse.json({
    message: task,
  });
}
export async function PUT(req, { params }) {
  const body = await req.json();

  connectDB();

  const taskUpdated = await Tasks.findOneAndUpdate({ _id: params.id }, body, {
    new: true,
  });

  return NextResponse.json({
    message: taskUpdated,
  });
}
export async function DELETE(req, { params }) {
  connectDB();

  await Tasks.findOneAndDelete({ _id: params.id });
  return NextResponse.json({
    message: 'Tarea Borrada',
  });
}
