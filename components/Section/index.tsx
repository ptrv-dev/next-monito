import React from 'react';

import style from './Section.module.scss';

interface SectionProps {
  suptitle?: string;
  title: string;
  button?: JSX.Element;
  children: any;
}

const Section: React.FC<SectionProps> = ({
  suptitle,
  title,
  button,
  children,
}) => {
  return (
    <section className={`${style.section}`}>
      <div className="container">
        <div className={`${style.sectionHeader}`}>
          <div className={`${style.sectionHeaderColumn}`}>
            {suptitle && (
              <h4 className={`${style.sectionSuptitle}`}>{suptitle}</h4>
            )}
            <h3 className={`${style.sectionTitle}`}>{title}</h3>
          </div>
          {button && button}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
