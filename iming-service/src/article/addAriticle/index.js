

import './index.css'
import WE from 'wangeditor'
import { useState, useEffect } from 'react'
import { Input, Button, Select, Row, Col, message } from 'antd';
import { getArticleType, addArticle, editArticle, getArticleDetail } from '../../config/article.api';
const { Option } = Select;
const { TextArea } = Input;

let editor = null;;

function AddArticle(props) {

    const [title, setTitle] = useState('');
    const [intro, setIntro] = useState('');
    const [type, setType] = useState('');
    const [typeList, setTypeList] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [content, setContent] = useState('');
    const [articleId, setArticleId] = useState(null);


    useEffect(() => {

        editor = new WE("#editor")
        
        editor.config.onchange = (newHtml) => {
            setContent(newHtml)
        }
        editor.config.height = 500;
        editor.create();
        editor.txt.html(content);

        getType();
        const { id } = props.match.params;
        if (id) {
            getArticle(id)
        }
        return () => {
            editor.destroy()
        }
    }, [])

    const getType = () => {
        getArticleType().then(res => {
            setTypeList(res.data.list)
        })
    }

    const getArticle = (id) => {
        getArticleDetail(id).then(res => {
            const { id, content, title, intro, keyword, typeId } = res.data.data;
            setTitle(title);
            setType(typeId);
            setContent(content);
            editor.txt.html(content);
            setKeyword(keyword);
            setArticleId(id);
            setIntro(intro);
        })
    }

    const submitAtrilce = () => {
        if (title && content && keyword) {
            const params = {
                title,
                content,
                typeId: type,
                keyword,
                intro
            }
            if (articleId) {
                editArticle({id: articleId, ...params }).then(res => {
                    setTitle('');
                    setContent('');
                    editor.txt.html('');
                    setKeyword('');
                    setType('');
                    setIntro('')
                    setArticleId(null);
                })
            } else {
                addArticle(params).then(res => {
                    setTitle('');
                    setContent('');
                    editor.txt.html('');
                    setKeyword('');
                    setType('');
                    setIntro('')
                })
            }
            

        } else {
            message.error('请完善文章内容呢！')
        }
    }


    const selectType = (data) => {
        setType(data)
    }

    const titleChange = (data) => {
        setTitle(data.target.value)
    }
    const keywordChange = (data) => {
        setKeyword(data.target.value)
    }
    const introChange = (data) => {
        setIntro(data.target.value)
    }

    return (
        <div>
            <Input value={title} style={{ marginBottom: '12px' }} placeholder='请输入标题' onChange={titleChange}/>
            <TextArea value={intro} style={{ marginBottom: '12px' }} placeholder='请输入描述' onChange={introChange}/>
            <div id='editor'></div>
            <Row justify='start'>
                <Col span={8}>
                    <Input value={keyword} style={{ margin: '12px 0' }} placeholder='关键字' onChange={keywordChange}/>
                </Col>
                <Col span={6}>
                    <Select
                        placeholder='分类'
                        style={{ margin: '12px', width: '120px' }}
                        onSelect={selectType}
                        value={type}
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