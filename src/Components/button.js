const Button = () => {
  const Sample = () => {
    alert("hii");
  };
  const showDetails = (name) => {
    console.log("welcome " + name);
  };
  const Students = () => {
    let s = ["mavin", 340, "Aec"];
    s.map((ele) => {
      console.log(ele);
    });
  };
  return (
    <div>
      <button onClick={Sample}>click me</button>
      <button onClick={() => showDetails("mavin")}>show</button>
      <button onClick={Students}>student details</button>
    </div>
  );
};

export default Button;
