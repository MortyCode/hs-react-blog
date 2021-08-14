import React from 'react';
import { Layout ,Menu,Typography,Divider, Switch} from 'antd';
import 'antd/dist/antd.css';
import SidePage from './SidePage';
import ContextPage from './ContextPage';
import BlogPage from './BlogPage';
import BlogIndex from './BlogIndex';

import { FileTextOutlined, FieldTimeOutlined, HomeOutlined } from '@ant-design/icons';
const { Header, Sider,Footer, Content } = Layout;
const { SubMenu } = Menu;
const { Title,Text } = Typography;


class Home extends React.Component {

    state = {
        currentPage: 'home',
    };

    selectMenu =(e)=>{
        this.setState({ currentPage: e.key });
    }

    render() {
        const { currentPage } = this.state;

        return (
            <Layout>
                <Sider style={{backgroundColor:"#fff" ,textAlign:"center",paddingLeft:'30px'}} >
                    <Title level={2} style={{lineHeight:2.2}} >26°C</Title>
                    <SidePage></SidePage>
                </Sider>
                
                <Layout style={{backgroundColor:"#f3f99d",display:'flex'}}> 

                    <Header style={{backgroundColor:"#fff",display:'flex' }} >

                        <Menu onClick={this.selectMenu} selectedKeys={[currentPage]} mode="horizontal">
                            <Menu.Item key="home" icon={<HomeOutlined />}>
                                首页
                            </Menu.Item>
                            <Menu.Item key="blog" icon={<FileTextOutlined />}>
                                文章
                            </Menu.Item>
                            <Menu.Item key="index" icon={<FieldTimeOutlined />}>
                                目录
                            </Menu.Item>

                        </Menu>

                    </Header>

                    <Content  style={{backgroundColor:"#fff",padding:'20px',minHeight: "600px"}}>
                        {currentPage=="home"?<ContextPage/>:null}
                        {currentPage=="blog"?<BlogPage/>:null}
                        {currentPage=="index"?<BlogIndex/>:null}
                    </Content>

                    <Layout > 
                    <Footer  style={{backgroundColor:"#fff",padding:'20px'}}>
                            <Divider />
                            <div style = {{textAlign:"center"}}>
                                河神❤️
                            </div>
                    </Footer>
                </Layout>
                </Layout>


            </Layout>
      );        
    }

}

export default Home;
