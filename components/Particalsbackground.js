import Particals from "react-tsparticles";
const Particalsbackground = () => {
  return (
    <div>
      <Particals
      strategy="lazyOnload"
        options={{
          // background:{
          //   color: '#fff',
          // },
          fpsLimits: 60,
          // interactivity: {
          //   detectsOn: 'canvas',
          //   events:{
          //     resize:true
          //   },
          // },
          particles: {
            color: {
              value: "#ffffff",
            },
            number: {
              density: {
                enable: true,
                area: 1080,
              },
              limit: 0,
              value: 500,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.07,
                speed: 1,
                sync: false,
              },
              random: {
                enable: true,
                minimumValue: 0.07,
              },
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: {
                enable: true,
                minimumValue: 0.07,
              },
              value: 1,
            },
          },
        }}
      />
    </div>
  );
};

export default Particalsbackground;
