const today = new Date();
let day = today.getDay();

let daylist = [
  "Hey Sunday Relaxer! Take it easy and enjoy some well-deserved chill time!😊",
  "Hey there, Monday Mover! Ready to conquer the week ahead?😊",
  "Hey you! You're amazing! Let's make this Tuesday shine!",
  "Hey hey, it's Wednesday! Time to orchestrate some success!",
  "Hey, Thursday Trailblazer! Keep sparkling as you pave the way!",
  "Hey Friday Friend! Let's kick off the weekend with a bang!",
  "Hey Weekend Warrior! Ready for some epic adventures?",
];

let Myday = () => {
  return <div>{daylist[day]}</div>;
};

export default Myday;
