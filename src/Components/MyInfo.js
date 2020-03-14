import React from 'react';
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

function MyInfo(){
    var fistname="Manikanta"
    var lastname="Maddipati"
    return (
        // need to return JSX element
        //this is JSX not HTML
        <div>
          <Header/>
          <MainContent/>
          //this is JSX : HTML + JS (this from jsx to js we need att {} example : {lastname + fistname} )
          <h1> hello {lastname + fistname} !</h1>
          <Footer/>
        </div>
    )
}
// export the component
export default MyInfo


//Components -> JX Elements