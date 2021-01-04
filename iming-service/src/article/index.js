import { Table, Button, Space, Form, Input } from 'antd';
import { useState, useEffect } from 'react';
import Search from 'antd/lib/input/Search';
import { SearchOutlined } from '@ant-design/icons';
import './article.css'
import { Link } from 'react-router-dom';
import { getArticleList } from '../config/article.api';



function Article(props) {

    const [dataSource, setDataSource] = useState([]);
    const [form] = Form.useForm();

    useEffect(() => {
        getList();
    }, [])

    function getList() {
        getArticleList().then(res => {
            setDataSource(res.data.list);
        })
    }

    const edit = (text, record) => {
        const { id } = text;
        props.history.push('/manager/addArticle/' + id);
    }
    

    return (
        <div>
            <div className='search-bar'>
                <Form
                    layout='inline'
                    form={form}
                    initialValues={{
                        layout: 'horizontal',
                    }}
                >
                    <Form.Item>
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary"><SearchOutlined />Submit</Button>
                    </Form.Item>
                    <Button type='primary'><Link to='/manager/addArticle'>新增文章</Link></Button>
                </Form>

            </div>
            <Table dataSource={dataSource} columns={[
                    {
                        title: '文章ID',
                        dataIndex: 'id',
                        key: 'id',
                    },
                    {
                        title: '文章标题',
                        dataIndex: 'title',
                        key: 'title',
                    },
                    {
                        title: '文章摘要',
                        dataIndex: 'keyword',
                        key: 'keyword',
                    },
                    {
                        title: '文章分类',
                        dataIndex: 'typeName',
                        key: 'typeName',
                    },
                    {
                        title: '文章可查看次数',
                        dataIndex: 'viewCount',
                        key: 'viewCount',
                    },
                    {
                        title: '创建时间',
                        dataIndex: 'addTime',
                        key: 'addTime',
                    },
                    {
                        title: '操作',
                        key: 'action',
                        render: (text, record) => {
                            return (
                                <Space size="middle">
                                    <a onClick={() => {edit(text, record)}}>修改</a>
                                    <a>删除</a>
                                </Space>
                            )
                        }
                    }
                ]
            } loading={false} size='middle' bordered/>
        </div>
    )
}

export default Article;
