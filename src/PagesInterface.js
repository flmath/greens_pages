import React  from 'react';

function PagesInterface(props){
  fetch('./pages/Empirical_growth_testing')
  .then((r) => r.text())
  .then(text  => {
    console.log(text);
    return (<div dangerouslySetInnerHTML={{__html: text}}></div>)})
  }


export default PagesInterface;
