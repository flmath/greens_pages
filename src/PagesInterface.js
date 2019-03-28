import React  from 'react';
import ThePage from "./pages/output.html"

function PagesInterface(props){
    return (<div dangerouslySetInnerHTML={{__html: ThePage}}></div>)
  }

export default PagesInterface;
