import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button, Breadcrumb } from 'antd';
import {  Route, Link } from 'react-router-dom';
import AddArticle from '../article/addAriticle/index';
import Category from '../category/index';
import ArticleList from '../article/index';
import './index.css'
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

function Home() {

    const [ collapsed, setCollapsed ] = useState(false)

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div>
            <Layout style={{minHeight: '100vh'}}>
                <Header style={{color: '#fff'}}>IMING-BLOG</Header>
                <Layout>
                    <Sider>
                        <Menu
                            mode="inline"
                            theme="dark"
                            inlineCollapsed={collapsed}
                            style={{height: '100%'}}
                            >
                            <Menu.Item key="1" icon={<PieChartOutlined />}>
                                <Link to='/'>网站情况 </Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<PieChartOutlined />}>
                                <Link to='/articleList'>文章管理</Link>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<DesktopOutlined />}>
                            <Link to='/category'>分类管理</Link>
                            </Menu.Item>
                            <Menu.Item key="4" icon={<ContainerOutlined />}>
                                菜单管理
                            </Menu.Item>
                            <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                                <Menu.Item key="5">Option 5</Menu.Item>
                                <Menu.Item key="6">Option 6</Menu.Item>
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content className='container'>
                        <Breadcrumb style={{
                            height: '30px',
                            lineHeight: '30px',
                            background: "#fff",
                            margin: '10px 0',
                            borderRadius: '5px',
                            paddingLeft: '5px'
                        }}
                        >
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            {/* <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                        </Breadcrumb>
                        <div style={{
                            padding: 24,
                            background: '#fff',
                            minHeight: 360,
                            borderRadius: '5px'
                        }}>
                            <div>
                                <Route path="/articleList/" exact component={ArticleList} />
                                <Route path="/addArticle/" component={AddArticle} />
                                <Route path="/category/" component={Category} />
                            </div>
                        </div>



                    </Content>
                </Layout>
                {/* <Footer>Footer</Footer> */}
            </Layout>
        </div>
    )
}

export default Home;


