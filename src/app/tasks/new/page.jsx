'use client'
import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"

function FormPage() {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
  })

  const router = useRouter()
  const params = useParams()

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

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        const res = await fetch(`/api/tasks/${params.id}`, {
          method: "DELETE",
        })
        router.push('/')
        router.refresh()
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    console.log(params)
  }, [])

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <header className="flex justify-between">
          <h1 className="font-bold text-3xl">
            {
              !params.id ? "Create Task" : "Update Task"
            }
          </h1>

          <button 
            className="bg-red-500 px-3 py-1 rounded-md"
            onClick={handleDelete}
            type="button">
            Delete
          </button>
        </header>

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
        <button  
          className="bg-green-600 text-white font-semibold px-8 py-2 rounded-lg"
          type="submit">
          Save
        </button>
      </form>
    </div>
  )
}

export default FormPage