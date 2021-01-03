

import './index.css'
import WE from 'wangeditor'
import { useState, useEffect } from 'react'
import { Input, Button, Select, Row, Col, message } from 'antd';
import { getArticleType, addArticle } from '../../config/article.api';
const { Option } = Select;

let editor = null;;

function AddArticle() {

    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [typeList, setTypeList] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [content, setContent] = useState('');


    useEffect(() => {
        editor = new WE("#editor")
        
        editor.config.onchange = (newHtml) => {
            setContent(newHtml)
        }
        editor.config.height = 500;
        editor.create();
        editor.txt.html(content);

        getType();
        return () => {
            editor.destroy()
        }
    }, [])

    const getType = () => {
        getArticleType().then(res => {
            setTypeList(res.data.list)
        })
    }

    const submitAtrilce = () => {
        if (title && content && keyword) {
            const params = {
                title,
                content,
                typeId: type,
                keyword
            }
            addArticle(params).then(res => {
                setTitle('');
                setContent('');
                editor.txt.html('');
                setKeyword('');
                setType('');
            })

        } else {
            message.error('请完善文章内容呢！')
        }
    }
    const typeChange = (e) => {
        console.log(e)
    }

    const selectType = (data) => {
        setType(data)
    }

    const titleChange = (data) => {
        console.log('titleChange', data.target.value)
        setTitle(data.target.value)
    }
    const keywordChange = (data) => {
        console.log('keywordChange', data.target.value)
        setKeyword(data.target.value)
    } 

    return (
        <div>
            <Input value={title} style={{ marginBottom: '12px' }} placeholder='请输入标题' onChange={titleChange}/>
            <div id='editor'></div>
            <Row justify='start'>
                <Col span={8}>
                    <Input value={keyword} style={{ margin: '12px 0' }} placeholder='关键字' onChange={keywordChange}/>
                </Col>
                <Col span={6}>
                    <Select
                        placeholder='分类'
                        style={{ margin: '12px', width: '120px' }}
                        onChange={typeChange}
                        onSelect={selectType}
                    >
                        {
                            typeList.map(res => {
                                return (
                                    <Option
                                        value={res.id}
                                        key={res.id}
                                    >{res.typeName}</Option>
                                )
                            })
                        }
                        
                    </Select>
                </Col>
            </Row>
            
            <div className='buttonGroup'>
                <Button className='btnItem'>存为草稿</Button>
                <Button className='btnItem' type='primary' onClick={submitAtrilce}>提交</Button>
            </div>
        </div>
    )
}

export default AddArticle;