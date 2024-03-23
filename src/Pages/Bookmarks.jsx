import { useEffect, useState } from "react";
import { delBlog, getBlogs } from "../utils";
import SingleBlog from "../Components/SingleBlog";
import EmptyState from "../Components/EmptyState";

const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() =>{
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    }, [blogs]);

    const handleDelete = (id) => {
        delBlog(id);
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    }
    if(blogs < 1) return <EmptyState msg="You Haven't Bookmared Any Blog" address="/blogs" label="Go To Blogs">

    </EmptyState>
    return (
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 
        lg:grid-cols-3 my-5 lg:my-8">
            {
                blogs.map(blog => <SingleBlog key={blog.id} handleDelete={handleDelete} deletable={true} 
                    blog={blog}></SingleBlog>)
            }
        </div>
    );
};

export default Bookmarks;