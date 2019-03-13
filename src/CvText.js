import React from 'react';

const Box = props => <div className="box">{props.children} </div>;
class CvText extends React.Component {
  constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>

          <Box>  .col </Box>
        </div>
      );
    }
  }

export default CvText;
