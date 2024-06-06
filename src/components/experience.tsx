'use client';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionHeading from './section-heading';

export default function Experience() {
  const { ref } = useSectionInView({
    sectionName: 'Experience',
  });

  return (
    <section id="experience" ref={ref} className="scroll-mt-28">
      <SectionHeading>My Experience</SectionHeading>

      <VerticalTimeline lineColor="">
        {experiencesData.map(({ title, location, date, description, icon }, index) => (
          <VerticalTimelineElement
            key={index}
            visible
            contentStyle={{
              background: '#f3f4f6',
              boxShadow: 'none',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              textAlign: 'left',
              padding: '1.3rem 2rem',
            }}
            contentArrowStyle={{ borderRight: '0.4rem solid #9ca3af' }}
            date={date}
            icon={icon}
            iconStyle={{ background: 'white', fontSize: '1.5rem' }}
          >
            <h3 className="font-semibold capitalize">{title}</h3>
            <p className="!mt-0 font-normal">{location}</p>
            <p className="!mt-1 !font-normal text-gray-700">{description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
