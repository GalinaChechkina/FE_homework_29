import React, { useState } from 'react'
import { Task } from '../type/Task';
import TaskItem from './TaskItem';

export default function TaskManager() {
    
    const tasks: Task[] = [
        {titleTask: "Сделать домашку", statusTask: true},
        {titleTask: "Разобрать конспект", statusTask: false},
        {titleTask: "Выпить кофе", statusTask: true},
        {titleTask: "Пригласить мужа на свидание", statusTask: true},
        {titleTask: "Сходить на матч сына", statusTask: false}
       ];

    const [tasksState, setTasks] = useState<Task[]>(tasks);
    
    
    const removeTask = (title: string):void => {
        setTasks(tasksState.filter(e=> e.titleTask !== title));
        };
    // const isStatus = (title: string, status: string):void => {
    //     tasksState.forEach(e=> {
    //         if (e.titleTask === title){
    //             e.statusTask = !status;
    //         }
    //     setTasks([...tasksState]);
    //     });
    // };


  return (
    <div>
        {
            tasksState.map((task)=> (<TaskItem key = {task.titleTask} {...task} removeTask={removeTask}/>))
        }
    </div>
  )
}