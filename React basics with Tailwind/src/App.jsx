import Title from "./Title.jsx";
import Description from "./Description.jsx";
import Message from "./Message.jsx";
import Box from "./Box.jsx";
import MyCompoonent from "./MyComponent.jsx";
import TailwindBasics from "./TailwindBasics.jsx";

const App = () => {
  return (
    // TailwindCSS started here

    <TailwindBasics text="One" styles="bg-red-700 text-rose-300" />

    // <div>
    //   Hello
    //   <Title />
    //   <Title />
    //   <Title />
    //   <Description />
    //   <br />
    //   {/* Props */}
    //   <Message text="This is my first props" bgColor="red" />
    //   <Message text="Hi!" bgColor="green" />
    //   <Message text="Bye!" bgColor="yellow" />
    //   <br />
    //   {/* Box */}
    //   <Box
    //     label="My name is Asim Kamal"
    //     bgColor="red"
    //     fontColor="white"
    //     large={true}
    //   />
    //   <Box
    //     label="another box"
    //     bgColor="purple"
    //     fontColor="white"
    //     large={false}
    //   />
    //   <Box
    //     label="Green Box"
    //     bgColor="green"
    //     fontColor="purple"
    //     // large will be undefined
    //   />
    //   <br />
    //   {/* My Component */}
    //   <MyCompoonent bgColor="yellow" height={90}>
    //     Hello
    //   </MyCompoonent>
    //   <MyCompoonent bgColor="lavender" height={40}>
    //     Bye
    //   </MyCompoonent>
    // </div>
  );
};

export default App;
