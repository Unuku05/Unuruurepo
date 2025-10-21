"use client";

import Layout from "../components/layout";
import { useState, useEffect } from "react";

interface Todo {
  id: number;
  text: string;
  done: boolean;
  due?: string;
}

export default function TodoPage() {
  // -------------------------------
  // 🗂 State хувьсагчид
  // -------------------------------
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState("");
  const [due, setDue] = useState("");
  const [filter, setFilter] = useState<"all" | "done" | "notdone">("all");

  // -------------------------------
  // 📥 LocalStorage-с өгөгдөл унших
  // -------------------------------
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  // -------------------------------
  // 💾 LocalStorage-д хадгалах
  // -------------------------------
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // -------------------------------
  // ➕ Todo нэмэх
  // -------------------------------
  const addTodo = () => {
    if (task.trim() === "") return;
    const newTodo: Todo = {
      id: Date.now(),
      text: task,
      done: false,
      due: due || "No due date",
    };
    setTodos([...todos, newTodo]);
    setTask("");
    setDue("");
  };

  // -------------------------------
  // ❌ Todo устгах
  // -------------------------------
  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // -------------------------------
  // ✅ Done төлөв солих
  // -------------------------------
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // -------------------------------
  // 🔍 Filter хийх
  // -------------------------------
  const filteredTodos = todos.filter((todo) => {
    if (filter === "done") return todo.done;
    if (filter === "notdone") return !todo.done;
    return true;
  });

  // -------------------------------
  // 🖥 UI хэсэг
  // -------------------------------
  return (
    <Layout>
      <div className="flex flex-col items-center gap-6 p-6">
        <h1 className="text-3xl font-bold">📝 Todo List</h1>

        {/* Input хэсэг */}
        <div className="flex flex-wrap justify-center gap-2">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task..."
            className="border px-3 py-2 rounded w-60 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="date"
            value={due}
            onChange={(e) => setDue(e.target.value)}
            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addTodo}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add
          </button>
        </div>

        {/* Filter хэсэг */}
        <div className="flex gap-3">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1 rounded ${
              filter === "all"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("done")}
            className={`px-3 py-1 rounded ${
              filter === "done"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Done
          </button>
          <button
            onClick={() => setFilter("notdone")}
            className={`px-3 py-1 rounded ${
              filter === "notdone"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Not Done
          </button>
        </div>

        {/* Todo жагсаалт */}
        <ul className="w-80">
          {filteredTodos.length === 0 ? (
            <p className="text-gray-500 text-center mt-4">
              💤 Todo хоосон байна.
            </p>
          ) : (
            filteredTodos.map((todo) => (
              <li
                key={todo.id}
                className="flex justify-between items-center border-b py-2"
              >
                <div className="flex flex-col items-start">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={todo.done}
                      onChange={() => toggleTodo(todo.id)}
                      className="mr-2 cursor-pointer"
                    />
                    <span
                      className={`${
                        todo.done
                          ? "line-through text-gray-500"
                          : "text-gray-800"
                      }`}
                    >
                      {todo.text}
                    </span>
                  </div>
                  <div
                    className={`text-sm ${
                      todo.done ? "text-green-600" : "text-gray-500"
                    }`}
                  >
                    📅 {todo.due || "No due date"}
                  </div>
                </div>
                <button
                  onClick={() => removeTodo(todo.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </Layout>
  );
}
