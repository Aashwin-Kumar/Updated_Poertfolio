import Myday from "../helper/Myday";
import Greetings from "../helper/Greetings";
import { logEvent } from "../lib/gtag";

const About = () => {
  return (
    <>
      <div className="flex flex-col shadow-xl leading-8 shadow-sky-300 text-lg lg:text-2xl rounded-lg max-w-5xl lg:max-w-7xl mt-20 mx-auto pb-10 mb-3 text-center font-normal">
        <p className="sm:pb-10 pb-3 lg:font-cursive text-lg sm:text-6xl pt-10">
          <Greetings />
        </p>
        <div className="text-left">
          <div className="mx-auto sm:w-4/5">
            <p
              className="pl-6 pr-6 sm:pr-0 text-align align-paragraph"
              style={{ lineHeight: "1.6" }}
            >
              <span className="inline-block pb-2 lg:pr-1">
                <Myday />
              </span>
              Im Ashwin Kumar, Passionate data enthusiast with a background in
              software engineering and 3+ Years of experiance in digital
              marketing as a<span className="font-bold p-1">Paid Analyst</span>,
              Through this journey, I found my true passion my ❤️ belongs to
              data.
            </p>
          </div>
          <div className="mx-auto sm:w-4/5 pt-3">
            <p
              className="pl-6 text-align pr-6 align-paragraph"
              style={{ lineHeight: "1.6" }}
            >
              With a degree in Information Technology from Pune University, Ive
              spent time polishing my skills in data cleaning, modeling,
              visualization, and predictions. But more than that, Im genuinely
              curious about the stories data can tell. I also firmly believe
              that AI is set to transform the marketing industry,
              revolutionizing how we connect with audiences through hyper
              personalized experiences and data-driven decisions.
            </p>
          </div>

          <div className="mx-auto sm:w-4/5 pt-3">
            <p
              className="pl-6 text-align pr-6 align-paragraph"
              style={{ lineHeight: "1.6" }}
            >
              Now, Im ready for new adventures whether thats a full-time gig or
              some freelance projects. If youre curious to see how we can work
              together so lets connect! 🤝
            </p>
          </div>
        </div>
        {/* <ScrollIntoView selector="#scroll">
        <div className="mx-auto ">
          <FaArrowAltCircleDown className="animate-bounce mx-auto text-3xl text-blue-600"></FaArrowAltCircleDown>
        </div>
      </ScrollIntoView> */}
      </div>
    </>
  );
};

export default About;
