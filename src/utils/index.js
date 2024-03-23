import toast from "react-hot-toast";

export const getBlogs = () => {
    let blogs = [];
    const storedBlogs = localStorage.getItem("blogs");
    if(storedBlogs){
        blogs = JSON.parse(storedBlogs)
    }
    return blogs
}

// set to storage
export const markBlog = (blog) => {
    let blogs = getBlogs();
    const isExists = blogs.find(b => b.id === blog.id);
    if(isExists){
        return toast.error("Already Bookmarked!")
    }
    else{
        blogs.push(blog);
        localStorage.setItem("blogs", JSON.stringify(blogs));
        toast.success("Blog Bookmarked Successfully")
    }
}

// remove item from storage
export const delBlog = (id) =>{
    let blogs = getBlogs();
    const remaining = blogs.filter(b => b.id !== id);
    localStorage.setItem("blogs", JSON.stringify(remaining));
    toast.success("Blog Successfully Removed")
}