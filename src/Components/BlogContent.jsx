import { useLoaderData } from "react-router-dom";
import generalImage from '../assets/404.jpg';
import Markdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import PropTypes from 'prop-types';

const BlogContent = () => {
    const blog = useLoaderData();    
    const {title, body_html, cover_image, published_at, tags, url} = blog;    
    return (
        <div>
            <div className="mx-auto group transition border-2 p-2 hover:no-underline 
            focus:no-underline dark:dark:bg-gray-900">
                <img role="presentation" className="object-cover w-full rounded h-64 dark:dark:bg-gray-500"
                    src={cover_image || generalImage} />
                <div className="p-6 space-y-2">
                    <div className="flex flex-wrap py-6 gap-2 font-bold border-t border-dashed dark:border-gray-600">
                        {
                            tags.map(tag => <a key={tag} rel="noopener noreferrer" href="#" 
                            className="px-3 py-1 rounded-sm hover:underline 
                            dark:bg-violet-600 dark:text-gray-50">#{tag}</a>)
                        }
                        
                    </div> 
                    <a href={url} target="_blank" className="text-2xl font-semibold group-hover:underline group-focus:underline">
                        {title}</a>
                    <span className="text-xs dark:dark:text-gray-400">{new Date(published_at).toLocaleDateString()}
                    </span>                                       
                    <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
                </div>
            </div>
        </div>
    );
};

BlogContent.propTypes = {
    title: PropTypes.string,
    body_html: PropTypes.string,
    cover_image: PropTypes.string,
    published_at: PropTypes.string,
    url: PropTypes.string,
    tags: PropTypes.array
}

export default BlogContent;