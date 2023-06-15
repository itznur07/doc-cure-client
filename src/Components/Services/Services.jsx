import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SectionTitle from "../../Shared/SectionTitle";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/services`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  const generalMedicine = services?.filter(
    (service) => service?.category === "General Medicine"
  );

  const pediatrics = services?.filter(
    (service) => service?.category === "Pediatrics"
  );

  const dermatology = services?.filter(
    (service) => service?.category === "Dermatology"
  );


  return (
    <div className='max-w-7xl mx-auto mt-10'>
      <div className='flex justify-center space-x-20'>
        <div>
          <img
            src='https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
            alt='service-img'
            className='max-w-7xl object-cover rounded-md'
          />
        </div>
        <div className='max-w-md'>
          <div>
            <h1>
              <SectionTitle title='Our Services'></SectionTitle>
            </h1>
            <p className='mt-5'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium <br />
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
              inve ntore <br />
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.{" "}
              <br />
            </p>
          </div>
          <div className='mt-5'>
            <Tabs>
              <TabList className='flex justify-between'>
                <Tab className='bg-[#1F8A70] cursor-pointer  rounded focus:bg-[#27374D] focus:text-white py-2 px-3 text-white'>
                  General Medicine
                </Tab>
                <Tab className='bg-[#1F8A70] cursor-pointer  rounded focus:bg-[#27374D] focus:text-white py-2 px-3 text-white'>
                  Pediatrics
                </Tab>
                <Tab className='bg-[#1F8A70] cursor-pointer  rounded focus:bg-[#27374D] focus:text-white py-2 px-3 text-white'>
                  Dermatology
                </Tab>
              </TabList>

              <TabPanel className='mt-5'>
                {generalMedicine?.slice(0, 1).map((data) => (
                  <div key={data?._id}>
                    <img
                      src={data?.image}
                      className='rounded object-cover w-full h-60'
                      alt='ser-cover'
                    />
                    <h1 className='text-lg text-[#27374D] font-medium mt-1'>
                      {data?.title}
                    </h1>
                    <p className='text-sm text-[#27374D]'>
                      {data?.description}
                    </p>
                  </div>
                ))}
              </TabPanel>

              <TabPanel className='mt-5'>
                {pediatrics?.slice(0, 1).map((data) => (
                  <div key={data?._id}>
                    <img
                      src={data?.image}
                      className='rounded object-cover w-full h-60'
                      alt='ser-cover'
                    />
                    <h1 className='text-lg text-[#27374D] font-medium mt-1'>
                      {data?.title}
                    </h1>
                    <p className='text-sm text-[#27374D]'>
                      {data?.description}
                    </p>
                  </div>
                ))}
              </TabPanel>

              <TabPanel className='mt-5'>
                {dermatology?.slice(0, 1).map((data) => (
                  <div key={data?._id}>
                    <img
                      src={data?.image}
                      className='rounded object-cover w-full h-60'
                      alt='ser-cover'
                    />
                    <h1 className='text-lg text-[#27374D] font-medium mt-1'>
                      {data?.title}
                    </h1>
                    <p className='text-sm text-[#27374D]'>
                      {data?.description}
                    </p>
                  </div>
                ))}
              </TabPanel>
              
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
