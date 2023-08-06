'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();  

  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const getTaskFromApi = await fetch('/api/tasks');
    const tasksToJson = await getTaskFromApi.json();
    setTasks(tasksToJson.message);
  };

  useEffect(() => {
    getTasks();
  }, []);

  if (!tasks.length) return <h1>No hay tareas</h1>;


  return (
    <section>
      <div className='flex gap-3 px-48 py-5'>
        {tasks.map((task) => (
          <div key={task._id} className='p-6 bg-slate-300 cursor-pointer' onClick={()=> router.push(`tareas/new/${task._id}`)}>
            <p className='text-black uppercase'>Title: {task.title}</p>
            <p className='text-black uppercase'>Description: {task.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
