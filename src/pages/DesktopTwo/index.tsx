import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, Input, Text } from "../../components";

export default function DesktopTwoPage() {
  return (
    <>
      <Helmet>
        <title>User Login - Access Your Account</title>
        <meta
          name="description"
          content="Log in to your account with your email and password. Confirm your credentials to access personalized features and continue your experience."
        />
      </Helmet>

      {/* main content section */}
      <div className="relative h-[1024px] w-full bg-blue_gray-100_01">
        {/* top image section */}
        <Img
          src="images/img_vector.svg"
          alt="vector_one"
          className="absolute left-[0.00px] top-[4%] m-auto h-[330px] w-[33%]"
        />

        {/* lime image section */}
        <Img
          src="images/img_vector_lime_600.png"
          alt="vector_three"
          className="absolute right-[0.00px] top-[0.00px] m-auto h-[446px] w-[30%] object-cover"
        />

        {/* purple image section */}
        <Img
          src="images/img_vector_purple_300.svg"
          alt="vector_five"
          className="absolute bottom-[11%] right-[11%] m-auto h-[605px] w-[43%]"
        />

        {/* red image section */}
        <Img
          src="images/img_vector_red_200.svg"
          alt="vector_seven"
          className="absolute bottom-[22%] left-[9%] m-auto h-[361px] w-[36%]"
        />

        {/* login form section */}
        <div className="absolute left-0 right-0 top-[18%] m-auto flex w-[43%] flex-col items-center gap-[89px] rounded-[30px] bg-white-A700 px-14 py-[58px] md:gap-[66px] md:p-5 sm:gap-11">
          <div className="mt-[66px] flex w-[66%] flex-col items-start md:w-full">
            <Text size="s" as="p">
              Email
            </Text>
            <Input
              shape="round"
              name="email"
              className="mt-[13px] self-stretch border border-solid border-white-A700 sm:px-5"
            />
            <Text size="s" as="p" className="mt-6">
              Password
            </Text>
            <Input
              shape="round"
              name="password"
              className="mt-[13px] self-stretch border border-solid border-white-A700 sm:px-5"
            />
          </div>
          <Button shape="round" className="sm:px-5">
            Konfirmasi
          </Button>
        </div>

        {/* blue gray image section */}
        <Img
          src="images/img_vector_blue_gray_800.png"
          alt="vector_nine"
          className="absolute bottom-[0.00px] left-[0.00px] m-auto h-[340px] w-[25%] object-cover"
        />
        <a href="Login" target="_blank" rel="noreferrer" className="absolute left-0 right-0 top-[10%] m-auto w-max">
          {/* login link section */}
          <Heading as="h1">Login</Heading>
        </a>

        {/* gray image section */}
        <Img
          src="images/img_vector_gray_400.svg"
          alt="vector_eleven"
          className="absolute bottom-[-151.00px] left-0 right-0 m-auto h-[345px] w-[44%]"
        />

        {/* business image section */}
        <Img
          src="images/img_business_startup.png"
          alt="business_one"
          className="absolute bottom-[6%] right-[8%] m-auto h-[512px] w-[512px] object-cover"
        />
      </div>
    </>
  );
}
