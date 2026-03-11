import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Layout } from "antd";
const { Header,Sider, Content, Footer } = Layout;
import { Form, Input, Button } from "antd";


function App() {
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="#" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
        <Link className="hover:text-gray-200" to="/lab1">Lab1</Link>
        <Button type="primary">Click me</Button>
        <Button type="default">Click me</Button>
        <Button type="dashed">Click me</Button>
        <Button type="link">Click me</Button>
        <Button type="text">Click me</Button>
        <Layout>
          <Header style={{ color: "white" }}>Header</Header>
          <Content style={{ padding: 20 }}>
             <Form onFinish={onFinish}>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Nhập email" }]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" type="primary">
          Login
        </Button>
      </Form.Item>
    </Form>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
      <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ color: "white", backgroundColor: "#001529", fontSize: "20px" }}>
        My Dashboard
      </Header>
      
      <Layout>
        <Sider width={200} style={{ background: "#fff" }}>
          <div style={{ padding: "20px", fontWeight: "bold" }}>Menu 1</div>
          <div style={{ padding: "20px", fontWeight: "bold" }}>Menu 2</div>
        </Sider>
        <Content style={{ padding: "24px", backgroundColor: "#f5f5f5" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            Đây là nội dung chính của Dashboard.
          </div>
        </Content>
      </Layout>
      
    </Layout>
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
      >
        <Input placeholder="Ví dụ: Nguyễn Văn A" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
      >
        <Input placeholder="Email của bạn" />
      </Form.Item>

      <Form.Item
        label="Mật khẩu"
        name="password"
      >
        <Input.Password placeholder="Nhập mật khẩu" /> 
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block size="large">
          Đăng Ký
        </Button>
      </Form.Item>
    </Form>
      <Toaster />
    </>
  );
}

export default App;

