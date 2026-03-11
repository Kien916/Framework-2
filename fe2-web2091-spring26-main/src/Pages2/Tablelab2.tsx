import { Table } from 'antd';
function Tablelab2() {
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
    <Table columns={columns} dataSource={data}/>
  )
}

export default Tablelab2