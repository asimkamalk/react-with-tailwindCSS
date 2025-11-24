// import MyComponent from "./MyComponent";

// const obj = {
//   name: "Asim",
//   occu: "Learner",
// };

// const { name, occu } = obj;
// console.log(name);
// console.log(occu);

// const PracticeProps = (porps) => {
//   const { exampleProps } = porps;
//   return <div>just practicing props {exampleProps}</div>;
// };

// const Message = (props) => {
//   const { text, bgColor, fontColor } = props;
//   console.log(text, bgColor);

//   return (
//     <div
//       style={{
//         background: bgColor,
//         color: fontColor,
//       }}
//     >
//       {text}
//     </div>
//   );
// };

// const Title = () => {
//   // console.log("Running title");

//   return <div>hello world</div>;
// };

// const Description = () => {
//   // console.log("Running description");

//   return <div>This is my second react compoenent</div>;
// };

// // Box component

// const Box = (props) => {
//   const { label, bgColor, textColor, large } = props;
//   console.log(large);

//   return (
//     <div
//       style={{
//         backgroundColor: bgColor,
//         color: textColor,
//         fontSize: large ? "40px" : "12px",
//       }}
//     >
//       {label}
//     </div>
//   );
// };

function App() {
  return (
    <>
      {/* <Title />
      <Title />
      <Title />
      <Description />
      <Message text="this is my first prop" bgColor="red" fontColor="white" />
      <Message text="hi" bgColor="green" fontColor="white" />
      <Message text="bye" bgColor="blue" fontColor="white" />
      <br />
      <br />
      <PracticeProps exampleProps="This is my test props it comes from App" />

      <br />
      <br />
      <br />

      <Box
        label="my name is Asim"
        bgColor="CornflowerBlue"
        textColor="White"
        large={true}
      />
      <Box
        label="another one"
        bgColor="lavender"
        textColor="purple"
        large={false}
      />
      <Box label="green stuff" bgColor="green" textColor="white" />
      <br />
      <br />
      <br />
      <MyComponent bgColor="yellow" height={90}>
        Hello!
      </MyComponent>
      <MyComponent bgColor="lavender" height={40}>
        Good Bye
      </MyComponent> */}
    </>
  );
}

export default App;
