
import {Row, Col} from 'antd';
import Head from 'next/head';
import Header from '../../components/header';
import Footer from '../../components/footer';
import styles from '../../styles/pages/details.module.css'
import { CalendarOutlined, FireOutlined, MessageOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getArticleDetail, getArticleList } from '../../config/api/home';
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript);
 
function Details(props) {
    const { postId } = props;

    const [article, setArticle] = useState({});
    
    useEffect(() => {
        getArticleDetail({ id: postId }).then(res => {
            setArticle(res.data.data);
            setTimeout(() => {
                document.querySelectorAll("pre code").forEach(block => {
                    try{hljs.highlightBlock(block);}
                    catch(e){console.log(e);}
                });
            });
        });

    }, []);
    return (
        <div>
            <Head>
                <title>{article.title + article.keyword}</title>
                <meta name='description' content={article.intro}/>
                <meta property="og:description" content={article.intro}/>
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
export async function getStaticPaths() {
    
    const posts = await getArticleList({ page: -1 }).then();
    
    const { list } = posts.data.data;
    const paths = list.map(res => {
        return { params: { id: res.id + '' }}
    })
    return {
        paths,
        fallback: true,
    }
}

export async function getStaticProps({params}) {

    return {
        props: {
            postId: params.id 
        },
        revalidate: 1, // In seconds
    }
    
}
export default Details;