import Component from "./test";
import TopNav from "./topNav";
import Increment from "./increment";
import './App.css'
import Home from "./home";
import Test from "./test2";
import Test3 from "./test3";
import { Route , Switch , BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import NewBlog from "./newBlog";
import BlogDetails from "./blogDetails";
import NotFound from "./notFound";
const App = () => {
  return ( 
    <div className="project">
      <TopNav/>

      <BrowserRouter>
          <Switch>
              <Route  exact path="/">
                  <Home/>
              </Route>
              <Route path="/test">
                  <Test3/>
              </Route>
              <Route path="/newBlog">
                  <NewBlog/>
              </Route>
              <Route path="/blog/:id">
                  <BlogDetails/>
              </Route>
              <Route path="*">
                  <NotFound/>
              </Route>
          </Switch>
      </BrowserRouter>
    </div>
   );
}
 
export default App;