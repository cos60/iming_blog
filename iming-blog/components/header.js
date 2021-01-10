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
                <Col
                    xxl={2}
                    xl={2}
                    lg={3}
                    md={3}
                    className={styles.logo}
                >IMING</Col>
                <Col
                    xxl={6}
                    xl={10}
                    lg={11}
                    md={11}
                    className={styles.logo}
                >
                    <Search
                        className={styles.searchInput}
                        onSearch={searchHandle}
                    />
                </Col>
                <Col
                    xxl={10}
                    xl={6}
                    lg={8}
                    md={9}
                >
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

            </Row>
        </div>
    )
}

export default Header;