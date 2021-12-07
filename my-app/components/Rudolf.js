import React from 'react'

export const Rudolf = ({price}) => {

  function colourGradientor(){
    const rgb_beginning = [0, 0, 0];
    const rgb_end = [255, 0, 0];

    const kordaja = (1 - 1200) / 255

    const p = price * kordaja;

    var w = p * 2 - 1;


    var w1 = (w + 1) / 2.0;
    var w2 = 1 - w1;

    var rgb = [parseInt(rgb_beginning[0] * w1 + rgb_end[0] * w2),
      parseInt(rgb_beginning[1] * w1 + rgb_end[1] * w2),
      parseInt(rgb_beginning[2] * w1 + rgb_end[2] * w2)];
    return rgb;
  };

  const rgb = colourGradientor();

  return (
    <>
      <div className="container">
        <div className="artboard">
          <div className="deer">
            <div className="rocking">
              <div className="head">
                <div className="horns">
                  <div className="horn horn-left">
                    <div className="line line-one"></div>
                    <div className="line"></div>
                    <div className="line line-three"></div>
                  </div>
                  <div className="horn horn-right">
                    <div className="line line-one"></div>
                    <div className="line"></div>
                    <div className="line line-three"></div>
                  </div>
                </div>
                <div className="ears">
                  <div className="ear ear-left"></div>
                  <div className="ear ear-right"></div>
                </div>
                <div className="eyes">
                  <div className="eye eye-left"></div>
                  <div className="eye eye-right"></div>
                </div>
                <div className="nose" style={{
                  backgroundColor: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
                }}></div>
              </div>
              <div className="body">
                <div className="shadow"></div>
                <div className="hooves">
                  <div className="hoof-one">
                    <div className="line"></div>
                    <div className="anim-part">
                      <div className="circle">
                        <div className="circle">
                          <div className="circle">
                            <div className="circle">
                              <div className="circle circle-last"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hoof-two">
                    <div className="line-one"></div>
                    <div className="line-two"></div>
                  </div>
                </div>
              </div>
              <div className="tail">
                <div className="circle">
                  <div className="circle">
                    <div className="circle">
                      <div className="circle">
                        <div className="circle"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="legs">
              <div className="leg-left">
                <div className="anim-part">
                  <div className="line"></div>
                </div>
              </div>
              <div className="leg-right">
                <div className="anim-part">
                  <div className="circle">
                    <div className="circle">
                      <div className="circle">
                        <div className="circle">
                          <div className="circle">
                            <div className="circle">
                              <div className="circle">
                                <div className="circle">
                                  <div className="circle circle-last"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="presents">
            <div className="present present-one"></div>
            <div className="present present-two"></div>
            <div className="present present-two present-two-right"></div>
            <div className="present present-three"></div>
          </div>

        </div>
      </div>

    </>
  )
}