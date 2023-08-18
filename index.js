const buffer = require('buffer');
globalThis.Buffer = buffer.Buffer;
const mqtt = require('mqtt-packet');
module.exports = mqtt;