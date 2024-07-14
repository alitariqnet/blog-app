import BlogList from "./BlogList";
import _blogs from './blogs';
import { useState } from 'react';


const Home = () => {
    const [blogs, setBlogs] = useState(_blogs);

    return ( <div className="home">
        <h2>Homepage</h2>
        <BlogList blogs={blogs} title="All blogs!"/>
        <BlogList blogs={blogs.filter((blog) => { return blog.id === 'alibaba' })} title="Ali's blogs!"/>
    </div> );
}
 
export default Home;