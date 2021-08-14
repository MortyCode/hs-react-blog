import React from 'react';
import { Layout ,Menu,Typography,Divider} from 'antd';
import 'antd/dist/antd.css';
import SidePage from './SidePage';
import ContextPage from './ContextPage';

import { FileTextOutlined, FieldTimeOutlined, HomeOutlined } from '@ant-design/icons';
const { Header, Sider,Footer, Content } = Layout;
const { SubMenu } = Menu;
const { Title,Text } = Typography;


class Home extends React.Component {

    state = {
        current: 'mail',
      };

    render() {
        const { current } = this.state;

        return (
            <Layout>

                <Sider style={{backgroundColor:"#fff" ,textAlign:"center",paddingLeft:'30px'}} >
                    <Title level={2} style={{lineHeight:2.2}} >26°C</Title>
                    <SidePage></SidePage>
                </Sider>
                
                <Layout style={{backgroundColor:"#f3f99d",display:'flex'}}> 
                    

                <Header style={{backgroundColor:"#fff",display:'flex' }} >

                    <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                        <Menu.Item key="mail" icon={<HomeOutlined />}>
                            首页
                        </Menu.Item>
                        <Menu.Item key="app" icon={<FileTextOutlined />}>
                             文章
                        </Menu.Item>
                        <Menu.Item key="ac" icon={<FieldTimeOutlined />}>
                             时间线
                        </Menu.Item>

                    </Menu>

                </Header>

                    <Content  style={{backgroundColor:"#fff",padding:'20px'}}>
                        <ContextPage></ContextPage>
                    </Content>

                    <Footer  style={{backgroundColor:"#fff",padding:'20px'}}>
                        <Divider />
                        <div style = {{textAlign:"center"}}>
                            河神❤️
                        </div>
                     </Footer>
                </Layout>
    

            </Layout>
      );        
    }

}

export default Home;
