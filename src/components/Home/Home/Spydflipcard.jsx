import React from 'react';
import { FaHandshake } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { IoIosLeaf } from "react-icons/io";
import { MdGroups } from "react-icons/md";

import IMG from "../../assets/SpY_D__2_-removebg-preview.png";

function Spydflipcard() {
  const FlipBoxData = [
    {
      icon: FaHandshake,
      title: "High added Value Services",
      frontContent: "Front content 1",
      backContent: "Back content 1",
    },
    {
      icon: FaGlobe,
      title: "Global Approach",
      frontContent: "Front content 2",
      backContent: "Back content 2",
    },
    {
      icon: IoIosLeaf,
      title: "Commitment to a Virtuous Digital Transition",
      frontContent: "Front content 3",
      backContent: "Back content 3",
    },
    {
      icon: MdGroups,
      title: "Human and Talents at the Heart of our Development",
      frontContent: "Front content 4",
      backContent: "Back content 4",
    },
  ];

  return (
    <div className="et_pb_row et_pb_row_2 et_pb_row_4col">
      {FlipBoxData.map((flipBox, index) => (
        <div key={index} className="et_pb_column et_pb_column_1_4 et_pb_column_3  et_pb_css_mix_blend_mode_passthrough">
          <div className="et_pb_module ba_flipbox ba_flipbox_0">
            <div className="et_pb_module_inner">
              <div className="dtq-module dtq-flipbox dtq-flipbox--flip dtq-flip-right">
                <div className="dtq-flipbox-inner">
                  <div className="dtq-flipbox-card-container">
                    <div className="dtq-flipbox-front-card dtq-flipbox-card">
                      <div className="dtq-flipbox-card-inner">
                        <div className="dtq-flipbox-front-content dtq-flipbox-content">
                          <div className="dtq-flipbox-figure-front">
                            <div className="dtq-flipbox-icon dtq-flipbox-icon-front">
                              <flipBox.icon />
                            </div>
                          </div>
                          <div className="dtq-flipbox-content-wrap">
                            <h2 className="dtq-flipbox-title-front">{flipBox.title}</h2>
                            <div className="dtq-flipbox-content">{flipBox.frontContent}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dtq-flipbox-back-card dtq-flipbox-card">
                      <div className="dtq-flipbox-card-inner">
                        <div className="dtq-flipbox-back-content dtq-flipbox-content">
                          <div className="dtq-flipbox-figure-back">
                            <div className="dtq-flipbox-img-back">
                              <img decoding="async" src={IMG} alt="" />
                            </div>
                          </div>
                          <div className="dtq-flipbox-content-wrap">{flipBox.backContent}</div>
                        </div>
                      </div>
                    </div>
                    <div className="dtq-flank"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <style>
        {`
         .flip-card {
          width: 80%;
          height: 90%;
          
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.6s;
        }
        
        .flip-card:hover {
          transform: rotateY(180deg);
        }
        
        .flip-card-inner {
          width: 100%;
          height: 150px;
          position: absolute;
          transform-style: preserve-3d;
        }
        
        .flip-card-front,
        .flip-card-back {
          width: 100%;
          height: 100%;
          position: absolute;
          backface-visibility: hidden;
          border-radius: 12%;
        }
        
       
        
        .flip-card-back {
          /* background-color: #fff; */
          transform: rotateY(180deg);
        }
        
        .card-link {
          display: block;
          width: 100%;
          height: 100%;
          padding: 1rem;
          border: 1px solid white;
           border-radius: 0.25rem; 
          text-decoration: none;
          color: inherit;
        }
        
        `}
        </style>
    </div>
    
  );
}

export default Spydflipcard;
