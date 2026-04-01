import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Image,Button, Popconfirm, Table } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

function ListPage() {
  const {data} = useQuery({
    queryKey:['getAllBooks'],
    queryFn: async () =>{
      const res = await axios.get("http://localhost:3000/books");
      return res.data;
    }
  });
  const columns = [
    {title: "title", dataIndex:"title"},
    {title:"Quantity",dataIndex:"quantity"},
    {title:"CoverImage",dataIndex:"coverImage",
      // render: (src:string) =>{<Image src={src} height={100} />}
    },
    {title:"Genre",dataIndex:"genre"},
    {title:"Action", 
      redner:(_:any, record:any)=>(
        <>
        <Popconfirm
        title="xoá" description="chac chan muon xoa?" okText="có" cancelText="không"
        >
          <Button>xoá</Button>
        </Popconfirm>
        <Button type="primary">
          <Link to={`/edit/${record.id}`}>sửa</Link>
        </Button>
        </>
      )
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách</h1>

      <div className="overflow-x-auto">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
}
  
export default ListPage;
