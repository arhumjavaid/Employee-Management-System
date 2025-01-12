import Header from "../other/Header"
import TaskLIstNumbers from "../other/TaskLIstNumbers"
import TaskList from "../taskList/TaskList"

const EmployeeDashboard = () => {
  return (
    <div className="bg-[#1C1C1C] p-10 h-screen">
        <Header color = "red" />
        <TaskLIstNumbers />
        <TaskList />
    </div>
  )
}

export default EmployeeDashboard