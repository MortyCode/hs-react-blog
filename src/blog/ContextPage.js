import { List, Avatar,Layout } from 'antd';




const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
  ];
  


function ContextPage() {

    return (
        <div>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a href="">{item.title}</a>}
                    description="博客的前几个字简介"
                    />
                </List.Item>
                )}
            />

        </div>
    );

}
export default ContextPage;
