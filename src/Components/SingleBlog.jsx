import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import generalImage from '../assets/404.jpg'
import { RiDeleteBin6Line } from "react-icons/ri";

const SingleBlog = ({ blog, deletable, handleDelete}) => {
    const { id, title, description, cover_image, published_at } = blog;
    
    return (
        <div className="flex relative">
            <Link to={`/blogs/${id}`} className={`max-w-sm mx-auto group transition border-2 
            ${!deletable? "hover:scale-105 ": ""}
        border-primary hover:border-secondary hover:no-underline focus:no-underline dark:dark:bg-gray-900`}>
                <img role="presentation" className="object-cover w-full rounded h-44 dark:dark:bg-gray-500"
                    src={cover_image || generalImage} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                        {title}</h3>
                    <span className="text-xs dark:dark:text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
                    <p>{description}</p>
                </div>
            </Link>
            {deletable &&
                <div onClick={() => handleDelete(id)} className="absolute -top-5 right-3 text-2xl bg-primary text-white border-none 
            rounded-full p-4 hover:bg-secondary hover:scale-105">
                    <RiDeleteBin6Line />
                </div>}
        </div>
    );
};

SingleBlog.propTypes = {
    blog: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
    cover_image: PropTypes.string,
    published_at: PropTypes.string,
    deletable: PropTypes.bool,
    handleDelete: PropTypes.func,
}

export default SingleBlog;