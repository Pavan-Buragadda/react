export function CurrentTime() {
  let time = new Date();
  return (
    <p>
      This is current time : {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
}
