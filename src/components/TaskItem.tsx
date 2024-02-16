import React, { useState } from 'react'
import { Task } from '../type/Task'

type Props = Task & {removeTask: Function}

export default function TaskItem({titleTask, statusTask, removeTask}: Props) {
  const [isState, setState] = useState(statusTask);
  return (
    <div>
        <p>Task:{titleTask}</p>
        <button onClick={()=> setState(!isState)} >{isState ? "Done": "Not done"}</button>
        
        <button onClick={()=> removeTask(titleTask)}>Remove task</button>
        </div>
  )
}