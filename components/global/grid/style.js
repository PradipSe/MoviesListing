import styled from "styled-components";
import { device } from "../constants";

const GridComponent = styled.div`
	display: grid;
	grid-template-columns: ${p => p.largeColumns};
	grid-gap: ${p => p.gap};
	@media ${device.medium} {
		grid-template-columns: ${p => p.mediumColumns};
		grid-gap: ${p => p.mobileGap};
	}
	@media ${device.small} {
		grid-template-columns: ${p => p.smallColumns};
		grid-gap: ${p => p.mobileGap};
	}
`;

export default GridComponent
