// src/components/Navbar.tsx
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { Button } from "antd";

export default function Navbar() {
  const context = useContext(UserContext);
  if (!context) return null;
  const { user, setUser } = context;

  // Bài 2 - Hàm xử lý Login giả lập
  const handleMockLogin = () => {
    setUser({ 
      name: "kiendt91", 
      avatar: "https://i.pravatar.cc/150?img=11" // Avatar giả lập
    });
  };

  // Bài 3 - Hàm xử lý Logout
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <nav className="bg-blue-600 text-white shadow">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="#" className="text-xl font-semibold">
          <strong>WEB2091 App</strong>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="#" className="hover:text-gray-200">Trang chủ</Link>
          <Link to="/list" className="hover:text-gray-200">Danh sách</Link>
          <Link to="/add" className="hover:text-gray-200">Thêm mới</Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {user ? (
            // Trạng thái ĐÃ đăng nhập
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {/* Bài 1: Hiển thị avatar và name */}
                <img 
                  src={user.avatar} 
                  alt="User Avatar" 
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <span className="font-medium">{user.name}</span>
              </div>
              <Button onClick={handleLogout} danger type="primary">
                Logout
              </Button>
            </div>
          ) : (
            // Trạng thái CHƯA đăng nhập
            <div className="flex items-center space-x-4">
              <span>Guest</span>
              <Button onClick={handleMockLogin}>Login</Button>
              <Link to="#" className="hover:text-gray-200">Đăng ký</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}