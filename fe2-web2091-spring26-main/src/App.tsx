import { Toaster } from "react-hot-toast";
import { Link, Routes, Route } from "react-router-dom";
import { Layout, Form, Table, Input, Button } from "antd";
import Dashboard from "./pages/Dashboard";
import Register from "./components/Register";
import Tablelab2 from "./Pages2/Tablelab2";
import Lab3 from "./Pages3/lab3";
import Lab4 from "./pages/Lab4";
import Lab5 from "./pages/Lab5";
import Lab6 from "./pages/Lab6";
import Lab7 from "./pages/Lab7";
import Navbar from "./components/Header";
import Login from "./components/Login";
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
      <Navbar />
      
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
                    <Form  
                     labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}
                     layout="vertical" onFinish={onFinish} style={{ maxWidth: 500 }}>
                      <Form.Item label="Name" name="name" rules={[{
                        required:true, message:"vui lòng nhập username"
                      }]}>
                        <Input />
                      </Form.Item>
                      <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                          { required: true, message: "Vui lòng nhập email" },
                          { type: "email", message: "Email không hợp lệ" },
                        ]}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item  label="Password" name="password" rules={[
                        { min: 6, message:"tối thiểu 6 kí tự"},
                        {required:true, message:"vui lòng nhập password"}
                      ]}>
                        <Input.Password />
                      </Form.Item>

                      <Form.Item>
                        <Button type="primary" htmlType="submit">
                          Đăng nhập
                        </Button>
                      </Form.Item>
                    </Form>
                    <Table columns={columns} dataSource={data} />
                  </Content>

                  <Footer>

                  </Footer>
                </Layout>
              </div>
            </>
          }
        />
        <Route path="/lab4" element={<Lab4/>}/>
        <Route path="/lab7" element={<Lab7/>}/>
        <Route path="/lab6/:id" element={<Lab6/>}/>
        <Route path="/lab5" element={<Lab5/>}/> 
        <Route path="/lab3" element={<Lab3/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tablelab2" element={<Tablelab2/>}/>
      </Routes>
      <Toaster />
      <Toaster />

    </div>
  );
}

export default App;