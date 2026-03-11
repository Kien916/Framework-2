import { Toaster } from "react-hot-toast";
import { Link, Routes, Route } from "react-router-dom"; 
import { Layout, Form,Table ,Input, Button } from "antd";     
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Tablelab2 from "./Pages2/Tablelab2";

const { Header, Content, Footer } = Layout;

function App() {
  const onFinish = (values: any) => {
    console.log(values);
  };
  const columns = [
  { title: "Name", dataIndex: "name" },
  { title: "Age", dataIndex: "age" },
];

const data = [
  { key: 1, name: "John", age: 25 },
  { key: 2, name: "Anna", age: 30 },
];

  return (
    <div>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/dashboard" className="hover:text-gray-200">
              Trang dashboard
            </Link>
            <Link to="/tablelab2" className="hover:text-gray-200">
              lab2
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="#" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="/register" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        
        <Route 
          path="/" 
          element={
            <>
              <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
                <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
                <Link className="hover:text-blue-600 underline" to="/lab1">Lab1</Link>
                
                <div className="my-4 space-x-2">
                  <Button type="primary">Click me</Button>
                  <Button type="default">Click me</Button>
                  <Button type="dashed">Click me</Button>
                  <Button type="link">Click me</Button>
                  <Button type="text">Click me</Button>
                </div>

                <Layout className="my-8 text-left">
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
                    <Table columns={columns} dataSource={data}/>
                  </Content>

                  <Footer>Footer</Footer>
                </Layout>
              </div>
            </>
          } 
        />
        <Route path="/tablelab2" element={<Tablelab2/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;