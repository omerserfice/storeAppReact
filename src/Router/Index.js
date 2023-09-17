import React from "react";
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
 } from "react-router-dom";
 import Navbar from "../components/Navbar";
 import routes from "./routes";

 const Index = () => {
    return(
        <>
       
        <Navbar/>
        
       
          <Router>
            <Switch>
                {
                   routes.map((item,key)=>{
                    return(
                    <Route 
                     key={key}
                     path={item.path}
                     component={item.component}
                    >

                    </Route>
                    )
                   })
                }
            </Switch>
        </Router>
        </>
      
    )
 }

 export default Index