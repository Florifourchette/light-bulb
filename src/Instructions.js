import React from "react";

function instructions() {
  return (
    <>
      <div className="block">
        <h1>The Light Bulb</h1>
        Your goal: switch the lightbulb on
        <br />
        <ul>
          <li>
            In this component (turn it into a class, or leave it as a function),
            create a state that will keep track of whether the lightbulb is
            turned on or not
          </li>
          <li>
            Put an onClick handler on the <strong>turn me on</strong> button
            that will change the lightbulb's state from on to off
          </li>
          <li>
            Using the state as a toggler, conditionaly change the className of
            the lightbulb's holding div from <em>"block"</em> to{" "}
            <em>"block night"</em>
          </li>
          <li>
            Let's think about the planet and not be wasteful. Make sure that the
            lightbulb turns itself off after 5 seconds
          </li>
          <li>
            Using another state, keep track of how many times the light bulb has
            been turned on. After 10 times, tell the user he used his daily
            electricity limit and should light a candle instead.
          </li>
        </ul>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://reactjs.org/docs/state-and-lifecycle.html"
        >
          Help
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.pluralsight.com/guides/applying-classes-conditionally-react"
        >
          Help
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://en.reactjs.org/docs/hooks-state.html"
        >
          Help
        </a>
      </div>
    </>
  );
}

export default instructions;
