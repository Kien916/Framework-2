
import { Form, Input, Button, message } from "antd";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../stores/useAuthStores";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();
  const loginMutation = useMutation({
    mutationFn: async (values: any) => {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Email hoặc mật khẩu không chính xác!");
      }
      return response.json();
    },
    onSuccess: (data) => {
      message.success("Đăng nhập thành công!");
      
      setUser({
        email: data.user?.email || data.email,
        name: data.user?.name || data.name,
        avatar: data.user?.avatar,
        token: data.token || data.accessToken,
      });

      navigate("/");
    },
    onError: (error: any) => {
      message.error(error.message);
    },
  });

  const onFinish = (values: any) => {
    loginMutation.mutate(values);
  };

  return (
    <Form
      name="login_form"
      onFinish={onFinish}
      layout="vertical"
      style={{ maxWidth: 400, margin: "50px auto", padding: 24, border: "1px solid #f0f0f0", borderRadius: 8 }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 24 }}>Đăng Nhập</h2>

      <Form.Item 
        label="Email" 
        name="email"
        rules={[
          { required: true, message: 'Vui lòng nhập email!' },
          { type: 'email', message: 'Email không hợp lệ!' }
        ]}
      >
        <Input placeholder="Nhập email của bạn" />
      </Form.Item>

      <Form.Item 
        label="Mật khẩu" 
        name="password"
        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
      >
        <Input.Password placeholder="Nhập mật khẩu" />
      </Form.Item>

      <Form.Item>
        <Button 
          type="primary" 
          htmlType="submit" 
          block 
          size="large"
          loading={loginMutation.isPending} 
        >
          Đăng Nhập
        </Button>
      </Form.Item>

      <div style={{ textAlign: "center", marginTop: 16 }}>
        <span className="text-gray-500">Chưa có tài khoản? </span>
        <Link to="/register" className="text-blue-600 hover:underline">
          Đăng ký ngay
        </Link>
      </div>
    </Form>
  );
}

export default Login;