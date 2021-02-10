import React from "react";
import "./fizzbuzz.css";
function Fizzbuzz(props) {
  return (
    <div className="fizzBuzz">
      <table>
        <tr>
          <td>Input</td>
          <td>Output</td>
        </tr>
        {props.props.split(",").map((i) => {
          if (isNaN(i) || i === "") {
            return (<tr>
              <td>{i}</td>
              <td>{"Invalid Item"}</td>
            </tr>)
          } else {
            if (i % 3 === 0 && i % 5 === 0) {
              return (
                <tr>
                  <td>{i}</td>
                  <td>{"FizzBuzz"}</td>
                </tr>
              );
            } else if (i % 3 === 0) {
              return (
                <tr>
                  <td>{i}</td>
                  <td>{"Fizz"}</td>
                </tr>
              );
            } else if (i % 5 === 0) {
              return (
                <tr>
                  <td>{i}</td>
                  <td>{"Buzz"}</td>
                </tr>
              );
            } else {
              return (
                <tr>
                  <td>{i}</td>
              <td>{"Divided "+i+" by 3"}{"\n"}
              {"Divided "+i+" by 5"}</td>
                </tr>
              );
            }
          }
        })}
      </table>
    </div>
  );
}

export default Fizzbuzz;
