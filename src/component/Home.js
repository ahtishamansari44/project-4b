import React from 'react';
import useWebAnimations, { flip, zoomIn, slideInUp, fadeInLeft } from "@wellyshen/use-web-animations";
import { makeStyles, Paper, Grid, Container, Typography } from '@material-ui/core';
import SVG1 from '../svg/svg1.js'
import SVG3 from '../svg/svg3.js'
import logo from '../svg/logo.png'
import AboutImg from '../svg/about-img.png'
import SVG2 from '../svg/svg2.svg'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

export default function Home() {
  const classes = useStyles();

  const link1 = useWebAnimations();
  const link2 = useWebAnimations();
  const link3 = useWebAnimations();
  const link4 = useWebAnimations();
  const link5 = useWebAnimations();
  const image1 = useWebAnimations({ ...zoomIn });
  const image2 = useWebAnimations({ ...zoomIn });
  const flip1 = useWebAnimations({ ...flip });
  const flip2 = useWebAnimations({ ...flip });
  const flip3 = useWebAnimations({ ...flip });
  const flip4 = useWebAnimations({ ...flip });
  const flip5 = useWebAnimations({ ...flip });
  const flip6 = useWebAnimations({ ...flip });
  const flip7 = useWebAnimations({ ...flip });
  const slide1 = useWebAnimations({ ...slideInUp });
  const slide2 = useWebAnimations({ ...slideInUp });
  const slide3 = useWebAnimations({ ...slideInUp });
  const slide4 = useWebAnimations({ ...slideInUp });
  const slide5 = useWebAnimations({ ...slideInUp });
  const slide6 = useWebAnimations({ ...slideInUp });
  const slide7 = useWebAnimations({ ...slideInUp });
  const slide8 = useWebAnimations({ ...slideInUp });
  const slide9 = useWebAnimations({ ...slideInUp });
  const slide10 = useWebAnimations({ ...slideInUp });
  const fadeL1 = useWebAnimations({ ...fadeInLeft });
  const fadeL2 = useWebAnimations({ ...fadeInLeft });
  const fadeL3 = useWebAnimations({ ...fadeInLeft });





    // document.addEventListener("mouseover", (e) => {
      link1.animate({
        keyframes: [ {transform: 'translate(0%, 0)',  borderBottomColor: '#2196F3'}, { offset: 0.8, transform: 'translate(100%, 0)', borderBottomColor: '#fdb811'} ],
        timing: { duration: 800, 
          fill: 'forwards' },
      });
      link2.animate({
        keyframes: [ {transform: 'translate(0%, 0)',  borderBottomColor: '#2196F3'}, { offset: 0.8, transform: 'translate(100%, 0)', borderBottomColor: '#fdb811'} ],
        timing: { duration: 800, 
          fill: 'forwards' },
      });
      link3.animate({
        keyframes: [ {transform: 'translate(0%, 0)',  borderBottomColor: '#2196F3'}, { offset: 0.8, transform: 'translate(100%, 0)', borderBottomColor: '#fdb811'} ],
        timing: { duration: 800, 
          fill: 'forwards' },
      });
      link4.animate({
        keyframes: [ {transform: 'translate(0%, 0)',  borderBottomColor: '#2196F3'}, { offset: 0.8, transform: 'translate(100%, 0)', borderBottomColor: '#fdb811'} ],
        timing: { duration: 800, 
          fill: 'forwards' },
      });
      link5.animate({
        keyframes: [ {transform: 'translate(0%, 0)',  borderBottomColor: '#2196F3'}, { offset: 0.8, transform: 'translate(100%, 0)', borderBottomColor: '#fdb811'} ],
        timing: { duration: 800, 
          fill: 'forwards' },
      });
    // });


  return (
    <>
    <Container style={{paddingTop:20, paddingBottom:10}}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={0} className={classes.paper}>
            <SVG1 />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={0} className={classes.paper}>
          <Typography className="head-title" variant="h2"  component="h1" ref={slide1.ref} >
            Scalable extended
            business office
            services
          </Typography>
          <a href="/" ref={link1.ref} className="link" >Revenue Cycle Management</a>
          </Paper>
        </Grid>
      </Grid>
      </Container>
      <Container style={{paddingTop:20, paddingBottom:10}}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={0} className={classes.paper}>
          <Typography className="sub-title1" variant="h1" component="h1" ref={slide2.ref} >
            We Are
          </Typography>
          <Typography className="title1-content" variant="boby1" component="p" ref={slide3.ref} >
          A highly specialized Management team with over 20 combined years of experience in the Healthcare industry with proven ability to optimally combine digital technology, skilled resources and efficient business processes to implement creative as well as proven market solutions to suit an ever-evolving market. Our forte has been to successfully tailor our solutions to support your needs whether it is in the space of Consulting, Product Management or Service Delivery
          </Typography>
          <a href="/" className="link" ref={link2.ref}>About Us</a>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={0} className={classes.paper}>
          <img src={AboutImg} ref={image1.ref} alt="about" width={600} />
          </Paper>
        </Grid>
      </Grid>
      </Container>
      <Container style={{paddingTop:80, paddingBottom:80}}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper style={{position: 'relative'}}  elevation={0} className={classes.paper}>
           <img src={SVG2} alt="avg2" />
           <div className="overlay">
           <Grid container spacing={3}>
           <Grid item xs={12} sm={4}>
           <Paper elevation={3} ref={flip1.ref} className="paperBox">
             <h3>R</h3><br/>
             <h4>Revenue Cycle Management</h4>
           </Paper>
           <Paper elevation={3} ref={flip2.ref} className="paperBox">
             <h3>S</h3><br/>
             <h4>Staff
              Augmentation</h4>
           </Paper>
           <Paper elevation={3} ref={flip3.ref} style={{backgroundColor:'#245991'}} className="paperBox">
             <h3>P</h3><br/>
             <h4>Payment
                Posting</h4>
           </Paper> 
           </Grid> 
           <Grid item xs={12} style={{paddingTop:60}} sm={4}>
           <Paper elevation={3} ref={flip4.ref} style={{backgroundColor:'#003a78',color:'#ffff'}} className="paperBox">
             <h3>R</h3><br/>
             <h4>Reason Code
                Mapping</h4>
           </Paper>
           <Paper elevation={3} ref={flip5.ref} className="paperBox">
             <h3>p</h3><br/>
             <h4>Product
              Management</h4>
           </Paper>
           <Paper elevation={3} ref={flip6.ref} style={{backgroundColor:'#fdb811', color:'#ffff'}} className="paperBox">
             <h3>V</h3><br/>
             <h4>Virtual
              Assistant</h4>
           </Paper> 
           </Grid>
           <Grid item xs={12} style={{paddingTop:160}} sm={4}>
           <Paper elevation={3} ref={flip7.ref} className="paperBox">
             <h3>C</h3><br/>
             <h4>Correspondence
                Management</h4>
           </Paper>
           </Grid>
           </Grid>
           </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Paper elevation={0} className={classes.paper} style={{padding:100}}>
          <Typography className="sub-title1" variant="h1" component="h1" ref={slide4.ref} >
          Services.
          </Typography>
          <Typography className="title1-content" variant="boby1" component="p" ref={slide5.ref} >
          We offer customized digital services and scalable operational strategies to prepare your Organization ride through the waves of uncertainty in the form of disruptive technology and government regulations so you can deliver accelerated and cost-effective services for your consumers
          </Typography>
          <a href="/" className="link" ref={link3.ref}>Services</a>
          </Paper>  
        </Grid>
      </Grid>
      </Container>
      <div style={{backgroundColor:'#003a78'}}>
      <Container style={{paddingTop:100, paddingBottom:100}}>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={12}><Typography style={{color:"#ffff", paddingBottom: 32}} variant="h3" component="h3" ref={slide6.ref} >
      Economical,<br />
dynamic and managed business solutions
          </Typography></Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={0} style={{backgroundColor:'transparent'}} ref={fadeL1.ref} className={classes.paper}>
          <Typography style={{color:'#ffff'}} variant="h4" component="h4"  >
          Improved efficiency
          </Typography>
          <Typography style={{color:'#ffff'}} className="title1-content" variant="boby1" component="p"  >
          By reducing the burden of managing support functions, staffing and day to day operations, your business can concentrate further on core areas.
          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={0} className={classes.paper} ref={fadeL2.ref} style={{backgroundColor:'transparent'}}>
          <Typography style={{color:'#ffff'}} variant="h4" component="h4"  >
          Improved efficiency
          </Typography>
          <Typography style={{color:'#ffff'}} className="title1-content" variant="boby1" component="p"  >
          By reducing the burden of managing support functions, staffing and day to day operations, your business can concentrate further on core areas.
          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={0} className={classes.paper} ref={fadeL3.ref} style={{backgroundColor:'transparent'}}>
          <Typography style={{color:'#ffff'}} variant="h4" component="h4"  >
          Improved efficiency
          </Typography>
          <Typography className="title1-content" variant="boby1" component="p" style={{color:'#ffff'}} >
          By reducing the burden of managing support functions, staffing and day to day operations, your business can concentrate further on core areas.
          </Typography>
          </Paper>
        </Grid>
      </Grid>
      </Container>
      </div>
      <Container style={{paddingTop:20, paddingBottom:10}}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={0} className={classes.paper}>
            <SVG3 />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} style={{paddingTop:100}} ref={slide9.ref}>
        <Typography className="sub-title1" variant="h2" component="h2"  >
        Talk to our experts
about your requirements
          </Typography>
          <Typography className="title1-content" variant="boby1" component="p" ref={slide10.ref} >
          Contact us and know more about how our experts can help your business grow.
          </Typography>
          <a href="/" className="link" ref={link4.ref}>Enquire Now</a>
        </Grid>
      </Grid>
      </Container>
      <div style={{backgroundColor:'#003a78'}}>
      <Container style={{paddingTop:100, paddingBottom:100}}>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={3}></Grid>  
      <Grid item xs={12} sm={6} style={{textAlign:'center'}}>
        <img src={logo} alt="logo" ref={image2.ref} />
        <Typography style={{color:"#ffff", paddingBottom: 32, textAlign:'center', marginTop:32}} variant="h3" component="h3" ref={slide7.ref} >
      Care To Join Us?
          </Typography>
          <Typography style={{color:'#ffff', textAlign:'center'}} variant="h6" component="h6" ref={slide8.ref} >
          Embark on an exciting career with us to learn and grow alongside the best in the industry
          </Typography>
          <a href="/" className="link" ref={link5.ref}>View Current Openning</a>
          </Grid>

          <Grid item xs={12} sm={3}></Grid>
       
       
      </Grid>
      </Container>
      </div>

    </>
  );
}