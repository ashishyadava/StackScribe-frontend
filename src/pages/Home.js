import { Link } from "react-router-dom";

const Home = () => {
    return ( <div className="home-wrapper">

        <h1>Welcome</h1>
        <h2><Link to="notes">Your notes</Link></h2>

    </div> );
}
 
export default Home;