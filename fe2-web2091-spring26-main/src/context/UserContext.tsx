// src/context/UserContext.tsx
import { createContext, useState, ReactNode } from "react";

// Thêm trường avatar vào kiểu dữ liệu
type User = {
  name: string;
  avatar: string; 
};

type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  // Để null mặc định để hiển thị trạng thái Guest ban đầu
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};