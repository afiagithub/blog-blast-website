import { useLoaderData } from "react-router-dom";
import SingleBlog from "../Components/SingleBlog";

const Blogs = () => {
    const allBlogs = useLoaderData();
    return (
        <section className="dark:dark:bg-gray-800 dark:dark:text-gray-100">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:dark:bg-gray-900">
                    <img src={allBlogs[0].cover_image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:dark:bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                            {allBlogs[0].title}</h3>
                        <span className="text-xs dark:dark:text-gray-400">
                            {new Date(allBlogs[0].published_at).toLocaleDateString()}</span>
                        <p>{allBlogs[0].description}</p>
                    </div>
                </a>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        allBlogs.map(blog => <SingleBlog key={blog.id} blog={blog}></SingleBlog>)
                    }
                </div>
                <div className="flex justify-center">
                    <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:dark:bg-gray-900 dark:dark:text-gray-400">Load more posts...</button>
                </div>
            </div>
        </section>
    );
};

export default Blogs;