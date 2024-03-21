
import express from 'express';
//import cors from 'cors';
import { renderToString } from 'react-dom/server';
const app = express();
//
//import Top from './Top';
const topHtml = `
<html>
<head>
    <title>welcome</title>
</head>
<div id="app"></div>
<script type="module" src="/static/entry-client.js"></script>
</html>
`;
const prodHtml = `
<html>
<head>
    <title>welcome</title>
</head>
<div id="app"></div>
<script type="module" src="/public/static/entry-client.js"></script>
</html>
`;
/*
<a href="/">[ home ]</a>
<a href="/about">[ about ]</a>
<hr />        
<h1 className="text-4xl font-bold">hello</h1>
*/
///client/assets/index-B35sZNfz.js
//import About from './pages/about';
//import Test from './pages/Test';
//import TestShow from './pages/Test/TestShow';
//import Contact from './pages/contact';';
//
//import testRouter from './routes/test'; 
//import commonRouter from './routes/commonRouter';
///
//app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
console.log("env=", process.env.NODE_ENV);
//console.log("VITE_API_URL=", import.meta.env.VITE_API_URL);
//
const errorObj = {ret: "NG", messase: "Error"};

// route
//app.use('/api/test', testRouter);
//app.use('/api/common', commonRouter);

app.get('/*', (req, res) => {
  try {
//    res.send(renderToString(Top()));
    if(process.env.NODE_ENV === "develop"){
      res.send(topHtml);
    }else{
      res.send(prodHtml);
    }
  } catch (error) {
    res.sendStatus(500);
  }
});

//start
const PORT = 3000;
app.listen(PORT);
console.log(`start portNo=${PORT}`);

export default app;