import { HiOutlineTrendingUp } from 'react-icons/hi';
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';

const Card = ({ icon: Icon, title, value, data, dataKey ,color,text, percentageChange }) => {
  return (
<div className='p-4 rounded-md bg-white shadow-sm flex flex-col justify-between 
min-h-32 transform-gpu hover:scale-105 transition-transform duration-300 ease-in-out'>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center space-x-2 text-gray-500'>
            <Icon className={`w-5 h-5 ${text}`} />
            <h6 className='text-sm'>{title}</h6>
          </div>
          <h2 className='font-bold text-2xl text-gray-600'>{value}</h2>
        </div>

        {/* Chart */}
        {data && (
          <div className='w-24 h-16 '>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <Tooltip 
                  contentStyle={{ background: 'transparent', border: 'none' }}
                  labelStyle={{ display: 'none' }}
                  position={{ x: -5, y: 35 }}
                />
                <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2}  dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

        )}
      </div>

      {/* Percentage Change */}
      <p className='text-sm text-gray-600 flex items-center space-x-2'>
        <HiOutlineTrendingUp className={`w-5 h-5 ${text}`} />
        <span><span className={`${text} font-semibold`}>{percentageChange}</span> </span>
      </p>
    </div>
  );
};

export default Card;
