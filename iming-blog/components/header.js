import { Menu, Row, Col, Input, Popover } from 'antd';
import styles from '../styles/components/header.module.css';
import { SearchOutlined, BgColorsOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import Link from 'next/link'

const { SubMenu } = Menu;
const { Search } = Input;
function Header(props) {
    const router = useRouter();

    const searchHandle = (value, event) => {
        props.onOK(value)
    }
    return (
        <div>
            <Row
                className={styles.header}
                justify='center'
                align='middle'
            >
                <Col span={2} className={styles.logo}>IMING</Col>
                <Col span={6} className={styles.logo}>
                    <Search
                        className={styles.searchInput}
                        onSearch={searchHandle}
                    />
                </Col>
                <Col span={10}>
                    <Menu
                        mode='horizontal'
                        className={styles.menu}
                        selectedKeys={[router.pathname]}
                        defaultSelectedKeys='/'
                        >
                        <Menu.Item key='/'>
                            <Link href='/'>首页</Link>
                        </Menu.Item>
                        <Menu.Item key='/message'>
                            <Link href='/message'>留言板</Link>
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col span={1}>
                    
                    {/* <Popover
                        placement="bottom"
                        trigger="click"
                        content={
                            <div>
                                <p><a>黑色主题</a></p>
                                <p><a>明亮主题</a></p>
                            </div>
                        }
                        >
                        <BgColorsOutlined style={{ fontSize: '1.5rem' }}/>
                    </Popover> */}
                </Col>

            </Row>
        </div>
    )
}

export default Header;