import { useState } from "react";
import Button from "./Button";
import Container from "./Container";
const Card = ({ image, heading, detail, test }) => {
  //   const { image, heading, detail } = props;

  const [user, setUser] = useState("rajesh");

  function updateName(name) {
    setUser(name);
  }

  return (
    <>
      <div style={{ border: "2px solid black", width: "fit-content" }}>
        {test && <h1>this is testing</h1>}
        {!test && <h1>this is not testing</h1>}
        {user}

        <div>
          <img src={image} alt="logo" width={300} height={300} />
        </div>
        <div>
          <h1>{heading}</h1>
          <p>{detail}</p>
        </div>

        <Container>
          <Button handleClick={updateName} />
          <Button handleName={setUser} />
        </Container>

        {/* <button onClick={() => setUser("ramesh")}>Click</button> */}
      </div>
    </>
  );
};

export default Card;
