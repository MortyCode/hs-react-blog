
import ReactMarkdown from 'react-markdown'
import {  Box } from 'react-desktop/macOs';

import 'highlight.js/styles/androidstudio.css'  //代码块样式

function BlogPage() {

    return (
        <div>
            <Box>
                <ReactMarkdown>
                    # Hello, *world*!
                </ReactMarkdown>
            </Box>

        </div>
    );

}
export default BlogPage;
