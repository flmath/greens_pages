import React from "react";
import {Container} from "reactstrap";
export default function Interests(props) {
  return (
    <div className="personal_container_tint">
      <Container>
        <p>
          Right now I'm reasearching possible matrix representations in
          Erlang/OTP. Since there is a lack of an OTP standarized module for
          them and it is a foundamental structure for storing and processing
          statistics, numerical algorithms and everything build upon them. It
          would be good to have a modernately efficient implementation we can
          use without an interface to other languages.
        </p>

        <p>
          <a href="https://nbviewer.jupyter.org/github/flmath/matrix_implementations_in_erlang/blob/master/jupyter/main.ipynb">
            Matrixes in erlang
          </a>
        </p>
        <p>
          <a href="https://nbviewer.jupyter.org/github/flmath/matrix_implementations_in_erlang/blob/master/jupyter/growth_projections.ipynb">
            Matrixes in erlang: growth projections
          </a>
        </p>
      </Container>

    </div>
  );
}
