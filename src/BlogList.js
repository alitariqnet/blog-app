

const BlogList = (props) => {   

    const blogs = props.blogs;

    return ( 
    <div className="blog-list">
        <h1>{props.title}</h1>
        {blogs.map((blog) => { 
            return (<div className="blog-preview" key={blogs.id}>
                <h2>{blog.title}</h2>
                <p>Author: {blog.author}</p>
                <p>{blog.body}</p>
                <button >Delete</button>
            </div>)
        })}
    </div> );
}
 
export default BlogList;