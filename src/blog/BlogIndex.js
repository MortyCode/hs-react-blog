import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

function BlogIndex() {

    return (
        <div>
            <Timeline>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="red">
                Technical testing 2015-09-01
                </Timeline.Item>
                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
            </Timeline>
        </div>
    );

}
export default BlogIndex;
