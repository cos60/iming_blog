
import {Row, Col} from 'antd';
import Head from 'next/head';
import Header from '../../components/header';
import Footer from '../../components/footer';
import styles from '../../styles/pages/details.module.css'
import { CalendarOutlined, FireOutlined, MessageOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getArticleDetail } from '../../config/api/home';
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript);
 
function Details(props) {

    const [article, setArticle] = useState({});
    

    const router = useRouter()
    const { id } = router.query
    useEffect(() => {
        getArticleDetail({id}).then(res => {
            setArticle(res.data.data);
            
        })
        setTimeout(() => {
            document.querySelectorAll("pre code").forEach(block => {
                try{hljs.highlightBlock(block);}
                catch(e){console.log(e);}
            });
        }, 1000);
    }, [])
    return (
        <div>
            <Head>
                <title>{article.title}</title>
                <meta name='description' content={article.intro}/>
                <meta name='keywords' content={article.keyword}/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Row justify='center'>
                <Col span={18}>

                    <div className={styles.container}>
                        <h2 style={{ textAlign: 'center' }}> {article.title} </h2>
                        <div className={styles.contentIcon}>
                            {/* <span className={styles.icon}> <CalendarOutlined />2020-10-10 </span> */}
                            <span className={styles.icon}> <FireOutlined />{article.viewCount}</span>
                        </div>

                        <div
                            className='iming_code'
                            dangerouslySetInnerHTML = {{__html: article.content}}
                        >
                        </div>
                    </div>

                </Col>
            </Row>
            <Footer />
        </div>
    )
}

export default Details;