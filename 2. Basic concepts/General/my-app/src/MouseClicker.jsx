export function MouseClicker() {
  function handleClick(event) {
    console.log("Button clicked! Name:", event.target.name);
  }
  function handleImageClick(event) {
    console.log("Image clicked! Src:", event.target.src);

    event.stopPropagation();
  }
  return (
    <button name="one" onClick={handleClick}>
      <img
        src="https://th.bing.com/th/id/R.155491a59b41f736bc89a833575c12a6?rik=U2IMiZjpe%2blqWw&pid=ImgRaw&r=0"
        width={"20px"} height={"20px"}
        onClick={handleImageClick}
      />
      Click me!!!
    </button>
  );
}
