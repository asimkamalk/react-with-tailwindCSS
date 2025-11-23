// My Component
const MyComponent = (props) => {
  const { children, bgColor, height } = props;
  console.log(children);
  return (
    <div
      style={{
        background: bgColor,
        height: height + "px",
      }}
    >
      <div>This is my componenet</div>
      <div>{children}</div>
    </div>
  );
};

export default MyComponent;
