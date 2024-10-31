import DataTable from "../components/DataTable"
import { clientsDataList } from "../data"

const Clients = () => {
  return (
    <div className='mt-6'>

    <DataTable
    heading='Clients List' 
    noRowsPerPage={8} 
    columns={clientsDataList.columns} 
    actions={clientsDataList.actions}  
    title={clientsDataList.title}
    data={clientsDataList.data} />

  </div>

  )
}

export default Clients