import { HiFolder, HiOutlineClock, HiOutlineCog, HiOutlineExclamation } from "react-icons/hi"
import DataTable from "../components/DataTable"
import { projectListData } from "../data"
import Card from '../components/Card'; // Assuming Card component is in the same folder
import { HiCheckBadge } from "react-icons/hi2";



const Projects = () => {

  const statusCards = [
    { status: "Done", icon: HiCheckBadge, color: "#53ad5c", textColor: "text-[#53ad5c]" },
    { status: "Working", icon: HiOutlineCog, color: "#fbbf24", textColor: "text-[#fbbf24]" },
    { status: "In Review", icon: HiOutlineClock, color: "#f87171", textColor: "text-[#f87171]" },
    { status: "Not Started", icon: HiOutlineExclamation, color: "#6b7280", textColor: "text-[#6b7280]" }
  ];



  return (
    <div className='mt-6 '> 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-6 gap-4">
        {statusCards.map(({ status, icon, color, textColor }) => (
      <Card
        key={status}
        icon={icon}
        title={status}
        value={projectListData.data.filter(project => project.status === status).length}
        color={color}
        text={textColor}
        percentageChange={(projectListData.data.filter(project => project.status === status).length / projectListData.data.length) * 100 +'%'+ ' '+'of projects'}
      />
    ))}
  </div>
    <div className="text-[#53ad5c]"></div>
      <DataTable 
      heading='Projects List' 
      noRowsPerPage={8} 
      columns={projectListData.columns} 
      actions={projectListData.actions}  
      title={projectListData.title}
      data={projectListData.data} />

    </div>


  )
}

export default Projects