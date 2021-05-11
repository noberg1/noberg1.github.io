import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Våra tjänster',
    paragraph: 'Vi erbjuder dig ett brett utbud av olika utvecklingstjänster, allt från en simpel hemsida till ett avancerat affärsystem eller mobilapplikation. Bufferleaf drivs av två stycken blivande civilingenjörer inom teknisk datavetenskap.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses} id="tjanster">
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Android och Iphone
                  </div>
                <h3 className="mt-0 mb-12">
                  Apputveckling
                  </h3>
                <p className="m-0">
                Vi hjälper dig med allt från idé till färdig produkt. Självklart skapar vi både en IOS och Android app utan extra kostnad.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/app.png')}
                  alt="Features split 01" />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Oberoende av plattform
                  </div>
                <h3 className="mt-0 mb-12">
                  Mjukvaruutveckling
                  </h3>
                <p className="m-0">
                Vi bygger även annan mjukvara än enbart appar. Det spelar ingen roll om du riktar dig mot MacOS, Windows eller Linux.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/mjuk.png')}
                  alt="Features split 02"/>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Färdig CMS eller egenutvecklad?
                  </div>
                <h3 className="mt-0 mb-12">
                  Webbutveckling
                  </h3>
                <p className="m-0">
                Vi driver även webbyrån Sino Media där vi arbetar med webbutveckling, sökmotoroptimering och digital marknadsföring. Vi kan både utveckla en simpel sida i wordpress eller rent av ta fram en egen CMS åt ditt företag.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/webb.png')}
                  alt="Features split 03"/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;