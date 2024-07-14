import BlogList from "./BlogList";
import _blogs from './blogs';
import { useState } from 'react';


const Home = () => {
    const [blogs, setBlogs] = useState(_blogs);

    return ( <div className="home">
        <h2>Homepage</h2>
        <BlogList blogs={blogs} title="All blogs!"/>
    </div> );
}
 
export default Home;