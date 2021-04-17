import { Menu, Row, Col, Input, Popover, Dropdown} from 'antd';
import styles from '../styles/components/header.module.css';
import { SearchOutlined, BgColorsOutlined, MenuFoldOutlined, DownOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { getTypeList } from '../config/api/home';
import Link from 'next/link'

import { connect } from 'react-redux'


const { SubMenu } = Menu;
const { Search } = Input;

const stateToProps = (state) => {
    return {...state};
}
function Header(props) {
    const router = useRouter();

    const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          </Menu.Item>
          <Menu.Item icon={<DownOutlined />} disabled>
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item
            </a>
          </Menu.Item>
          <Menu.Item disabled>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              3rd menu item
            </a>
          </Menu.Item>
          <Menu.Item danger>a danger item</Menu.Item>
        </Menu>
      );

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
                {/* <Col
                    xxl={0}
                    xl={0}
                    lg={0}
                    md={0}
                    sm={0}
                    xs = {2}
                >
                    <Dropdown overlay={menu}>
                        <MenuFoldOutlined />
                    </Dropdown>,
                    
                </Col> */}
                <Col
                    xxl={2}
                    xl={2}
                    lg={2}
                    md={3}
                    sm={6}
                    xs={0}
                    className={styles.logo}
                >IMING</Col>
                <Col
                    xxl={20}
                    xl={20}
                    lg={11}
                    md={11}
                    sm={16}
                    className={styles.logo}
                >
                    <Search
                        className={styles.searchInput}
                        onSearch={searchHandle}
                    />
                </Col>
                {/* <Col
                    xxl={10}
                    xl={6}
                    lg={8}
                    md={9}
                    sm={}
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
                </Col> */}

            </Row>
        </div>
    )
}


// export default Header;
export default connect(stateToProps,null)(Header)