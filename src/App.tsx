import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Task from "./components/Task";
import TaskInput from './components/TaskInput';
import type { TaskProps } from "./libs/types";

function App() {
  
  const tasks: TaskProps[] = [
    {
      id: 1,
      title: "Read a book",
      description: "Vite + React + Bootstrap + TS",
      isDone: false,
    },
    {
      id: 2,
      title: "Write code",
      description: "Finish project for class",
      isDone: false,
    },
    {
      id: 3,
      title: "Deploy app",
      description: "Push project to GitHub Pages", 
      isDone: false,
    },
  ];

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Header ด้านบน */}
      <Header />


      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}
        <Sidebar username="chanadda" type="admin" />

        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            <div className="col-12 m-2 p-0">
              {/* Task Input */}
              <TaskInput />

              {/* Card Task แต่ละตัว */}
              <Task {...tasks[0]} />
              <Task {...tasks[1]} />
              <Task {...tasks[2]} />
            </div>
          </main>
        </div>
      </div>

      {/* Footer ด้านล่าง */}
      <Footer
        year={2026}
        fullName="chanadda thanyaratthanon"
        studentId="67062039"
      />
    </div>
  );
}

export default App;

