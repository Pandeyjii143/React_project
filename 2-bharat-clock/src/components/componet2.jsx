function P2() {
  let date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();

  return (
    <p className="lead">
      this is the current time : {date}-{time}
    </p>
  );
}

export default P2;
