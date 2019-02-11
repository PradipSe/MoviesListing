/**
 * Module imports
 */
import React from "react"
import PropTypes from "prop-types"

import { Link } from "../../../routes/url"



/**
 * Style imports
 */
import {
	Container,
	CardRedirection,
  ContainerImg,
  Image,
  ReleasingDate,
  H6,
	ReleasingText,
	ContentInner,
	CardContent,
} from "./style"

const MovieCard = ({ image, title, releaseDate, href, ashref }) => (
  <Container>
      <Link href={href} as={ashref}>
        <CardRedirection>
          <ContainerImg>
            <Image src={image} alt={title} data-src={image} />
          </ContainerImg>
          <CardContent>
            <ContentInner>
              <H6 color="black" weight="semibold" align="left">
                {title}
              </H6>
              <ReleasingDate>
                <ReleasingText>Releasing on</ReleasingText>
                <span>{releaseDate}</span>
              </ReleasingDate>
            </ContentInner>
          </CardContent>
        </CardRedirection>
      </Link>
    </Container>
)

MovieCard.defaultProps = {
	image: '',
  title: '',
  releasingDate: '',

}

MovieCard.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	releasingDate: PropTypes.string,
}

export default MovieCard
