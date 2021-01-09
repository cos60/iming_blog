import Head from 'next/head';
import Header from '../../components/header';
import { Row, Col, Input, Button } from 'antd';
const { TextArea } = Input;
function Programer() {
    return (
        <div>
            <Head>
                <title>留言板</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Row
                justify='center'
            >
                <Col span={14}>
                    <TextArea
                        rows={8}
                        style={{
                            borderRadius: '8px'
                        }}
                    />
                    <Button type='primary'>提交</Button>
                </Col>
            </Row>
        </div>
    )
}

export default Programer;