const obj = {
  name: "Asim",
  occu: "Learner",
};

const { name, occu } = obj;
console.log(name);
console.log(occu);

const Message = (props) => {
  const { text, bgColor } = props;
  console.log(text, bgColor);

  return (
    <div
      style={{
        background: bgColor,
      }}
    >
      {text}
    </div>
  );
};

const Title = () => {
  // console.log("Running title");

  return <div>hello world</div>;
};

const Description = () => {
  // console.log("Running description");

  return <div>This is my second react compoenent</div>;
};

function App() {
  return (
    <>
      <Title />
      <Title />
      <Title />
      <Description />
      <Message text="this is my first prop" bgColor="red" />
    </>
  );
}

export default App;
