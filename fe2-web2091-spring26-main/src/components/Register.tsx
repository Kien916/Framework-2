
import { Form, Input, Button, message } from "antd";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../stores/useAuthStores";
import { useNavigate } from "react-router-dom";

function Register() {
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  const registerMutation = useMutation({
    mutationFn: async (values: any) => {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Đăng ký thất bại! Vui lòng kiểm tra lại thông tin.");
      }
      return response.json();
    },
    onSuccess: (data) => {
      message.success("Đăng ký thành công!");
      
      setUser({
        email: data.user?.email || data.email,
        name: data.user?.name || data.name,
        token: data.token || data.accessToken,
      });

      navigate("/");
    },
    onError: (error: any) => {
      message.error(error.message);
    },
  });

  const onFinish = (values: any) => {
    registerMutation.mutate(values);
  };

  return (
    <Form
      name="register_form"
      onFinish={onFinish}
      layout="vertical"
      style={{ maxWidth: 400, margin: "50px auto", padding: 24, border: "1px solid #f0f0f0", borderRadius: 8 }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 24 }}>Đăng Ký Tài Khoản</h2>
      
      <Form.Item 
        label="Họ và Tên" 
        name="name"
        rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}
      >
        <Input placeholder="Ví dụ: Nguyễn Văn A" />
      </Form.Item>

      <Form.Item 
        label="Email" 
        name="email"
        rules={[
          { required: true, message: 'Vui lòng nhập email!' },
          { type: 'email', message: 'Email không hợp lệ!' }
        ]}
      >
        <Input placeholder="Email của bạn" />
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
          loading={registerMutation.isPending} 
        >
          Đăng Ký
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Register;