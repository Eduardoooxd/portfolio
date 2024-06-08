'use client';
import { useThemeContext } from '@/context/theme-context';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useInView } from 'react-intersection-observer';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionHeading from './section-heading';

export default function Experience() {
  const { ref } = useSectionInView({
    sectionName: 'Experience',
  });

  const { ref: timelineInViewRef, inView: timelineInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { theme } = useThemeContext();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28">
      <SectionHeading>My Experience</SectionHeading>

      <div ref={timelineInViewRef}>
        <VerticalTimeline lineColor="">
          {experiencesData.map(({ title, location, date, description, icon }, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '0.4rem solid #9ca3af'
                    : '0.4rem solid rgba(255, 255, 255, 0.5)',
              }}
              date={date}
              icon={icon}
              iconStyle={{
                background: theme === 'light' ? 'white' : 'rgba(55, 65, 81, 1)',
                fontSize: '1.5rem',
              }}
              visible={timelineInView}
            >
              <h3 className="font-semibold capitalize">{title}</h3>
              <p className="!mt-0 font-normal">{location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
