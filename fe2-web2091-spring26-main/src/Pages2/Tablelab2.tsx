import { Table, Image,Button,Space } from 'antd';
function Tablelab2() {
  const columns = [
    { title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Age", dataIndex: "age" },
    { title: "Major", dataIndex: "major" },
    {
      title: "Avatar", dataIndex: "avatar",
      render: (avatar: string) => <Image width={50} src={avatar} />
    },
    {
      title: "Status", dataIndex: "status", render: (status: any) => (
        <span style={{ color: status === "active" ? "green" : "red" }}>
          {status}
        </span>
      ),
    },
    {
  title: "Action",
  key: "action",
  render: (_: any, record: any) => (
    <Space size="middle"> 
      <Button 
        type="primary" 
        onClick={() => alert(`Bạn đang bấm Sửa người có ID là: ${record.id}`)}
      >
        Edit
      </Button>
      <Button 
        type="primary" 
        danger 
        onClick={() => alert(`Bạn đang bấm Xóa người có ID là: ${record.id}`)}
      >
        Delete
      </Button>
    </Space>
  ),
},
  ];
  const data = [
    { key: 1, id: 1, name: "kien", age: "19", major: "k1", avatar: "https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg", status: "active" },
    { key: 2, id: 2, name: "kien2", age: "20", major: "k2", avatar: "https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg", status: "inactive" },
    { key: 3, id: 3, name: "kien3", age: "21", major: "k3", avatar: "https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg", status: "active" },
    { key: 4, id: 4, name: "kien4", age: "22", major: "k4", avatar: "https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg", status: "inactive" },
    { key: 5, id: 5, name: "kien5", age: "23", major: "k5", avatar: "https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg", status: "inactive" },

  ];
  const columns2 = [
    { title: "ID", dataIndex: "id" },
    { title: "ProductName", dataIndex: "productname" },
    { title: "Price", dataIndex: "price" },
    { title: "Category", dataIndex: "category" },
  ];
  const data2 = [
    { key: 1, id: 1, productname: "kien", price: 19, category: "k1"},
    { key: 2, id: 2, productname: "kien2", price: 20, category: "k12"},
    { key: 3, id: 3, productname: "kien3", price: 21, category: "k13"},
    { key: 4, id: 4, productname: "kien4", price: 22, category: "k14"},
    { key: 5, id: 5, productname: "kien5", price: 23, category: "k15"},
    { key: 6, id: 6, productname: "kien6", price: 24, category: "k16"},
  ]
  return (
    <> 
    <Table columns={columns} dataSource={data} pagination={{ pageSize: 2 }} />
    <br/> 
    <Table columns={columns2} dataSource={data2} pagination={{ pageSize: 2 }} />
  </> 
  )
}

export default Tablelab2