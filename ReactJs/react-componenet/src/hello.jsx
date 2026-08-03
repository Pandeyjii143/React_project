function Hello() {
  let number = 33;
  let fullName = () => {
    return "Ravikishan PAndey";
  };

  return (
    <p>
      {" "}
      messageNO: {number} i am your friend {fullName()}
    </p>
  );
}

export default Hello;
