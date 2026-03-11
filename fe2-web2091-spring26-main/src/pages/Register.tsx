
import { Form, Input, Button } from "antd";     

function Register() {
    const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <Form 
                name="register_form"
                onFinish={onFinish}
                layout="vertical"
                style={{ maxWidth: 400, margin: "50px auto", padding: 24, border: "1px solid #f0f0f0", borderRadius: 8 }}
              >
                <h2 style={{ textAlign: "center", marginBottom: 24 }}>Đăng Ký Tài Khoản</h2>
                <Form.Item label="Họ và Tên" name="name">
                  <Input placeholder="Ví dụ: Nguyễn Văn A" />
                </Form.Item>
                <Form.Item label="Email" name="email">
                  <Input placeholder="Email của bạn" />
                </Form.Item>
                <Form.Item label="Mật khẩu" name="password">
                  <Input.Password placeholder="Nhập mật khẩu" /> 
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" block size="large">
                    Đăng Ký
                  </Button>
                </Form.Item>
              </Form>
  )
}

export default Register