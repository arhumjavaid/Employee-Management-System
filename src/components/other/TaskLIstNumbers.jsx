
const TaskLIstNumbers = () => {
  return (
    <div className="flex justify-between gap-5 mt-10">
        <div className="w-[45%] py-5 px-9 rounded-xl bg-blue-400">
            <h1 className="text-4xl font-bold">0</h1>
            <h1 className="text-2xl font-medium">New Task</h1>
        </div>
        <div className="w-[45%] py-5 px-9 rounded-xl bg-green-400">
            <h1 className="text-4xl font-semibold">0</h1>
            <h1 className="text-2xl font-medium">Completed</h1>
        </div>
        <div className="w-[45%] py-5 px-9 rounded-xl text-black bg-yellow-300">
            <h1 className="text-4xl font-semibold">0</h1>
            <h1 className="text-2xl font-medium">Accepted</h1>
        </div>
        <div className="w-[45%] py-5 px-9 rounded-xl bg-red-400">
            <h1 className="text-4xl font-semibold">0</h1>
            <h1 className="text-2xl font-medium">Failed</h1>
        </div>
    </div>
  )
}

export default TaskLIstNumbers