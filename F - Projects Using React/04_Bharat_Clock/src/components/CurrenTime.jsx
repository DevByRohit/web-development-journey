function CurrentTime() {
  let date = new Date();
  let hour = date.getHours() - 12;
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let ampm = hour >= 12 ? "PM" : "AM";

  return (
    <h4>
      This is the current time : {hour}:{minute}:{second}
    </h4>
  );
}

export default CurrentTime;
