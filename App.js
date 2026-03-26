import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/styles.css";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import AddUser from "./components/AddUser";
import Approval from "./components/Approval";
import UpdateRole from "./components/UpdateRole";
import RemoveUser from "./components/RemoveUser";
import AuditLog from "./components/AuditLog";

function App() {
  const [users, setUsers] = useState([]);
  const [requests, setRequests] = useState([]);
  const [logs, setLogs] = useState([]);

  // ✅ Updated addLog: structured log object
  const addLog = ({ action, performedBy, affectedUser, result, notes }) => {
    const newLog = {
      time: new Date(),
      action,
      performedBy,
      affectedUser,
      result,
      notes,
    };
    setLogs((prev) => [newLog, ...prev]);
  };

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard users={users} />} />
        <Route
          path="/add"
          element={<AddUser setRequests={setRequests} addLog={addLog} />}
        />
        <Route
          path="/approval"
          element={
            <Approval
              requests={requests}
              setRequests={setRequests}
              setUsers={setUsers}
              addLog={addLog}
            />
          }
        />
        <Route
          path="/update"
          element={<UpdateRole users={users} setUsers={setUsers} addLog={addLog} />}
        />
        <Route
          path="/remove"
          element={<RemoveUser users={users} setUsers={setUsers} addLog={addLog} />}
        />
        <Route path="/logs" element={<AuditLog logs={logs} />} />
      </Routes>
    </Router>
  );
}

export default App;