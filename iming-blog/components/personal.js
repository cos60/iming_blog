import styles from '../styles/components/personal.module.css'
import { Avatar, Row, Col } from 'antd';
import { UserOutlined, QqOutlined, WechatFilled, MailFilled } from '@ant-design/icons';
function Personal(props) {
    return (
        <div className={styles.personal}>
             <div className={styles.background}>
                <div className={styles.avatarInfo}>
                    <Avatar
                        className={styles.avatar}
                        size={64}
                        src='https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1486411910,1138523178&fm=111&gp=0.jpg'/>
                </div>
             </div>
            <h2 style={{ textAlign: 'center' }}>{props.webInfo.personalName}</h2>
             <div className={styles.description}>{props.webInfo.personalIntro}</div>
             {/* <Row justify='center'>
                 <Col span={4}><QqOutlined style={{ fontSize: '1.5rem' }}/></Col>
                 <Col span={4}><WechatFilled style={{ fontSize: '1.5rem' }} /></Col>
                 <Col span={4}><MailFilled style={{ fontSize: '1.5rem' }} /></Col>
             </Row> */}
        </div>
    )
}
export default Personal;