import React from "react";
import { Helmet } from "react-helmet";
import { Input, Text, Heading, Button, Img } from "../../components";

export default function DesktopOnePage() {
  return (
    <>
      <Helmet>
        <title>Create Your Account - Join Our Community</title>
        <meta
          name="description"
          content="Sign up to connect and learn together. Create your account using your email and set a secure password. Start your journey with us today!"
        />
      </Helmet>

      {/* main layout section */}
      <div className="relative h-[1024px] w-full bg-white-A700 pr-[58px] md:pr-5">
        {/* introduction section */}
        <div className="absolute bottom-0 left-[0.00px] top-0 my-auto flex h-[1024px] w-[40%] flex-col items-center rounded-[30px] bg-[url(/public/images/img_group_6.png)] bg-cover bg-no-repeat py-[83px] pl-14 md:h-auto md:py-5 md:pl-5">
          <Heading
            as="h1"
            className="mb-[580px] mt-[120px] w-[95%] !text-gray-100 md:w-full"
          >
            Mari Berkenalan Dan Belajar Bersama.
          </Heading>
        </div>

        {/* confirmation section */}
        <div className="absolute bottom-[-51.00px] left-[3%] m-auto flex w-full max-w-[1209px] items-start md:relative md:flex-col">
          <div className="flex flex-1 items-start md:flex-col md:self-stretch">
            <Img
              src="images/img_bfd5475d_5678_4.png"
              alt="bfd5475d5678fou"
              className="h-[584px] w-[69%] object-cover md:w-full"
            />
            <div className="relative ml-[-79px] mt-5 flex w-[31%] flex-col items-start gap-1.5 md:ml-0 md:w-full">
              <Text as="p" className="ml-3.5 md:ml-0">
                Password
              </Text>
              <Input
                shape="round"
                name="edittext"
                className="self-stretch sm:px-5"
              />
            </div>
          </div>
          <Button
            shape="round"
            className="relative ml-[-195px] mt-[206px] md:ml-0 sm:px-5 bg-dark-green"
          >
            Konfirmasi
          </Button>
        </div>

        {/* account creation section */}
        <div className="absolute right-[4%] top-[9%] m-auto flex w-[50%] flex-col items-center">
          <Heading size="xs" as="h2">
            Buat Akun
          </Heading>
          <div className="ml-[17px] mt-[120px] flex w-[69%] flex-wrap justify-between gap-5 self-start md:ml-0 md:w-full md:p-5">
            <Text as="p">Nama Depan</Text>
            <Text as="p">Nama Belakang</Text>
          </div>
          <div className="mt-3.5 flex flex-col items-start self-stretch">
            <div className="flex gap-[13px] self-stretch md:flex-col">
              <Input
                shape="round"
                name="edittext_one"
                className="w-full md:p-5 sm:px-5"
              />
              <Input
                shape="round"
                name="edittext_two"
                className="w-full md:p-5 sm:px-5"
              />
            </div>
            <Text as="p" className="ml-3.5 mt-11 md:ml-0">
              Email
            </Text>
            <Input
              shape="round"
              name="edittext_three"
              className="mt-[15px] w-[49%] sm:px-5"
            />
          </div>
        </div>
      </div>
    </>
  );
}
