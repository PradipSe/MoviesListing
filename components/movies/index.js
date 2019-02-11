import React, { Component } from "react";
import { SuperContainer, RowComponent, ContainerComponent, Column } from "../global/structure/style";
import Grid from "../global/grid";
import MovieCard from "../global/cards"
import { Link } from "../../routes/url"
import Router from 'next/router'

import { IMAGE_DEFAULT_URL, movieURL } from '../../global.config'

import { MoviesDetailsContainer, BannerComponent, Img, Poster, DetailsSection, Content, Redirection } from "./style"

class MovieDetails extends Component {
  constructor(props) {
    super(props)

    this.BackButtonWrapper = this.BackButtonWrapper.bind(this)
  }

  BackButtonWrapper = () => {
		Router.back()
	}

  render() {

    const renderCards = () => {
      const { data } = this.props
      const products = data

      return products
			? products.map((data) => {
				const {
					_id, title, posterURL, releaseDate, backdropURL, plot,
        } = data

        const ImgaeUrl = `${IMAGE_DEFAULT_URL}/${posterURL}`
        const BannerImage = `${IMAGE_DEFAULT_URL}/${backdropURL}`
        const Description = plot
        const dateFormated = releaseDate.substr(0, releaseDate.indexOf('T00'));
        const href = `/movie-details?id=${_id}`;
        const ashref = `${movieURL}/details/${_id}`
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
          <div>
            <MoviesDetailsContainer>
              <BannerComponent>
                <Img src={BannerImage} alt={title} />
              </BannerComponent>
              <DetailsSection>
                <Grid largeColumns="3fr 9fr" mediumColumns="3fr 9fr" smallColumns="3fr 9fr" gap="30px" mobileGap="30px">
                  <Poster>
                    <MovieCard
                      image={ImgaeUrl}
                      title={title}
                      releaseDate= {foramtedDate}
                      href={href}
                      ashref={ashref}
                    />
                  </Poster>
                  <div>
                    <Content>
                      {Description}
                    </Content>
                  </div>
                </Grid>
              </DetailsSection>
              </MoviesDetailsContainer>
            </div>
				)
			})
			: null
    }

    return (
      <SuperContainer>
        <RowComponent>
          <ContainerComponent>
            {renderCards()}
          </ContainerComponent>
        </RowComponent>
      </SuperContainer>
    )
  }
}

export default MovieDetails
