import { Button, Checkbox, TextField } from '@mui/material';
import logo from '../assets/logo.png'; 
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = () => {
    navigate('/')
  }

  return (
    <div className='flex  flex-col gap-9 p-8 justify-between items-center w-full h-screen'>
      <img className=' w-32 md:w-56' src={logo} alt="" />
       <div className='flex flex-col items-center gap-8'>
       <div className='p-4 w-96 flex flex-col gap-4 items-center border rounded-md'>
        <h1 className='text-xl font-semibold text-gray-700'>Welcome back</h1>
        <div className='flex w-full flex-col gap-2 items-start'>
        <TextField fullWidth required id="outlined-basic" label="Email" variant="outlined" />
        <TextField fullWidth required type='password' id="outlined-basic" label="Password" variant="outlined" />

        <div className='flex w-full justify-between'>
        <Button
              variant="text"
              size="small"
              disableElevation
              sx={{  textTransform: "none" }}
              
            >
              Forget My Password
            </Button>  

           <span>
           <Checkbox size='small' defaultChecked />
           <span className='text-sm text-gray-500'>Remember me</span>
           </span>

        </div>
        </div>
        </div>
        <Button
              variant="contained"
              size="large"
              disableElevation
              sx={{ width:'fit-content', backgroundColor: '#626bf7', paddingX: "24px" }}
              onClick={()=> handleLogin()}
            >
              Login
            </Button>

       </div>


        <Footer />

    </div>
  )
}

export default Login