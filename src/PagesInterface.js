import React  from 'react';
import ThePage from './pages/output.html'

class PagesInterface extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          isLoaded: false,
          thePage: ""
        };
      }


      componentDidMount() {
              this.setState({
                isLoaded: true,
                thePage: ThePage
              });
            }

        render() {
        const {isLoaded, thePage } = this.state;
        if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
            return (<div dangerouslySetInnerHTML={{__html: thePage}}></div>)

        }
      }}


export default PagesInterface;
