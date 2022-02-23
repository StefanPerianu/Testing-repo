import "./Light.css";

function Light() {
  let lightsOn = false;

  function toggleLights() {
    lightsOn = !lightsOn;
  }

  return (
    <div>
      {/* <div className='lights' style={{backgroundColor: lightsOn ? 'yellow' : 'black'}}></div> */}
      <div
        className={`lights ${lightsOn ? "yellow" : null}`}
        onClick={toggleLights}
      ></div>
    </div>
  );
}

export default Light;
