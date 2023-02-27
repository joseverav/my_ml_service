import React, { Component } from "react";
import axios from "axios";

class IncomeClassifier extends Component {
    state = {
        requests: [],
      };
    
    componentDidMount() {
    axios
        .get("http://localhost:8000/api/v1/mlrequests")
        .then((res) => {
        this.setState({ requests: res.data });
        console.log(res.data);
        })
        .catch((error) => {
        console.error(error);
        });
    }

    render() {
        const lastRequest = this.state.requests[this.state.requests.length - 1];

        return (
            <main>
            <h2>Adult Income Classifier</h2>
            <p> Try an input</p>
            {lastRequest && (
                <p>
                {" "}
                {lastRequest.id} : {lastRequest.response}
                </p>
            )}
            </main>
        );
    }
}

export default IncomeClassifier;