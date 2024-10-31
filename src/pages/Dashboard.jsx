import { HiCurrencyDollar, HiFolder, HiOutlineCash, HiOutlineEye, HiOutlineTrash, HiUser, HiUserAdd } from 'react-icons/hi';
import { clientData, revenuData, projectData, usersData, projectListData } from '../data';
import Card from '../components/Card'; // Assuming Card component is in the same folder
import DataTable from '../components/DataTable'
import { Link } from 'react-router-dom';


const Dashboard = () => {
 

  return (
    <div className='mt-6'>
      <h1 className='text-2xl font-semibold  text-gray-600'>Overview</h1>

      {/* Cards Container */}
      <div className='w-full grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 md:gap-3 mt-5'>
        
        {/* 1st Card for Clients */}
        <Link to='/clients'>
        <Card 
          icon={HiUser}
          title="Total Clients"
          value={1320}
          data={clientData}
          dataKey="clients"
          color="#0891b2"
          text="text-[#0891b2]"
          percentageChange="3.5% of last month"
        />
        </Link>
        {/* 2nd Card for Revenue */}
        <Link to='/'>
        <Card 
          icon={HiCurrencyDollar}
          title="Revenue"
          value={`$5280`}
          data={revenuData}
          dataKey={`$`}
          color="#34d399"
          text="text-[#34d399]"
          percentageChange="1.23% of last week"

        />
        </Link>
        {/* 3rd Card for Projects */}
        <Link to='/projects'>
        <Card 
          icon={HiFolder}
          title="Total Projects"
          value={86}
          data={projectData}
          dataKey="project"
          color="#D1ACD1"
          text="text-[#D1ACD1]"
          percentageChange="0.85% of last month"

        />
        </Link>
        {/* 4th  Card for signup */}
        <Link to=''>
        <Card 
          icon={HiUserAdd}
          title="New Signups"
          value={230}
          data={usersData}
          dataKey="user"
          color="#ca637d"
          text="text-[#ca637d]"
          percentageChange="4.27% of last week"

        />
        </Link>

       
      </div>


      {/* Table */}
      <div className='mt-4'>
        <DataTable 
        heading='Projects List' 
        noRowsPerPage={4} 
        columns={projectListData.columns.slice(0, 4)} 
        actions={projectListData.actions}  
        data={projectListData.data} 
        showBtn={false} />
      </div>
    </div>
  );
};

export default Dashboard;
