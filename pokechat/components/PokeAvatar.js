/*
 * Module dependencies
 */

import React from 'react';

export default class PokeAvatar extends React.Component {
  render() {
    const url = `http://veekun.com/dex/media/pokemon/main-sprites/x-y/${this.props.number}.png`;
    return <img src={url} className="avatar"/>
  }
}
