import axios from 'axios';
import ResultCard from 'components/ResultCard/resultCard';
import { useState } from 'react';
import InfoLoader from './InfoLoader/infoLoader';

import './styles.css';

type FormData = {
  username: string;
};

type GitApi = {
  avatar_url: string;
  url: string;
  followers: string;
  location: string;
  name: string;
};

const GitSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [gitApi, setGitApi] = useState<GitApi>();

  const [formData, setFormData] = useState<FormData>({
    username: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${formData.username}`)
      .then((response) => {
        setGitApi(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setGitApi(undefined);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="git-search-container">
      <div className="container search-container">
        <h1>Find a profile on Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="username"
              className="search-input"
              placeholder="Enter your Github username"
              value={formData.username}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Search
            </button>
          </div>
        </form>
      </div>
      {isLoading ? <InfoLoader/> : (gitApi && (
        <>
          <div className="container info-container">
            <div className="container img-container">
              <img src={gitApi?.avatar_url} alt="" />
            </div>
            <div className="container description-container">
              <h6>Information</h6>
              <ResultCard title="Profile:" description={gitApi.url} />
              <ResultCard title="Followers:" description={gitApi.followers} />
              <ResultCard title="Location:" description={gitApi.location} />
              <ResultCard title="Name:" description={gitApi.name} />
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default GitSearch;
