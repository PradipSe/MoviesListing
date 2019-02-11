/* eslint-disable */

/**
 * Module imports
 */
import React from "react";

/**
 * File imports
 */
import {
  RowComponent,
  ContainerComponent,
  GridComponent,
  ImageComponent,
  DraggerComponent,
  BorderComponent
} from "./style";

export const Row = ({ background }) => <RowComponent background={background} />;

export const Container = () => <ContainerComponent />;

export class Grid extends React.Component {
  render() {
    const {
      largeColumns,
      mediumColumns,
      smallColumns,
      gap,
      elements
    } = this.props;
    return (
      <GridComponent
        largeColumns={largeColumns}
        mediumColumns={mediumColumns}
        smallColumns={smallColumns}
        gap={gap}
      >
        {elements}
      </GridComponent>
    );
  }
}

export class GridDragger extends React.Component {
  render() {
    const {
      largeColumns,
      mediumColumns,
      smallColumns,
      gap,
      elements
    } = this.props;
    return (
      <DraggerComponent
        largeColumns={largeColumns}
        mediumColumns={mediumColumns}
        smallColumns={smallColumns}
        gap={gap}
      >
        {elements}
      </DraggerComponent>
    );
  }
}

export const Image = ({ src, alt, radius }) => (
  <ImageComponent src={src} alt={alt} radius={radius} />
);

export const BorderContainer = ({ color, radius, padding, elements }) => (
  <BorderComponent color={color} radius={radius} padding={padding}>
    {elements}
  </BorderComponent>
);
