import React, { Component } from "react";
import { connect } from "react-redux";
import { movieInfoSelector } from "../selectors";
import { createStructuredSelector } from "reselect";
import { initiateMoviesDetailsApi } from "../actions/details/actionCreator";
import MovieDetails from "../components/movies";

class MoviesPage extends Component {
  constructor() {
    super();
  }

  static async getInitialProps({ store, query }) {
    /**
     * Dispatching api listing data to redux store, this will serve for both
     * server and client side, on the client side it will behave as componentDidMount().
     */
    await store.dispatch(initiateMoviesDetailsApi(query.id));
    /**
     * Returning params for filter.
     */

    // return { param: query.sort };
    return { query }
  }

  render() {
    /**
     * Getting candidate info listing data from redux store.
     */
    const arrData = []
    const { moviesInfo, query } = this.props;
    moviesInfo && moviesInfo.listingInfo.data.map(data => {
      if(data._id === query.id) {
        arrData.push(data)
      }
    })
    console.log('adsadasd:' , arrData)
    return (
      <MovieDetails data={arrData} />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  moviesInfo: movieInfoSelector()
});

export default connect(mapStateToProps)(MoviesPage);
