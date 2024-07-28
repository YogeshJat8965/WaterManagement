import React from "react";

const AboutUs = () => {
  return (
    <div className=" absolute top-16 w-full bg-gray-100 p-8">
      <h1 className="text-5xl text-blue-500 font-semibold mb-8 text-center animate-fade-in">
        About Us
      </h1>

      <div className="mb-8 p-6 pl-10 shadow-sm bg-blue-100 rounded-lg animate-slide-up">
        <p className="text-xl mb-4">
          This page is designed to help you learn more about our company and
          what we do. We are a team of passionate individuals who are committed
          to providing our customers with the best possible products and
          services.
        </p>
      </div>

      <div className="flex justify-center mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 pl-10 bg-blue-100 shadow-sm rounded-lg animate-slide-up">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
            Welcome to the Water Supply Management Analysis Platform, an
            initiative supported by the us for Indore Municipal Corporation to
            address and manage water supply issues effectively. Our platform is
            dedicated to providing comprehensive data analysis and insights to
            help identify and resolve water supply challenges across various
            regions. We aim to support policymakers, urban planners, and the
            general public in making informed decisions to ensure sustainable
            water management.
          </p>
        </div>

        <div className="p-6 pl-10  bg-blue-100 shadow-sm rounded-lg animate-slide-up">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg">
            Our mission is to facilitate the efficient management of water
            resources by leveraging advanced data analytics and technology. We
            strive to:
            <ul className="p-4">
              <li>
                Enhance Water Supply Monitoring: Provide real-time data and
                analytics on water consumption and supply.{" "}
              </li>
              <li>
                Support Sustainable Water Management: Assist in developing
                strategies for sustainable water usage and conservation.
              </li>
              <li>
                {" "}
                Promote Awareness: Educate the public on water issues and
                encourage responsible water usage.
              </li>
              <li>
                {" "}
                Enable Informed Decision-Making: Equip policymakers and planners
                with the data and insights needed for effective water
                management.
              </li>
            </ul>
          </p>
        </div>

        <div className="p-6 pl-10 bg-blue-100 shadow-sm rounded-lg animate-slide-up">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-lg">
            <li>
              Customer Focus: We are committed to providing our customers with
              the best possible products and services.
            </li>
            <li>
              Innovation: We are committed to innovation and to providing our
              customers with the latest and most advanced products and services.
            </li>
            <li>
              Excellence: We are committed to excellence in everything we do.
            </li>
            <li>
              Integrity: We are committed to integrity and to doing the right
              thing.
            </li>
            <li>
              Teamwork: We are committed to teamwork and to working together to
              achieve our goals.
            </li>
          </ul>
        </div>

        <div className="p-6 pl-10 bg-blue-100 shadow-sm rounded-lg animate-slide-up">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-lg">
            Our team is made up of passionate and talented individuals who are
            committed to providing our customers with the best possible products
            and services. We have a diverse range of skills and experience, and
            we are always learning and growing.
          </p>
        </div>

        {/* <div className="col-span-1 md:col-span-2 flex justify-center mb-8 gap-20">
        <div >
          <img src="https://media.istockphoto.com/id/515708494/photo/mahatma-gandhi-hall.jpg?s=2048x2048&w=is&k=20&c=3QsjUazEtQ8gX3fkB7ZIGjBeYRY-3GRsK9UMg86AM4I=" alt="Sarafa Bazar" className="w-96 h-96 rounded-lg shadow-sm animate-fade-in" />
        </div>

        <div>
        <img src="https://media.istockphoto.com/id/515708494/photo/mahatma-gandhi-hall.jpg?s=2048x2048&w=is&k=20&c=3QsjUazEtQ8gX3fkB7ZIGjBeYRY-3GRsK9UMg86AM4I=" alt="Sarafa Bazar" className="w-96 h-96 rounded-lg shadow-sm animate-fade-in" />

        </div>
        </div> */}

        <div className="p-6 pl-10 bg-blue-100 shadow-sm rounded-lg animate-slide-up">
          <h2 className="text-3xl font-bold mb-4">Our Customers</h2>
          <p className="text-lg">
            Our consumers are the households and businesses in Indore that
            benefit from our smart water meters and data-driven insights. By
            providing detailed information on water usage and detecting leaks,
            we help consumers make informed decisions about their water
            consumption, reduce waste, and lower their utility bills.
          </p>
        </div>

        <div className="p-6 pl-10 bg-blue-100 shadow-sm rounded-lg animate-slide-up">
          <h2 className="text-3xl font-bold mb-4">Our Community</h2>
          <p className="text-lg">
            Our community consists of the residents of Indore, local government
            officials, and various stakeholders committed to improving water
            management. We believe in the power of collaboration and actively
            engage with the community to understand their needs, gather
            feedback, and co-create solutions that make a real impact on water
            conservation and distribution.
          </p>
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 flex justify-center mb-8 gap-20 mt-5">
        <div>
          <img
            src="https://media.istockphoto.com/id/1468125168/photo/rajwada-palace.jpg?b=1&s=612x612&w=0&k=20&c=ePO3DAImuzemE2fWe_9BCDFhO8d-B5MV9qYoMBays18="
            alt="Rajwada Palace"
            className="w-96 h-96 rounded-lg shadow-sm animate-fade-in"
          />
        </div>
        <div>
          <img
            src="https://media.istockphoto.com/id/539001564/photo/rajwada-palace-indore.webp?s=2048x2048&w=is&k=20&c=fu6-uMqvp_0X8XPqjZaHIdJZFsJMf3Po7Hm8Ln3WheI="
            alt="Rajwada Palace"
            className="w-96 h-96 rounded-lg shadow-sm animate-fade-in"
          />
        </div>

        <div>
          <img
            src="https://media.istockphoto.com/id/515708494/photo/mahatma-gandhi-hall.jpg?s=2048x2048&w=is&k=20&c=3QsjUazEtQ8gX3fkB7ZIGjBeYRY-3GRsK9UMg86AM4I="
            alt="Sarafa Bazar"
            className="w-96 h-96 rounded-lg shadow-sm animate-fade-in"
          />
        </div>

        <div>
          <img
            src="https://media.istockphoto.com/id/177636133/photo/gate-of-mandu-indore.jpg?s=2048x2048&w=is&k=20&c=bm8oKqglqy4BLfqhCZoBQzWa-HiU_JF-Ym93TQZNehE="
            alt="Lal Bagh Palace"
            className="w-auto h-96  "
          />
        </div>
      </div>

      <div className="mt-8 p-6 pl-10 bg-blue-100 shadow-sm rounded-lg animate-slide-up">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-2">
          If you have any questions or comments, please contact us at:
        </p>
        <ul className="text-lg">
          <li>
            Email:{" "}
            <a href="mailto:nn.indore@mpurban.gov.in" className="text-blue-500">
              nn.indore@mpurban.gov.in
            </a>
          </li>
          <li>
            Phone:{" "}
            <a href="tel:0731-2522111" className="text-blue-500">
              0731-2522111
            </a>
          </li>
          <li>
            Address: Jail Road, Nagar Nigam, Netaji Subash Marg, Nagar Nigam,
            Indore, Madhya Pradesh 452007
          </li>
        </ul>
      </div>

      <p className="text-center text-lg mt-8 animate-fade-in">
        Thank you for visiting our website! We hope you found this information
        helpful.
      </p>
    </div>
  );
};

export default AboutUs;
