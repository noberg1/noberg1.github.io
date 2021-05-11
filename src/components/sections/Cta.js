import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import { send } from 'emailjs-com';
import { reduce } from 'lodash';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const [sent, setSent] = useState(false);

  const [toSend, setToSend] = useState({
    namn : '',
    email: '',
    meddelande: '',
  });
  
  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_yex8efq',
      'template_rujx1ke',
      toSend,
      'user_zPGAyNsaSFYXangV5Cws6'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });

      setSent(true);
  };
  
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );



  if(!sent){
  return (
         <MDBContainer>
            <MDBRow center>
              <MDBCol center md="6">
                <form onSubmit={onSubmit}>
                  <input value={toSend.namn} onChange={handleChange} name='namn' type="text" id="defaultFormContactNameEx" placeholder="Ditt namn" className="form-control" required/>
                  <br />
                  <input type="email" value={toSend.email} onChange={handleChange} name='email' id="defaultFormContactEmailEx" placeholder="Din epost" className="form-control" required/>
                  <br />
                  <textarea type="text" value={toSend.meddelande} onChange={handleChange} name='meddelande' id="defaultFormContactMessageEx" placeholder="Meddelande"className="form-control" rows="3" required/>
                  <div className="text-center mt-4">
                  <MDBBtn color="transparent"  type="submit">
                    <span style={{color: "white"}}>Skicka mail</span>
                    <MDBIcon style={{color: "white"}} far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
  );
  }
  else{
    return(
      <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <h5 className="center-content"> Tack för ditt mail. Vi återkommer så snart vi kan!</h5>
        </div>
      </div>
    </section>
    );
  }
}
Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;