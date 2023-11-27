import { Button, Box, TextField, Tooltip, Badge, Switch, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import MailIcon from '@mui/icons-material/Mail';
import './App.css';
import NavBar from './NavBar';

function App() {

  return (
    <div>
      <NavBar />
      <Box>
        <Grid container spacing={12} flexDirection={{xs: 'column', md: 'row'}} alignItems='center' minHeight='100vh'>
          <Grid xs display='flex' flexDirection='column'>
            <label>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio delectus, pariatur ducimus dolor error id dolores, cum tempora libero exercitationem dicta inventore repellat qui quas saepe ipsum non voluptates sit.</label>
            <div>
              <TextField fullWidth label='Standard' variant='standard' placeholder='email...'/>
              <TextField fullWidth label='Filled' variant='filled'/> 
              <TextField /> 
              <Tooltip title='Messages'>
                  <Badge badgeContent={4} color='primary'>
                    <MailIcon />
                  </Badge>
              </Tooltip>
            </div>
          </Grid>
          <Grid xs display='flex' alignItems='center'>
            <img style={{height: '10em'}} src="http://placekitten.com/200/300" alt="" />
            <FormControl fullWidth>
              <InputLabel>Age</InputLabel>
              <Select>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid xs>
            <label>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum suscipit itaque eius explicabo fuga corrupti ea aliquam culpa tempora vero ut, minus impedit asperiores reprehenderit, rem facere temporibus iure unde!</label>
            <div>
              <Button variant='contained'>
                Text
              </Button>
              <Switch />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default App
