import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title:'new blog 1', body:'lorem ipsum...',author:'alibaba1',id:1},
        {title:'new blog 2', body:'lorem ipsum...',author:'alibaba2',id:2},
        {title:'new blog 3', body:'lorem ipsum...',author:'alibaba3',id:3}
    ]);

    return ( <div className="home">
        <h2>Homepage</h2>
        {blogs.map((blog) => { 
            return (<div className="blog-preview" key={blogs.id}>
                <h2>{blog.title}</h2>
                <p>Author: {blog.author}</p>
                <p>{blog.body}</p>
            </div>)
        })}
    </div> );
}
 
export default Home;