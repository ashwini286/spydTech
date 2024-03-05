import React from 'react';
import IMG from "../../assets/decore.png"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
const ERPCard = () => {
  return (
    <>
     <Card className="mb-8 w-[80%] h-[20rem] ml-[10%] shadow-inner">

<CardBody><img
  src={IMG}
  alt='talk'
  className='w-[27%] h-5 ml-[47%] mt-10'
/>
  <h1 className='flex text-4xl justify-center mt-[-5%]'>Let’s Talk

    <p className='text-blue-900 pl-4'>Technology</p></h1>
  <p className='text-center pt-10 w-[90%]'>We're passionate about innovation, brilliant ideas and the execution that brings it all
    together in one beautiful experience. If you are too, call or send us an email to get started.</p>
</CardBody>
<CardFooter className="pt-5 ">
  <Button className='ml-[40%]'>Read More</Button>
</CardFooter>
</Card>
    
    </>
  )
}

export default ERPCard