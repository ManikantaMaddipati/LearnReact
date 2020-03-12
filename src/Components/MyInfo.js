import React from 'react';
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

function MyInfo(){
    return (
        // need to return JSX element
        <div>
          <Header/>
          <MainContent/>
          <Footer/>
        </div>
    )
}
// export the component
export default MyInfo


//Components -> JX Elements