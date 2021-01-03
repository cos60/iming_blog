import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Category from '../components/category';
import { Menu, Row, Col, Divider, Affix } from 'antd';
import styles from '../styles/Home.module.css'
import Personal from '../components/personal';
import { UnorderedListOutlined, FireOutlined, MessageOutlined } from '@ant-design/icons'
import { getArticleList, getTypeList, getWebBaseInfo } from '../config/api/home';
import Link from 'next/link'
function Home() {

    const [articleList, setArticleList] = useState([]);
    const [webInfo, setWebInfo] = useState({});

    useEffect(() => {
        getList(0, 20)
        getTypeList().then(res => {
            console.log('res', res)
        })
        getWebBase();
    }, [])

    const getList = (page, pageSize, title = '', typeId) => {
        getArticleList({page, pageSize, title, typeId}).then(res => {
            setArticleList(res.data.data.list)
        })
    }

    //跳转到列表页
    const handleClick = (e)=>{
        if(e.key==0){
            Router.push('/index')
        }else{
            Router.push('/list?id='+e.key)
        }
    }
    const searchHandle = (value) => {
        getList(0, 20, value);
    }

    const getType = (value) => {
        getList(0, 20, '', value)
    }

    const getWebBase = () => {
        getWebBaseInfo().then(res => {
            setWebInfo(res.data.data)
        })
    }

    return (
        <div>
            <Head>
                <title>IMING BLOG</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header onOK={searchHandle}/>

            <Row
                theme='dark'
                justify='center'
                align='top'
            >
                <Col span={14} >
                    <div className={styles.container}>

                        <h5>最新文章</h5>
                        <Divider style={{margin: '1rem 0'}}/>

                        {
                            articleList.map(item => {
                                return (
                                    <div className={styles.contentItem} key={item.id}>
                                        <Row>
                                            <Col>
                                                <h2 className={styles.contentTitle}>
                                                    <Link href={`details/${item.id}`}>
                                                        { item.title }
                                                    </Link>
                                                </h2>
                                                <p className={styles.contentDescr}>{item.intro}</p>
                                                <div className={styles.contentIcon}>
                                                    {/* <span className={styles.icon}> <UnorderedListOutlined />123123 </span> */}
                                                    <span className={styles.icon}> <FireOutlined />{item.viewCount} </span>
                                                    {/* <span className={styles.icon}> <MessageOutlined />123123 </span> */}
                                                </div>
                                            </Col>
                                        </Row>
                                        <Divider style={{margin: '1rem 0'}}/>
                                    </div>
                                )
                            })
                        }

                    </div>
                </Col>
                <Col span={4} >
                    <Affix offsetTop={10}>
                        <Personal webInfo={webInfo}/>
                        <Category getType={getType}/>
                    </Affix>
                    
                </Col>

            </Row>
            <Footer />
        </div>
    )
}
export default Home