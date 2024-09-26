import React from "react";
let greet;
let date = new Date();
let hour = date.getHours();
if (hour < 12) {
  greet = "🌼 Good Morning!";
} else if (hour < 18) {
  greet = "🌤️ Good Afternoon!";
} else {
  greet = "🌇 Good Evening!";
}
const Greetings = () => {
  return <div>🙏 Namaste! {greet}</div>;
};

export default Greetings;
