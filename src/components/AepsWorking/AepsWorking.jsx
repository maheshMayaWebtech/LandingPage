import React, { useState } from "react";
import "../LandingForm/index.css";
import { fifthArr } from "../../constants/constant";

const AepsWorking = ({ handleOpen }) => {
  
  return (
    <div className="fifthSection">
      <div className="fifthTop">
        <img
          src="https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721299109/MayaWebTech/vairgdv5v7hqbpree4q4.png"
          width={100}
          className="work"
        />
        <h1>AEPs Working</h1>
        <h3>How Does Our AePS Software Work?</h3>
      </div>
      <div className="fifthMain">
        <div className="fifthImageSection">
          {fifthArr.map((item) => {
            return (
              <div key={item.id} className="fifthImageConatiner">
                <img src={item.url} />
                <div
                  className="fifthImageBullets"
                  style={{ borderLeft: `1.5px solid ${item.color}` }}
                >
                  {" "}
                  <ul>
                    {item?.data?.map((lists, index) => {
                      return (
                        <li key={index}>
                          {lists}
                          {item.subData && (
                            <ul style={{ paddingLeft: "10px" }}>
                              {item?.subData.map((subItem, ind) => {
                                return (
                                  <li key={ind} style={{ marginTop: "3px" }}>
                                    {subItem}
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        <div className="fifthImageSectionMobile">
          {fifthArr.map((item, ind) => {
            return (
              <div key={ind} className="fifthImageItem">
                <img src={item.url} alt={`Image for ${item.id}`} />
                <ul>
                  {item?.data?.map((lists, index) => {
                    return (
                      <li key={index}>
                        {lists}
                        {item.subData && (
                          <ul style={{ paddingLeft: "10px" }}>
                            {item?.subData.map((subItem, subInd) => {
                              return (
                                <li key={subInd} style={{ marginTop: "3px" }}>
                                  {subItem}
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AepsWorking;
