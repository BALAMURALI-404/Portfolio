import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const EduCard = ({ Edu }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: 'rgba(50,50,50,0.3)', color: '#fff', backdropFilter:'blur(4px)' }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={Edu.duration}
      dateClassName='edu-date'
      iconStyle={{ background: Edu.iconbg }}
      icon={
        <div className='flex justify-center items-center w-40px h-40px'>
          <img
            src={Edu.icon}
            alt={Edu.institution}
            loading='lazy'
            className=' object-scale-down rounded-full'
          />
        </div>
      }
    >
      <div  >
        <h3 className=' lg:text-[24px] font-bold'>{Edu.degree}</h3>
        {Edu.branch && (
          <h4 className='text-white lg:text-[20px] font-bold' style={{ margin: 0 }}>
            {Edu.branch}
          </h4>
        )}
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
          {Edu.institution}
        </p>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
          {Edu.percentage}
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

export default EduCard;
