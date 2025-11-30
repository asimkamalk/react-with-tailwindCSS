const Title = () => {
  return <div>Hello World</div>;
};

const Description = () => {
  return <div>Another component</div>;
};

const App = () => {
  return (
    <div>
      Hello
      <Title />
      <Title />
      <Title />
      <Description />
    </div>
  );
};

export default App;
