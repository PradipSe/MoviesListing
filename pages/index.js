import React, { Component } from "react";
import { connect } from "react-redux";
import { movieInfoSelector } from "../selectors";
import { createStructuredSelector } from "reselect";
import { initiateMoviesApi } from "../actions/app/actionCreator";
import HomePage from "../components/homepage";

class MainApp extends Component {
  constructor() {
    super();
  }

  static async getInitialProps({ store }) {
    /**
     * Dispatching api listing data to redux store, this will serve for both
     * server and client side, on the client side it will behave as componentDidMount().
     */
    await store.dispatch(initiateMoviesApi());
    /**
     * Returning params for filter.
     */
    // return { param: query.sort };
  }

  render() {
    /**
     * Getting candidate info listing data from redux store.
     */
    console.log('dasdasdasD: ', this.props)
    const { moviesInfo } = this.props;
    return (
        <HomePage data={moviesInfo}/>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  moviesInfo: movieInfoSelector()
});

export default connect(mapStateToProps)(MainApp);
