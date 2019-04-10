import React, { Component } from "react";
import { createPromise } from "./services/furnitureService";
import "./App.scss";
import Loader from "./components/Loader";
import FurnitureList from "./components/FurnitureList";
import FurnitureCard from "./components/FurnitureCard";
import Filter from "./components/Filter";
import { Switch, Route } from "react-router-dom";

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
      console.log ('data', data)
      const cleanData = data.map((item, index)=>{
        return {...item, id:index}
      })

      setTimeout(
        () =>
          this.setState({
            furnitureRawData: cleanData,
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
    const { furnitureRawData } = this.state;
    const furnitureResults = this.filterByName();
    return (
      <div className="App">
        <header>
          <h1 className="app__header-title"> XXX Lutz</h1>

          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Filter
                  onKeySearch={this.getInputSearch}
                  userSearch={this.state.search}
                />
              )}
            />
          </Switch>
        </header>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <div className="app__list">
                  {this.state.isLoading ? (
                    <Loader />
                  ) : (
                    <FurnitureList 
                    furnitureResults={furnitureResults} />
                  )}
                </div>
              )}
            />
            <Route
              exact
              path="/furniture/:id"
              render={props => (
                <FurnitureCard
                  match={props.match}
                  furnitureRawData={furnitureRawData}
                  furnitureId={1}
                />
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
