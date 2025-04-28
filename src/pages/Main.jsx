import {Stack,Typography,Switch} from '@mui/material'
import { useState } from 'react'
import { styled } from '@mui/material/styles';
import UpData from '../components/UpData'
import DownData from '../components/DownData'
export default function MainPage() {

    const [checked, setChecked] = useState(false)

    const handleChange = (e) => {
        setChecked(e.target.checked)
        console.log(checked)
    }



    const IOSSwitch = styled((props) => (
      <Switch focusVisibleClassName=".Mui-focusVisible" 
      checked={checked}
       onChange={handleChange} disableRipple {...props} />
    ))(({ theme }) => ({
      width: 58,
      height: 34,
      padding: 7,
      '& .MuiSwitch-switchBase': {
        padding: 1,
        '&.Mui-checked': {
          transform: 'translateX(24px)',
          color: '#fff',
          '& .MuiSwitch-thumb': {
            backgroundColor: 'white', // bolinha ativa
          },
          '& + .MuiSwitch-track': {
            backgroundColor: 'linear-gradient(to left, hsl(210, 78%, 56%) , hsl(146, 68%, 55%))', // trilha ativa
          },
        },
        '& .MuiSwitch-thumb': {
          backgroundColor: 'hsl(228, 28%, 20%)', // bolinha desativada
        },
      },
      '& .MuiSwitch-thumb': {
         margin: 8,
        width: 15,
        height: 15,
      },
      '& .MuiSwitch-track': {
        borderRadius: 20,
        background: 'linear-gradient(to right, hsl(210, 78%, 56%) , hsl(146, 68%, 55%))', // trilha desativada
        opacity: 1,
      },
    }));
    
    

    return (
        <Stack component='main'
         className={checked ? 'light' : 'dark' }
          padding={{xs: ' 1.5em 1em', lg: '2em 5em'}} margin='0 auto'>
            <Stack component='header' sx={{display: 'flex',
                flexDirection: {xs: 'column', lg: 'row'},
                justifyContent: {xs: 'flex-start', lg: 'space-between', margin: '1em 0 '}}}>
               <Stack id='headTop-info'>
               <Typography variant='h1' 
               fontSize={{xs:'1.5em', lg:'1.7em'}} marginY={1} >  Social Media Dashboard</Typography>
               <Typography variant='p'>Total Followers: 23,004</Typography>

               <Stack marginY={2} display={{xs:'block', lg:'none'}}>
                  <hr/>
               </Stack>
               </Stack>

               <Stack id='DarkMode-toggle' sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: {xs: 'space-between', lg: 'flex-start'}}}>
               <Typography variant='h2' fontSize='1em'>Dark Mode</Typography>
               <Stack marginRight={1}>
               <IOSSwitch/>
               </Stack>
               </Stack>
            </Stack>
            <Stack component='section' className='top-container'>
               {
                UpData.map((item, index) => {
                   return (
                      <Stack component='article' className='top-cards'  key={index}>
                         <Stack  sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', 
                           justifyContent:'space-between', padding: '1em 0 '}}>
                           <div> <img src={item.icon} width='30px' alt='social icon'/></div>
                            <Typography variant='h3' marginLeft='1em' fontSize={{xs: '1em', lg: '1.4em'}}  > {item.title}</Typography>
                         </Stack>
                         <Stack>
                         <Typography variant='h3' > {item.followN}</Typography>
                            <Typography variant='p' fontSize='2em' letterSpacing='4px'> {item.subTitle}</Typography>
                         </Stack>
                         <Stack className='upAndDown'>
                           
                            <Typography variant='p' marginY={1} marginRight='20px'>  <img src={item.arrowIcon} width='15px' alt='arrow icon'/>  <strong>{item.upOrDown}</strong></Typography>
                         </Stack>
                      </Stack>
                   )
                })
               }
            </Stack>
            <Stack component='section' >
            <Typography variant='h3' fontSize='2em'  className='sub-title' marginY='1em'>Overview Today</Typography>
              <Stack className='down-container'>
              {
                DownData.map((item, index) => {
                   return (
                      <Stack className='down-cards' marginY='1em' padding='1em'  component='article'   key={index}>
                         <Stack sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom: '2.5em'}}>

                         <Typography variant='h3' fontSize='1.3em'> {item.title}</Typography>
                            <img src={item.socialIcon} width='30px' alt='social icon'/>
                         </Stack>
                         <Stack  sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
                            <Typography variant='h4'> {item.num}</Typography>
                            <Stack className='mini'>
                            
                            <Typography className='card' variant='h4' fontSize='1em'> <img src={item.arrowIcon} style={{margin: '0 .5em'}} width='15px' alt='arrow icon'/> <strong>{item.porcent}</strong> </Typography>
                         </Stack>
                         </Stack>
                      </Stack>
                   )
                })
               }
              </Stack>
            </Stack>

        </Stack>
    )
}