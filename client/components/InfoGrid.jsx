import React, { Component } from 'react';
import { Card, Divider, Grid, Paper, Typography, CardMedia, CardContent } from '@material-ui/core'
import styled from 'styled-components'

import circleMusic from '../assets/circleMusic.png'
import circlePen from '../assets/circlePen.png'
import circlePhone from '../assets/circlePhone.png'
import circleSoda from '../assets/circleSoda.png'

import InfoCard from './InfoCard.jsx'


const StyledCard = styled(Card)`
    && { background: #F5B031 };
    width: 20vw;
`;

const Media = styled(CardMedia)`
    height: 12vw;
    width: 12vw;
`;

const StyledGrid = styled(Grid)`
    padding-top: 5%;
`;

class InfoGrid extends Component {
    
    // constructor(props) {
    //     super(props);
    // }
    
    render(){
        
        return( 
            <div className='about_content' style={{width:'80%'}}>
            <Grid container spacing={5} justify='center'>
              <Grid item>
                <InfoCard
                    category='Who?'
                    photo={whoImage}
                    alt_text='who_image'
                    description="This event is hosted by EGaDS! The Electronic Game Developers Society is a student organization at UT Austin.">
                </InfoCard>
              </Grid>
              <Grid item>
                <InfoCard
                    category='Who?'
                    photo={whoImage}
                    alt_text='who_image'
                    description="This event is hosted by EGaDS! The Electronic Game Developers Society is a student organization at UT Austin.">
                </InfoCard>
              </Grid>
              <Grid item>
                <InfoCard
                    category='Who?'
                    photo={whoImage}
                    alt_text='who_image'
                    description="This event is hosted by EGaDS! The Electronic Game Developers Society is a student organization at UT Austin.">
                </InfoCard>
              </Grid>
              <Grid item>
                <InfoCard
                    category='Who?'
                    photo={whoImage}
                    alt_text='who_image'
                    description="This event is hosted by EGaDS! The Electronic Game Developers Society is a student organization at UT Austin.">
                </InfoCard>
              </Grid>
              <Grid item>
                <InfoCard
                    category='Who?'
                    photo={whoImage}
                    alt_text='who_image'
                    description="This event is hosted by EGaDS! The Electronic Game Developers Society is a student organization at UT Austin.">
                </InfoCard>
              </Grid>
              <Grid item>
                <InfoCard
                    category='Who?'
                    photo={whoImage}
                    alt_text='who_image'
                    description="This event is hosted by EGaDS! The Electronic Game Developers Society is a student organization at UT Austin.">
                </InfoCard>
              </Grid>
            </Grid>
        </div>
        );}}

export default InfoGrid;


// export class InfoGrid extends React.Component {
//     render(){
//         return( 
//             <div className='about_content' style={{width:'80%'}}>
//             <Grid container spacing={5} justify='center'>
//               <Grid item>
//                 <InfoCard
//                     category='Who?'
//                     photo={whoImage}
//                     alt_text='who_image'
//                     description="This event is hosted by EGaDS! The Electronic Game Developers Society is a student organization at UT Austin.">
//                 </InfoCard>
//               </Grid>
//               <Grid item>
//                 <InfoCard
//                     category='Who?'
//                     photo={whoImage}
//                     alt_text='who_image'
//                     description="This event is hosted by EGaDS! The Electronic Game Developers Society is a student organization at UT Austin.">
//                 </InfoCard>
//               </Grid>
//               <Grid item>
//                 <InfoCard
//                     category='Who?'
//                     photo={whoImage}
//                     alt_text='who_image'
//                     description="This event is hosted by EGaDS! The Electronic Game Developers Society is a student organization at UT Austin.">
//                 </InfoCard>
//               </Grid>
//               <Grid item>
//                 <InfoCard
//                     category='Who?'
//                     photo={whoImage}
//                     alt_text='who_image'
//                     description="This event is hosted by EGaDS! The Electronic Game Developers Society is a student organization at UT Austin.">
//                 </InfoCard>
//               </Grid>
//               <Grid item>
//                 <InfoCard
//                     category='Who?'
//                     photo={whoImage}
//                     alt_text='who_image'
//                     description="This event is hosted by EGaDS! The Electronic Game Developers Society is a student organization at UT Austin.">
//                 </InfoCard>
//               </Grid>
//               <Grid item>
//                 <InfoCard
//                     category='Who?'
//                     photo={whoImage}
//                     alt_text='who_image'
//                     description="This event is hosted by EGaDS! The Electronic Game Developers Society is a student organization at UT Austin.">
//                 </InfoCard>
//               </Grid>
//             </Grid>
//         </div>

//         // <StyledGrid container spacing={0}> 
//         //     <Grid item xs={6}>
//         //     <StyledCard elevation={0}> 
//         //         <Media 
//         //             image = {circleMusic} 
//         //         />
//         //         <CardContent>
//         //             <Typography variant="h5" align="center" gutterBottom="true">
//         //                 Who
//         //             </Typography>
                    
//         //             <Typography variant="body1" align="center" paragraph="true">
//         //                 This event is hosted by EGaDS! The Electronic Game Developers Society is a student organization at UT Austin.
//         //             </Typography>
//         //         </CardContent>
//         //         </StyledCard>
//         //     </Grid>
//         //     <Grid item xs={6}>
//         //         <StyledCard elevation={0}>
//         //             <Media
//         //                 image = {circlePen}
//         //             />
//         //             <CardContent>
//         //             <Typography variant="h5" align="center" gutterBottom="true">
//         //                 What
//         //             </Typography>
                    
//         //             <Typography variant="body1" align="center" paragraph="true">
//         //                 UT Game Jam is a 36 hour event where participants work in teams to create a video game given a theme.
//         //             </Typography>
//         //             </CardContent>
//         //         </StyledCard>
//         //     </Grid>
//         //     <Grid item xs={6}>
//         //         <StyledCard elevation={0}>
//         //             <Media
//         //                 image = {circlePhone}
//         //                 align="center"
//         //             />
//         //             <CardContent>
//         //             <Typography variant="h5" align="center" gutterBottom="true">
//         //                 Where
//         //             </Typography>
                   
//         //             <Typography variant="body1" align="center" paragraph="true">
//         //                 Multiple locations around The University of Texas at Austin. See schedule for more details!
//         //             </Typography>
//         //             </CardContent>    
//         //         </StyledCard>
//         //     </Grid>
//         //     <Grid item xs={6}>
//         //         <StyledCard elevation={0}>
//         //             <Media
//         //                 image = {circleSoda}
//         //                 align="center"
//         //             />
//         //             <CardContent>
//         //             <Typography variant="h5" align="center" gutterBottom="true">
//         //                 Why
//         //             </Typography>
//         //             <Typography variant="body1" align="center" paragraph="true">
//         //                 Learn new skills and/or hone existing ones while making your own game!
//         //                 <br/>
//         //             </Typography>
//         //             </CardContent>
//         //         </StyledCard>
//         //     </Grid>
//         // </StyledGrid>
//         );
//     }
// }