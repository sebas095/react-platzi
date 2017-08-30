/*
 * Module dependencies
 */

import React from "react";
import PokeTable from "./PokeTable";
import PokeChat from "./PokeChat";
import uid from "uid";
import $ from "jquery";
import io from "socket.io-client";

export default class PokeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      pokemons: []
    };
    this.user = uid(10);
  }

  componentWillMount() {
    $.get("/pokemons", pokemons => {
      this.setState({ pokemons });
    });
    this.socket = io("http://localhost:3000");
    this.socket.on("message", message => {
      if (message.user !== this.user) {
        this.newMessage(message);
      }
    });
  }

  onGrowl(name) {
    const text = `${name}, ${name}!`;
    const message = { id: uid(), text, user: this.user };
    this.newMessage(message);
    this.socket.emit("message", message);
  }

  newMessage(message) {
    this.state.messages.push(message);
    const { messages } = this.state;
    this.setState({ messages });
  }

  render() {
    if (this.state.pokemons.length) {
      return (
        <div className="pokeapp">
          <PokeTable
            pokemons={this.state.pokemons}
            onGrowl={this.onGrowl.bind(this)}
          />
          <PokeChat messages={this.state.messages} />
        </div>
      );
    } else {
      return <p>Cargando...</p>;
    }
  }
}
