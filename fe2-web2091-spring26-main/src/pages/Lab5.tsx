import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Image, Popconfirm, Table } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
function Lab5() {
   const { data, isLoading, isError } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/stories");
      return res.data;
    },
  });

  const qc = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (id: number) => {
      await axios.delete(`http://localhost:3000/stories/${id}`);
    },
    onSuccess: () => {
      toast.success("Xoa truyen thanh cong");
      qc.invalidateQueries({ queryKey: ["stories"] });
    },
  });
    const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      render: (url: string) => <Image src={url} width={100} />,
    },
    {
      title: "Tên truyện",
      dataIndex: "title",
    },
    {
      title: "Tác giả",
      dataIndex: "author",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
    },
    {
  title: "Created At",
  dataIndex: "createdAt",
  render: (date: string) => new Date(date).toLocaleDateString("vi-VN")
},{
      title: "Action",
      render: (_: any, record: any) => (
        <Popconfirm
          title="Delete the story"
          description="Are you sure to delete this story?"
          okText="Yes"
          cancelText="No"
          onConfirm={() => mutate(record.id)}
        >
          <Button danger>Delete</Button>
        </Popconfirm>
      ),
    },
  ];

  if (isError) {
    return <div>Co loi xay ra</div>;
  }
  return <Table columns={columns} dataSource={data} loading={isLoading} />;
}
export default Lab5