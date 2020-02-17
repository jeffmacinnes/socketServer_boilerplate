# socketServer_boilerplate
Node-based socket server boiler plate code

Includes:

* socket server and webserver
* front end code for connecting to socket server
* front end boilerplate for npm imports, transpiling, etc.


## Quick start
### backend

* `cd socketServer_boilerplate`
* `npm i`
* `nodemon server.js`

*Note:* install `nodemon` globally, if not available `sudo npm i -g nodemon`

### front end

* `cd socketServer_boilerplate/public`
* `npm i`
* `npm run dev`

Includes automatic compiling to the `bundle.js` file in root of `public` dir. Any edits should start at `/js/main.js`