/*
 * Module dependencies
 */

import express from "express";
import http from "http";
import engine from "socket.io";

const port = 3000;
const app = express();

// Configurar la ruta de archivos estáticos
app.use("/", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

http.createServer(app).listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});
