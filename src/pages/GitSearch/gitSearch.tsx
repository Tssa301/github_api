import ResultCard from 'components/ResultCard/resultCard';

import './styles.css';

const GitSearch = () => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Changed to: " + event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Clicked!")
  }

  return (
    <div className="git-search-container">
      <div className="container search-container">
        <h1>Find a profile on Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              className="search-input"
              placeholder="Enter your Github username"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="container info-container">
        <div className="container img-container">
          <img src="https://avatars.githubusercontent.com/u/64556958?v=4" alt="" />
        </div>
        <div className="container description-container">
          <h6>Information</h6>
          <ResultCard title="Profile:" description="https://api.github.com/users/Tssa301" />
          <ResultCard title="Followers:" description="45" />
          <ResultCard title="Location:" description="Lisbon" />
          <ResultCard title="Name:" description="Tiago Ssa" />
        </div>
      </div>
    </div>
  );
};

export default GitSearch;
