import React, { Component } from "react";
import { createPromise } from "./services/furnitureService";
import "./App.scss";
import Loader from "./components/Loader";
import FurnitureList from "./components/FurnitureList";
import Filter from "./components/Filter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      furnitureRawData: [],
      search: "",
      isLoading: true
    };
    this.getInputSearch = this.getInputSearch.bind(this);
    this.filterByName();
  }

  componentDidMount() {
    createPromise().then(data => {
      setTimeout(
        () =>
          this.setState({
            furnitureRawData: data,
            isLoading: false
          }),

        2000
      );
    });
  }

  getInputSearch(event) {
    const userSearch = event.currentTarget.value;
    this.setState({
      search: userSearch
    });
  }

  filterByName() {
    const filteredFurniture = this.state.furnitureRawData.filter(item => {
      const furnitureName = item.name;
      if (
        furnitureName
          .toLocaleLowerCase()
          .includes(this.state.search.toLocaleLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    });
    return filteredFurniture;
  }

  render() {
    const furnitureResults = this.filterByName();
    return (
      <div className="App">
        <Filter
          onKeySearch={this.getInputSearch}
          userSearch={this.state.search}
        />

          {this.state.isLoading ? (
            <Loader />
          ) : (
            <FurnitureList furnitureResults={furnitureResults} />
          )}
      </div>
    );
  }
}

export default App;
