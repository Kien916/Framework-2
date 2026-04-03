
import { Link } from "react-router-dom";
import { Button } from "antd";
import { useAuthStore } from "../stores/useAuthStores";

export default function Navbar() {

  const { user, logout } = useAuthStore();

  return (
    <nav className="bg-blue-600 text-white shadow">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold">
          <strong>WEB2091 App</strong>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-gray-200">Trang chủ</Link>
          <Link to="/dashboard" className="hover:text-gray-200">Danh sách lab</Link>
          <Link to="/add" className="hover:text-gray-200">Thêm mới</Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {user ? (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <img
                  src={user.avatar || "https://i.pravatar.cc/150?img=11"}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <div className="flex flex-col text-sm leading-tight">
                  <span className="font-semibold text-green-300">Đã đăng nhập</span>
                  <span className="font-medium">{user.email || user.name}</span>
                </div>
              </div>
              
              <Button onClick={logout} danger type="primary">
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <span className="text-gray-200">Chưa đăng nhập</span>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
              <Link to="/register" className="hover:text-gray-200 font-medium border-b border-transparent hover:border-white">
                Đăng ký
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}