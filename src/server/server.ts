import express from 'express';
import http from 'http';
import router from './router';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/', router);

const httpServer = http.createServer(app);
const port = process.env.APP_PORT;
const wds = process.env.WDS_PORT;

httpServer.listen(port, () => {
  console.log(`Http & webpack proxy servers now listening on port ${port}`);
  console.log(`Webpack dev server running on port ${wds}`);
  console.log(`Please navigate to http://localhost:${wds} on your browser`);
});
