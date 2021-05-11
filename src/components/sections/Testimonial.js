import React from 'react';
import classNames from 'classnames';
import { TaggedContentCard } from 'react-ui-cards';
import { SectionTilesProps } from '../../utils/SectionProps';
import UserCard from '../elements/userCard'
import SectionHeader from './partials/SectionHeader';
import noah from '../../assets/images/noah.JPG';
import simon from '../../assets/images/simon.JPG';
import simon_head from '../../assets/images/simon_head.jpg';
import noah_head from '../../assets/images/noah_head.jpg';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

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

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Hör gärna av dig',
    paragraph: 'Oavsett vad det rör kan du alltid höra av dig till oss. Vi tar inte betalt för frågor eller lite råd.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div id="kontakt" className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
          <UserCard name="Noah Öberg" position="Delägare" profile={noah} header={noah_head} emaillink="mailto:noah.oberg@bufferleaf.se" phonelink="tel:0705544737" linkedin="https://www.linkedin.com/in/noah-%C3%B6berg-10743b158/"/>
          <UserCard name="Simon Rickardsson" position="Delägare" profile={simon} header={simon_head} emaillink="mailto:simon.rickardsson@bufferleaf.se" phonelink="tel:0730867516" linkedin="https://www.linkedin.com/in/simon-rickardsson-71bb2818a/"/>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;