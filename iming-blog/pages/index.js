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
function Home({ posts }) {
    const [articleList, setArticleList] = useState(posts.data.list || []);
    const [webInfo, setWebInfo] = useState({});

    useEffect(() => {
        getTypeList().then(res => {
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
                <title>杨明戊,IMING BLOG</title>
                <meta name='description' content='杨明戊个人网站，艾明博客,'/>
                <meta property="og:description" content='杨明戊个人网站，艾明博客'/>
                <meta name='keywords' content='杨明戊 杨明戊个人网站 艾明博客'/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header onOK={searchHandle}/>

            <Row
                theme='dark'
                justify='center'
                align='top'
            >
                <Col
                    xxl={16}
                    xl={15}
                    lg={16}
                    md={16}
                >
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
                                                    <Link href={`details/${item.id}`} >
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
                <Col
                    xxl={4}
                    xl={5}
                    lg={6}
                    md={6}
                    xs={0}
                >
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

export async function getStaticProps() {
    const posts = await getArticleList({ page: 0, pageSize: 20 });
    return {
        props: {
            posts: posts.data
        },
        revalidate: 1, // In seconds
    }
    
}

export default Home;
