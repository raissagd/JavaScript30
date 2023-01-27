const pressed = [];
const secretCode = "raissa";

window.addEventListener("keyup", (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join("").includes(secretCode)) {
    console.log("Congrats! You got the secret code correctly!");
    cornify_add();
  }
  console.log(pressed);
});
