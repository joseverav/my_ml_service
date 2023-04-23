import React, { Component } from "react";
// import axios from "axios";
import Card from "../components/Card";
import "../styles/card.css";

class Projects extends Component {
    render() {
      return (
        <main>
          <h2 className="projects-title">Projects</h2>  
          <div className="card-grid">
            <Card title="GPT Summarizer" body="Use GPT-4 to process lecture PDFs." />
            <Card title="Income Classifier" body="Predict income given adult demographic data." />
            <Card title="Sentiment Analysis" body="Analyze video comments using the Youtube API." />
            <Card title="Blank" body="Description for Blank project 1" />
            <Card title="Blank" body="Description for Blank project 2" />
            <Card title="Blank" body="Description for Blank project 3" />
          </div>
        </main>
      );
    }
  }
  
export default Projects;

// class Projects extends Component {
//     state = {
//         requests: [],
//       };
    
//     componentDidMount() {
//     axios
//         .get("http://localhost:8000/api/v1/mlrequests")
//         .then((res) => {
//         this.setState({ requests: res.data });
//         console.log(res.data);
//         })
//         .catch((error) => {
//         console.error(error);
//         });
//     }

//     render() {
//         const lastRequest = this.state.requests[this.state.requests.length - 1];

//         return (
//             <main>
//             <h2>Adult Income Classifier</h2>
//             <p> Try an input</p>
//             {lastRequest && (
//                 <p>
//                 {" "}
//                 {lastRequest.id} : {lastRequest.response}
//                 </p>
//             )}
//             </main>
//         );
//     }
// }

// export default Projects;