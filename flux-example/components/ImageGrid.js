/*
 * Module dependencies
 */

import React from "react";
import Reflux from "reflux";
import ImageStore from "../stores/ImageStore";

const ImageGrid = React.createClass({
  mixins: [Reflux.connect(ImageStore, "imagestore")],

  render() {
    if (this.state.imagestore) {
      return (
        <div>
          {this.state.imagestore.map((image, index) => {
            return (
              <div className="image" key={index}>
                <a href={image.link}>
                  <img src={image.media.m} />
                </a>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <p>No hay imagenes disponibles</p>;
    }
  }
});

export default ImageGrid;
