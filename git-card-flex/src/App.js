import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  state = {
    user: {},
    followers: [],
    searchText: '',
    followerCardsOn: false,
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/elCarlosSantiago')
      .then((res) => {
        this.setState({
          user: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get('https://api.github.com/users/elCarlosSantiago/followers')
      .then((res) => {
        console.log(res.data);
        this.setState({
          followers: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleSearch = (e) => {
    this.setState({ searchText: e.target.value });
  };

  showFollowers = () => {
    this.setState({ followerCardsOn: !this.state.followerCardsOn });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.searchText}`)
      .then((res) => {
        this.setState({
          user: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`https://api.github.com/users/${this.state.searchText}/followers`)
      .then((res) => {
        this.setState({
          followers: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({
      searchText: '',
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchBar
          searchText={this.state.searchText}
          handleSubmit={this.handleSubmit}
          handleSearch={this.handleSearch}
        />
        <div id="container">
          <UserCard user={this.state.user} showFollowers={this.showFollowers} />
          {this.state.followerCardsOn &&
            this.state.followers.map((follower) => {
              return <FollowerCard followers={follower} />;
            })}
        </div>
      </div>
    );
  }
}

export default App;
