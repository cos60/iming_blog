import { Table, Button, Space, Form, Input } from 'antd';
import { useState, useEffect } from 'react';
import Search from 'antd/lib/input/Search';
import { SearchOutlined } from '@ant-design/icons';
import './article.css'
import { Link } from 'react-router-dom';
import { getArticleList } from '../config/article.api';

const data = [
    {
        title: '我喜欢这个世界',
        content: '我非常喜欢这个世界，但是生命有限',
        viewCount: 123,
        category: '逼逼叨',
        createTime: '2020-11-11',
    }
]

const columnsData = [
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
                    <a>修改</a>
                    <a>删除</a>
                </Space>
            )
        }
    }
];


function Article() {

    const [dataSource, setDataSource] = useState([]);
    const [columns, setColumns] = useState(columnsData);
    const [form] = Form.useForm();

    useEffect(() => {
        getList();
    }, [])

    function getList() {
        getArticleList().then(res => {
            setDataSource(res.data.list);
        })
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
                    <Button type='primary'><Link to='/addArticle'>新增文章</Link></Button>
                </Form>
                
            

            </div>
            <Table dataSource={dataSource} columns={columns} loading={false} size='middle' bordered/>
        </div>
    )
}

export default Article;
