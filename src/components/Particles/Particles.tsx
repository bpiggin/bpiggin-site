import React from "react";
import ReactParticles from "react-particles-js";
import "./Particles.css";

const Particles: React.FunctionComponent = (props) => {
  return (
    <ReactParticles
      width="100%"
      height="100%"
      className="particles"
      params={{
        background: {
          color: "#ffe8bf",
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 600,
            },
          },
          color: {
            value: ["#fff", "#ffe8bf", "#f5c266"],
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#fff",
            },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 0.2,
              opacity_min: 0,
              sync: false,
            },
          },
          size: {
            value: 50,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 5,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "top",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 600,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
            },
            onclick: {
              enable: false,
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 250,
              size: 0,
              duration: 2,
              opacity: 0,
            },
            repulse: {
              distance: 400,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default Particles;
