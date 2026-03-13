import React from 'react'
const {Header, Sider,Content } = Layout
import { Layout,Table } from 'antd'
import { Link } from 'react-router-dom';


function Dashboard() {
    const columns = [
        { title:"ID",dataIndex:"id"},
        { title:"Name",dataIndex:"name"},
        { title:"Age",dataIndex:"age"},
        { title:"Major",dataIndex:"major"},
    ];
    const data = [
        {key:1,id:1,name:"kien",age:"19",major:"k1" },
        {key:2,id:2,name:"kien2",age:"20",major:"k2" },
        {key:3,id:3,name:"kien3",age:"21",major:"k3" },
        {key:4,id:4,name:"kien4",age:"22",major:"k4" },
        {key:5,id:5,name:"kien5",age:"23",major:"k5" },

    ];
  return (


        <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ color: "white", backgroundColor: "#001529", fontSize: "20px" }}>
        My Dashboard
      </Header>
      
      <Layout>
        <Sider width={200} style={{ background: "#fff" }}>
          <div style={{ padding: "20px", fontWeight: "bold" }}>
            <Link to="/lab3">Lab3</Link>
          </div>
          <div style={{ padding: "20px", fontWeight: "bold" }}>
            <Link to="/tablelab2">Lab2</Link>
          </div>
        </Sider>
        <Content style={{ padding: "24px", backgroundColor: "#f5f5f5" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            Đây là nội dung chính của Dashboard.
            <Table columns={columns} dataSource={data}/>
          </div>
          
        </Content>
      </Layout>
      
    </Layout>

  )
}

export default Dashboard