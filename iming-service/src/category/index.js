import { Table, Button, Space, Form, Input, Modal } from 'antd';
import { useState, useEffect } from 'react';
import Search from 'antd/lib/input/Search';
import { SearchOutlined } from '@ant-design/icons';
import './category.css'
import { Link } from 'react-router-dom';
import { addType, getArticleList, getArticleType } from '../config/category.api';

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
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '分类名称',
        dataIndex: 'typeName',
        key: 'typeName',
    },
    {
        title: '排序',
        dataIndex: 'typeOrder',
        key: 'typeOrder',
    },
    {
        title: '添加时间',
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


function Category() {

    const [dataSource, setDataSource] = useState([]);
    const [columns, setColumns] = useState(columnsData);
    const [form] = Form.useForm();
    const [addTypeForm] = Form.useForm();

    useEffect(() => {
        getList();
    }, [])

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
    //  
        const params = addTypeForm.getFieldValue();
        addType(params).then(res => {
            setIsModalVisible(false);
            getList();
        })
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    function getList() {
        getArticleType().then(res => {
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
                        <Button type="primary"><SearchOutlined />8</Button>
                    </Form.Item>
                    <Button type='primary' onClick={showModal}>新增分类</Button>
                </Form>
                
            

            </div>
            <Table dataSource={dataSource} columns={columns} loading={false} size='middle' bordered/>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    layout='vertical'
                    form={addTypeForm}
                >
                    <Form.Item name='typeName'>
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item name='typeOrder'>
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default Category;
