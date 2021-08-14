
import { Row, Col, Avatar ,Card} from 'antd';

import 'highlight.js/styles/androidstudio.css'  //代码块样式


const { Meta } = Card;


function SidePage() {

    return (
        // <Row style={{textAlign:"center"}}>
        //     <Col span={24} >
        //         <Avatar size={80} src="https://z3.ax1x.com/2021/05/30/2VQ8M9.jpg" ></Avatar>
        //     </Col>

        //     <Col>
        //         河神
        //     </Col>
        // </Row>

            <Card
            hoverable
            cover={<img alt="example" src="https://z3.ax1x.com/2021/05/30/2VQ8M9.jpg" />}>

                <Meta title="河神博客" description="www.instagram.com" />
            </Card>

    );

}
export default SidePage;
