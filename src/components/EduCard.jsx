import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const EduCard = ({ Edu }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={Edu.duration}
      dateClassName='edu-date'
      iconStyle={{ background: Edu.iconbg }}
      icon={
        <div className='flex justify-center items-center w-10px h-10px'>
          <img
            src={Edu.icon}
            alt={Edu.institution}
            className=' object-scale-down rounded-full'
          />
        </div>
      }
    >
      <div>
        <h3 className=' lg:text-[24px] font-bold'>{Edu.degree}</h3>
        {Edu.branch && (
          <h4 className='text-white lg:text-[20px] font-bold' style={{ margin: 0 }}>
            {Edu.branch}
          </h4>
        )}
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
          {Edu.institution}
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

export default EduCard;
