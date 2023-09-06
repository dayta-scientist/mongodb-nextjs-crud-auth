'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"

function FormPage() {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
  })

  const router = useRouter()

  const createTask = async () => {
    try {
      const res = await fetch('/api/tasks', {
        method: 'POST',
        body: JSON.stringify(newTask),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await res.json()

      if (res.status === 200) {
        router.push('/')
        router.refresh() 
      }
  
      
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createTask()
  }

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <h1 className="font-bold text-3xl">
          Create Task
        </h1>
        <input 
          type="text" 
          name="title" 
          placeholder="Title"
          className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
          onChange={handleChange}
          />
        <textarea 
          name="description" 
          rows={3}
          placeholder="Description"
          className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
          onChange={handleChange}
          ></textarea>
        <button  className="bg-green-600 text-white font-semibold px-8 py-2 rounded-lg">
          Save
        </button>
      </form>
    </div>
  )
}

export default FormPage