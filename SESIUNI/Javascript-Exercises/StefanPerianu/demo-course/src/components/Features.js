import Feature from "./Feature";

function Features() {
  return (
    <div className="container">
      <Feature name="Toggle Lights" action="Turn on the lights"></Feature>
      <Feature name="Toggle AC" action="Turn on the AC"></Feature>
      <Feature name="Clean" action="Start vacuming"></Feature>
      <Feature name="Coffee time" action="Make an espresso"></Feature>
    </div>
  );
}

export default Features;
