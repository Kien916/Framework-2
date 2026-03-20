import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Image, Popconfirm, Table } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
export default function StoryList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getAllStories"],
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
      qc.invalidateQueries({ queryKey: ["getAllStories"] });
    },
  });
  const columns = [
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
      title: "Hình ảnh",
      dataIndex: "image",
      render: (src: string) => <Image src={src} height={100} />,
    },
    {
      title: "Ngày tạo",
      dataIndex: "date",
      render: (date: string) => date ? new Date(date).toLocaleDateString('en-GB') : "-",
    },
    {
        title: "Action",
        render: (_:any, record: any) => (
            <Popconfirm
          title="Delete the story"
          description="Are you sure to delete this story?"
          okText="Yes"
          cancelText="No"
          onConfirm={() => mutate(record.id)}
        >
          <Button danger>Delete</Button>
          <Button>
            <Link to={`/lab6/${record.id}`}>Edit</Link>
          </Button>
        </Popconfirm>
        )
    }
  ];

  if (isError) {
    return <div>Có lỗi xảy ra</div>;
  }
  return <Table columns={columns} dataSource={data} loading={isLoading} pagination={{pageSize:5}} />;

 
}