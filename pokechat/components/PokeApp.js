/*
 * Module dependencies
 */

import React from "react";
import PokeTable from "./PokeTable";
import PokeChat from "./PokeChat";
import uid from "uid";

export default class PokeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  onGrowl(name) {
    const text = `${name}, ${name}!`;
    const message = { id: uid(), text };
    this.state.messages.push(message);
    const { messages } = this.state;
    this.setState({ messages });
  }

  render() {
    return (
      <div className="pokeapp">
        <PokeTable
          pokemons={this.props.pokemons}
          onGrowl={this.onGrowl.bind(this)}
        />
        <PokeChat messages={this.state.messages} />
      </div>
    );
  }
}
