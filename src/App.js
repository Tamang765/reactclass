import { useState } from "react";
import "./App.css";
import Form from "./component/Form";
import Testing from "./component/MapCard";
import { data, hello } from "./assets/data";
import PropCheck from "./component/PropCheck";
function App() {
  console.log(data);
  const [user, setUser] = useState("");

  function updateName(name) {
    console.log(name, "this is name");
    setUser(name);
  }

  const [name, setName] = useState("rajesh");

  return (
    <>
      {/* <div
        className=""
        style={{
          background: "white",
        }}
      >
        <h1>hello {user}</h1>
        <div style={{ display: "flex", gap: "20px" }}>
        <Card
          test
          image={
            "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
          }
          heading={"Girl Taking Photo"}
          detail={"this is detail"}
        />

        <Card
          image={
            "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
          }
          heading={"Man With Eye"}
          detail={" Man With Eyec detail"}
        />

        <Card
          image={
            "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
          }
          heading={"Cute Cat"}
          detail={"Cat in Hat detail"}
        />
      </div>

        <button onClick={() => updateName("rajesh")}>Change</button>

        <Form />




      </div> */}
      <div>
        {data.slice(0, 2).map((item) => {
          return (
            <Testing
              key={item.id}
              id={item.id}
              title={item.title}
              image={item?.image}
              propcheck
            />
          );
        })}

        <PropCheck />
      </div>
    </>
  );
}

export default App;
