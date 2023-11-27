import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const NavBar = () => {
    return (
        <AppBar>
            <Toolbar sx={{ justifyContent: 'space-between'}}>
                <div style={{ display: 'flex', alignItems: 'center'}}>
                    <AccountBoxIcon sx={{mr: 1, display: { xs: 'none', md: 'flex'}}} />
                    <Typography variant='h5'>
                        News
                    </Typography>
                </div>
                <Typography variant='h6'>
                    Welcome to my Super Cool Website
                </Typography>
                <div>
                    <Button color="inherit">Login</Button>
                    <Button color='inherit'>About</Button>
                    <Button color='inherit'>Contact Me</Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;