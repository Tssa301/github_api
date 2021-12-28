import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Github API challenge</h1>
            <p>Bootcamp Spring React - DevSuperior</p>
            <Link to="/gitsearch">
                <button className="btn btn-primary btn-lg start-button">Start</button>
            </Link>
        </div>
    );
}

export default Home;
