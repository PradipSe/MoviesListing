import styled from "styled-components";
import { device } from "../../global/constants";
import common from "../../global/constants/common";
import colors from "../../global/constants/colors";

export const CardContent = styled.div``;

export const Container = styled.div`
  width:100%;
  cursor: pointer;
`;

export const CardRedirection = styled.a`
	text-decoration: none;
`;

export const ContainerImg = styled.div`
	position: relative;
	border-radius: ${common.radius};
`;

export const Image = styled.img`
  width:100%;
`;

export const ReleasingDate = styled.div`
	font-size: 18px;
	line-height: 21px;
	color: ${colors.text.black};
	text-align: left;
	font-weight: 400;
	padding: 10px 0;
`;

export const H6 = styled.h6`
  font-size:21px;
  line-height:24px;
  color: ${colors.text.black};
  margin:0;
  font-weight:500;
`;

export const ReleasingText = styled.span`
	font-size: 14px;
	line-height: 16px;
	color: ${colors.text.boulderGray};
	display: block;
	@media ${device.small} {
		font-size: 12px;
		line-height: 14px;
	}
`;

export const ContentInner = styled.div`
	padding: 8px 0;
`;
