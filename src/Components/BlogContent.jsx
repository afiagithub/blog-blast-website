import { useLoaderData } from "react-router-dom";
import generalImage from '../assets/404.jpg';
import Markdown from 'react-markdown';
import rehypeRaw from "rehype-raw";

const BlogContent = () => {
    const blog = useLoaderData();
    const {title, body_html, cover_image, published_at} = blog;
    return (
        <div>
            <div className="mx-auto group transition border-2 p-2 hover:no-underline 
            focus:no-underline dark:dark:bg-gray-900">
                <img role="presentation" className="object-cover w-full rounded h-64 dark:dark:bg-gray-500"
                    src={cover_image || generalImage} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                        {title}</h3>
                    <span className="text-xs dark:dark:text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
                    <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
                </div>
            </div>
        </div>
    );
};

export default BlogContent;