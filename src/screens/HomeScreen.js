import React from 'react';
import {Box, Card, CardActionArea,Typography} from '@material-ui/core';
import {useStyles} from '../styles';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import Logo from '../components/Logo';
export default function HomeScreen() {
    const styles =useStyles();
    return (
             <Card>

               <CardActionArea>
                <Box className={[styles.root,styles.red]}>
                <Box className={[styles.main,styles.center]}>
                    
                    <Typography component="h6" variant="h6">
                      Fast & Easy
                    </Typography>
                    <Typography component="h1" variant="h1">
                      Order <br/> &Pay <br/> here
                    </Typography>
                    <TouchAppIcon fontSize="large"></TouchAppIcon>
               </Box>
               <Box className={[styles.center,styles.green]}>
                   <Logo large></Logo>
                   <Typography component="h5" variant="h5">
                       Touch to Start
                   </Typography>
               </Box>
               </Box>
            </CardActionArea>
        </Card>
        
        
        );
}

