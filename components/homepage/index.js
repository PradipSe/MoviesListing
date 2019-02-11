import React, { Component } from "react";
import { SuperContainer, RowComponent, ContainerComponent, Column } from "../global/structure/style";
import Grid from "../global/grid";
import MovieCard from "../global/cards"

import { IMAGE_DEFAULT_URL, movieURL } from '../../global.config'

class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const renderCards = () => {
      const { data } = this.props
      const products = data.listingInfo.data

      console.log('title', products)
      return products
			? products.map((data) => {
				const {
					_id, title, posterURL, releaseDate,
        } = data

        const ImgaeUrl = `${IMAGE_DEFAULT_URL}/${posterURL}`
        const dateFormated = releaseDate.substr(0, releaseDate.indexOf('T00'));
        const href = `/movies?id=${_id}`;
        const ashref = `${movieURL}/${_id}`
        //const redirectionUrl =
        const monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];

        const day = dateFormated.substr(8,2)
        const month = dateFormated.substr(5,2)
        const year = dateFormated.substr(0,4)
        const foramtedDate = day+' '+monthNames[Number(month-1).toString()]+' '+year

        console.log('date format: ', day+' '+monthNames[Number(month-1).toString()]+' '+year)

				return (
            <Column key={_id}>
              <MovieCard
                image={ImgaeUrl}
                title={title}
                releaseDate= {foramtedDate}
                href={href}
                ashref={ashref}
              />
            </Column>
				)
			})
			: null
    }

    const Listing = () => (
      <Grid largeColumns="3fr 3fr 3fr 3fr" mediumColumns="4fr 4fr 4fr" smallColumns="12fr" gap="30px" mobileGap="30px">
        {renderCards()}
      </Grid>
    )

    return (
      <SuperContainer>
        <RowComponent>
          <ContainerComponent>
            {Listing()}
          </ContainerComponent>
        </RowComponent>
      </SuperContainer>
    )
  }
}

export default HomePage
