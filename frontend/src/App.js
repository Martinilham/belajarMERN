import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/userList";
import AddUser from "./components/addUser";
import EditUser from "./components/editUser";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="add" element={<AddUser />} />
          <Route path="edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;