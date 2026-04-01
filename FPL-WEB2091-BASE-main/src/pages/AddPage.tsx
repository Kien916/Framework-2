import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import axios from "axios";
interface Books{
  title:string,
  quantity:number,
  converImage:string,
  genre:string
}

function AddPage() {
  const {mutate:mutateBook} = useMutation({
  mutationFn: async (values:Books)=>{
    await axios.post("http://localhost:3000/books",values)
  }
})
const onFinish = async (values:Books)=>{
  mutateBook(values);
}
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Thêm mới</h1>

      <Form layout="vertical" className="space-y-6" onFinish={onFinish}>
        {/* Text input */}
        <Form.Item label="title" name="title">
          <Input placeholder="Nhập thông tin" />
        </Form.Item>
        <Form.Item label="quantity" name="tuantity">
          <Input placeholder="Nhập thông tin" />
        </Form.Item>
        <Form.Item label="coverImage" name="coverImage">
          <Input placeholder="Nhập thông tin" />
        </Form.Item>
        <Form.Item label="genre" name="genre">
          <Input placeholder="Nhập thông tin" />
        </Form.Item>

        {/* Submit button */}
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddPage;
