import React from 'react';
import { Form, Input, Button,InputNumber, Card, Space } from 'antd';
import toast from 'react-hot-toast';

function Lab3() {
    const onFinishFailed = (error:any)=>{
        console.log("lỗi", error);
        toast.error("vui lòng kiểm tra lại")
        
    }
  const onFinishLogin = (values: any) => {
    console.log("Dữ liệu Đăng nhập:", values);
    toast.success("Login thành công")
  };
const onFinish = (values:any)=>{
    console.log("dữ liệu sản phẩm", values);
    console.log("Dữ liệu Đăng nhập:", values);
    toast.success("thêm dữ liệu thành công")
    
}
  const onFinishRegister = (values: any) => {
    console.log("Dữ liệu Đăng ký:", values);
    console.log("Dữ liệu Đăng nhập:", values);
    toast.success("Register thành công")
  };

  return (
    <div style={{ padding: '40px', display: 'flex', justifyContent: 'center', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Space size="large" align="start" wrap>
        
        <Card title="Bài 1: Đăng Nhập" style={{ width: 400, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <Form name="login_form" onFinish={onFinishLogin} onFinishFailed={onFinishFailed} layout="vertical">
            <Form.Item 
              label="Email" 
              name="email"
              rules={[
                { required: true, message: "Vui lòng nhập email" },
              ]}
            >
              <Input placeholder="Nhập email của bạn" />
            </Form.Item>

            <Form.Item 
              label="Password" 
              name="password"
              rules={[
                { required: true, message: "Vui lòng nhập password" },
              ]}
            >
              <Input.Password placeholder="Nhập mật khẩu" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Login
              </Button>
            </Form.Item>
          </Form>
        </Card>
        <Card title="Bài 2: Đăng Ký" style={{ width: 450, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <Form name="register_form" onFinish={onFinishRegister} onFinishFailed={onFinishFailed} layout="vertical">
            <Form.Item 
              label="Name" 
              name="name"
              rules={[{ required: true, message: "Vui lòng nhập họ tên" }]}
            >
              <Input placeholder="Ví dụ: Nguyễn Văn A" />
            </Form.Item>

            <Form.Item 
              label="Email" 
              name="email"
              rules={[
                { required: true, message: "Vui lòng nhập email" },
                { type: 'email', message: "Email không đúng định dạng" } 
              ]}
            >
              <Input placeholder="Ví dụ: test@gmail.com" />
            </Form.Item>

            <Form.Item 
              label="Phone" 
              name="phone"
              rules={[{ required: true, message: "Vui lòng nhập số điện thoại" }]}
            >
              <Input placeholder="Nhập số điện thoại" />
            </Form.Item>

            <Form.Item 
              label="Password" 
              name="password"
              rules={[
                { required: true, message: "Vui lòng nhập mật khẩu" },
                { min: 6, message: "Mật khẩu tối thiểu 6 ký tự" } 
              ]}
            >
              <Input.Password placeholder="Tạo mật khẩu mới" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Register
              </Button>
            </Form.Item>
            
          </Form>
        </Card>
        <Card title="Bài 3: Thêm Sản Phẩm Mới" style={{ width: 400, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <Form 
          name="product_form" 
          onFinish={onFinish} 
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <Form.Item 
            label="Tên sản phẩm" 
            name="productName"
            rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm" }]}
          >
            <Input placeholder="Ví dụ: Điện thoại iPhone 15" />
          </Form.Item>

          <Form.Item 
            label="Giá (VNĐ)" 
            name="price"
            rules={[{ required: true, message: "Vui lòng nhập giá sản phẩm" }]}
          >
            <InputNumber 
              style={{ width: '100%' }} 
              min={0} // Giá không được âm
              placeholder="Nhập giá tiền" 
            />
          </Form.Item>

          <Form.Item 
            label="Số lượng" 
            name="quantity"
            rules={[{ required: true, message: "Vui lòng nhập số lượng" },
            ]}
          >
            <InputNumber 
              style={{ width: '100%' }} 
              min={1}
              placeholder="Nhập số lượng" 
            />
          </Form.Item>

          <Form.Item 
            label="Mô tả" 
            name="description"
          >
            <Input.TextArea rows={4} placeholder="Nhập mô tả chi tiết về sản phẩm..." />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>

      </Space>
    </div>
  );
}

export default Lab3;