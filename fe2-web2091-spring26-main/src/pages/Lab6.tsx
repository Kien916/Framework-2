import React, { useEffect } from 'react';
import { Form, Input, Button, Layout, Checkbox, Card, Row, Col } from 'antd';
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { Link, useNavigate, useParams } from 'react-router-dom';


const { Header, Content, Footer } = Layout;

export interface Story {
    id:number;
    title: string;
    author?: string;
    image?: string;
    active?: boolean;
    date?:string;
    description?: string;
}
function Lab6() {
    const {id} = useParams();
    const naviage = useNavigate();
    const queryClient = useQueryClient();
    const [storyForm] = Form.useForm();
    const {data} = useQuery({
        queryKey:["stories"],
        queryFn: async()=>{
            const res =await axios.get(`http://localhost:3000/stories/${id}`);
            return res.data
        }
    });
    useEffect(()=>{
        if(data){
            storyForm.setFieldsValue(data);
        }
    },[data]);

    const { mutate: mutateStory, isPending: isPendingStory } = useMutation({
        mutationFn: async (values: Story) => {
            await axios.put(`http://localhost:3000/stories/${id}`, values);
        },
        onError: () => toast.error("Lỗi API thêm truyện rồi!"),
        onSuccess: () => {
            toast.success("Thêm truyện thành công!");
            queryClient.invalidateQueries({queryKey:["stories"]});
            naviage('/lab5');

        }
    });

    const onFinishStory = async (values: Story) => {
        mutateStory(values);
    };
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ display: 'flex', alignItems: 'center', fontSize: '20px', fontWeight: 'bold', color: "white" }}>
                Header
            </Header>

            <Content style={{ padding: '40px 20px', backgroundColor: '#f0f2f5' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <Link to="/lab5">return lab5</Link>
                    <Row justify={'center'} gutter={[24, 24]}>

                        <Col xs={24} lg={14}>
                            <Card
                                title="📚Sửa Truyện"
                                bordered={false}
                                style={{ borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
                            >
                                <Form form={storyForm} layout="vertical" onFinish={onFinishStory}>
                                    <Row gutter={16}>
                                        <Col span={12}>
                                            <Form.Item
                                                label="Tên truyện (Title)"
                                                name="title"
                                                rules={[{ required: true, message: "Vui lòng nhập tên truyện" }]}
                                            >
                                                <Input placeholder="Nhập tên truyện..." />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item label="Tác giả (Author)" name="author">
                                                <Input placeholder="Tên tác giả..." />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Form.Item label="Link Ảnh (Image URL)" name="image">
                                        <Input placeholder="https://..." />
                                    </Form.Item>
                                    <Form.Item label="Date" name="date">
                                        <Input type="date" />
                                    </Form.Item>

                                    <Form.Item label="Mô tả (Description)" name="description">
                                        <Input.TextArea rows={4} placeholder="Nhập tóm tắt nội dung truyện..." />
                                    </Form.Item>

                                    <Form.Item label="Trạng thái" name="active" valuePropName="checked">
                                        <Checkbox>Kích hoạt (Active)</Checkbox>
                                    </Form.Item>

                                    <Button htmlType="submit" loading={isPendingStory} type="primary" size="large" block>
                                        Lưu Truyện
                                    </Button>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Content>

            <Footer style={{ textAlign: 'center', color: '#888' }}>
                Quản lý Truyện ©{new Date().getFullYear()} - kienkien@kien123.com
            </Footer>
        </Layout>
    );
}

export default Lab6;