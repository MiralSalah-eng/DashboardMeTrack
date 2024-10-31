import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField } from '@mui/material';
import { useState } from 'react';

const AddNewForm = ({ columns, title , handleNewTaskSubmit }) => {

  const [open, setOpen] = useState(true);
  const [status, setStatus] = useState("Not Started");
  const [formData, setFormData] = useState({});

  const handleClose = () => setOpen(false); // Function to close modal

  const handleInputChange = (header, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [header]: value,
    }));
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
    handleInputChange('Status', event.target.value); // Update formData with new status
  };

  const handleSubmit = () => {
    if (handleNewTaskSubmit){ 
      handleNewTaskSubmit(formData)
  }};

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box>
          <div className='px-8 py-6 absolute top-[50%] rounded-lg left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white'>
            <h6 className='mb-6 font-semibold text-base'>Add new {title}</h6>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
            {columns.map((col, index) => {
                if (col.header !== "Status" && col.header !== "Image") {
                  return (
                    <TextField
                      key={index}
                      label={col.header}
                      variant="outlined"
                      onChange={(e) => handleInputChange(col.header, e.target.value)}
                    />
                  );
                } else if (col.header === "Status") {
                  return (
                    <FormControl key={index} sx={{ minWidth: 120 }}>
                      <InputLabel id="status-selection">Status</InputLabel>
                      <Select
                        labelId="status-selection"
                        label="Status"
                        onChange={handleStatusChange}
                        value={status}
                      >
                        <MenuItem value={"Done"}>Done</MenuItem>
                        <MenuItem value={"In Review"}>In Review</MenuItem>
                        <MenuItem value={"Working"}>Working</MenuItem>
                        <MenuItem value={"Not Started"}>Not Started</MenuItem>
                      </Select>
                    </FormControl>
                  );
                }
                return null; // In case it's "Image" or any other non-handled condition
              })}


              <Button 
              variant='outlined' 
              onClick={handleClose}
              disableElevation
              sx={{paddingX:"20px"}}>
              Cancel</Button>

              <Button 

              variant='contained' 
              onClick={handleSubmit}
              disableElevation
              sx={{backgroundColor:'#626bf7', paddingX:"20px"}}>
                Add</Button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default AddNewForm;
