import React from 'react';
import Header from './components/Header';
import Logo from './components/Logo';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import './App.css';
// import { Swtich, Route } from 'react-router-dom';

function App() {
  render()
    return <div>
    <Header/>
    <Nav/>
    <Logo/>
    <HomePage/>
    </div>
}

export default App;


{/* <Switch>
    <Route path= {Header}></Route>
    <Route path= {Nav}></Route>
    <Route path= {Logo}></Route>
    <Route path= {HomePage}></Route>
</Switch>; */}




















//  children: node
//      A child elelement to render.
{/* <StaticRouter> 
     // A Router that never chnages location. 
                    // Useful in server-side rendering when users aren't actualy clicking around but are staying on a single page (DOM Display)

</StaticRouter>

http: 
.createServer((req, res) => {
  //this context objject contains the results of the render
  const context = {} ;

  const html= ReactDOMServer.renderToString(
    <staticRouter location={req.url}
 context={context}>
   <App/>
 </staticRouter>  
 );

 // context.url will contain the URL to redirect to if a <Redirect> was used
if (context.url) {
  res.writtenHead(302, {
    Location: context.url
  });
  res.end();

}
}) */}


