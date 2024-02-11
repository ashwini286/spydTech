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
      backContent: "Back content 1",
    },
    {
      icon: FaGlobe,
      title: "High added Value Services",
      backContent: "Back content 2",
    },
    {
      icon: IoIosLeaf,
      title: "High added Value Services",
      backContent: "Back content 3",
    },
    {
      icon: MdGroups,
      title: "High added Value Services",
      backContent: "Back content 4",
    },
  ];

  return (
    <>
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
      </div>
    </>
  );
}

export default Spydflipcard;
