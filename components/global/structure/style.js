/**
 * Module imports
 */
import styled from "styled-components";

/**
 * File imports
 */
import { common, colors, device } from "../constants";

const setGridGap = gap => gap;

export const SuperContainer = styled.div`
  width: 100%;
  @media ${device.medium} {
    padding: 60px 0;
  }
`;

export const RowComponent = styled.div`
  width: 100%;
  background: ${p => (p.background ? p.background : "#fff")};
  padding: ${p => (p.padding ? p.padding : "0")};
`;

/**
 * Include all possible attributes with values
 */
export const ContainerComponent = styled.div`
	max-width: 1240px;

	margin: ${props => (props.margin ? props.margin : "0 auto")};
	padding: ${props => (props.padding ? props.padding : "0 auto")};

	${props => props.border
    && `
			border: ${props.border && props.border}
			border-color: ${props.borderColor && props.borderColor};
			border-radius: ${common.input.borderRadius};
		`}
	${props => props.borderTop
    && `
			border-top: ${props.borderTop ? props.borderTop : ""}
			border-color: ${props.borderColor && props.borderColor};
			border-radius: ${common.input.borderRadius};
		`}
	${props => props.borderRight
    && `
			border-right: ${props.borderRight ? props.borderRight : ""}
			border-color: ${props.borderColor && props.borderColor};
			border-radius: ${common.input.borderRadius};
		`}
	${props => props.borderBottom
    && `
			border-bottom: ${props.borderBottom ? props.borderBottom : ""}
			border-color: ${props.borderColor && props.borderColor};
			border-radius: ${common.input.borderRadius};
		`}
	${props => props.borderLeft
    && `
			border-left: ${props.borderLeft ? props.borderLeft : ""}
			border-color: ${props.borderColor && props.borderColor};
			border-radius: ${common.input.borderRadius};
		`}
	${props => props.borderRadius
    && `
			border-color: ${colors.base.silverGray};
			border-radius: ${props.borderRadius};
		`}

	background: ${props => (props.background ? props.background : "")};
	height: ${props => (props.height ? props.height : "")};
	width: ${props => (props.width ? props.width : "")};

	@media ${device.large} {
		width: 95%;
	}
`;

export const GridComponent = styled.div`
  display: grid;
  grid-template-columns: ${p => (p.largeColumns ? p.largeColumns : "12fr")};
  grid-gap: ${p => p.gap && setGridGap(p.gap)};
  @media ${device.medium} {
    grid-template-columns: ${p => (p.mediumColumns ? p.mediumColumns : "12fr")};
    grid-gap: ${p => (p.gap ? setGridGap(p.gap) : "12px")};
  }
  @media ${device.small} {
    grid-template-columns: ${p => (p.smallColumns ? p.smallColumns : "12fr")};
    grid-gap: ${p => (p.gap ? setGridGap(p.gap) : "8px")};
  }
`;

export const DraggerComponent = styled.div`
  display: grid;
  grid-template-columns: ${p => (p.largeColumns ? p.largeColumns : "12fr")};
  grid-gap: ${p => p.gap && setGridGap(p.gap)};
  @media ${device.medium} {
    grid-template-columns: ${p => (p.mediumColumns ? p.mediumColumns : "12fr")};
    grid-gap: 12px;
    overflow-x: scroll;
    white-space: nowrap;
    padding-bottom: 20px;
    display: flex;
  }
  @media ${device.small} {
    grid-template-columns: ${p => (p.smallColumns ? p.smallColumns : "12fr")};
    grid-gap: 8px;
  }
`;

export const ImageComponent = styled.img`
  width: 100%;
  :focus {
    border: 0;
    box-shadow: none;
  }
  border-radius: ${p => (p.radius ? p.radius : "0")};
`;

export const Column = styled.div`
  width: 100%;
`;

export const BorderComponent = styled.div`
  border: 1px solid ${p => (p.color ? p.color : "0")};
  padding: ${p => (p.padding ? p.padding : "0")};
  border-radius: ${p => (p.radius ? p.radius : "0")};
`;


