import React from "react";
import { Helmet } from "react-helmet";
import { Input, Text, Img, Heading } from "../../components";

export default function DesktopThreePage() {
  return (
    <>
      <Helmet>
        <title>Profile Details - Update Your Information</title>
        <meta
          name="description"
          content="View and update your profile details including name, birth date, email, and phone number. Keep your information current to stay connected."
        />
      </Helmet>

      {/* main layout section */}
      <div className="relative h-[1024px] w-full bg-blue_gray-100_01">
        {/* decorative image section */}
        <Img
          src="images/img_vector_purple_300_515x475.png"
          alt="vector_one"
          className="absolute left-[0.00px] top-[0.00px] m-auto h-[515px] w-[33%] object-cover"
        />

        {/* decorative image section alternate */}
        <Img
          src="images/img_vector_lime_600.png"
          alt="vector_three"
          className="absolute bottom-[0.00px] left-[0.00px] m-auto h-[386px] w-[33%] object-cover"
        />

        {/* decorative image section secondary */}
        <Img
          src="images/img_vector_lime_900.png"
          alt="vector_five"
          className="absolute right-[0.00px] top-[0.00px] m-auto h-[466px] w-[30%] object-cover"
        />

        {/* profile section */}
        <div className="absolute left-0 right-0 top-[24.99px] m-auto flex w-full max-w-[1111px] flex-col items-center gap-[27px] md:p-5">
          <Heading as="h1">Profil</Heading>
          <div className="flex flex-col items-center self-stretch">
            <div className="relative z-[1] flex h-[225px] w-[21%] items-center bg-[url(/public/images/img_group_8.svg)] bg-cover bg-no-repeat md:h-auto md:w-full">
              <div className="w-full rounded-[50px] border-[5px] border-solid border-white-A700">
                <Img
                  src="images/img_whatsapp_image_2024_02_20.png"
                  alt="whatsappimage"
                  className="h-[225px] w-full rounded-[50px] object-cover md:h-auto"
                />
              </div>
            </div>
            <div className="relative mt-[-133px] flex flex-col items-start justify-end self-stretch rounded-[30px] bg-white-A700 py-[116px] pl-[116px] pr-14 md:p-5">
              <Text as="p" className="ml-[289px] mt-[88px] md:ml-0">
                Nama Depan
              </Text>
              <Input
                size="xs"
                shape="round"
                name="groupseven"
                placeholder={`Mohammad Halim Perdana`}
                className="mt-3.5 w-[36%] self-center font-light sm:px-5"
              />
              <Text as="p" className="ml-[289px] mt-6 md:ml-0">
                Tanggal Lahir
              </Text>
              <Input
                size="xs"
                shape="round"
                name="date"
                placeholder={`22/09/2001`}
                className="mt-3.5 w-[36%] self-center font-light sm:px-5"
              />
              <Text as="p" className="ml-[289px] mt-[23px] md:ml-0">
                Email
              </Text>
              <Input
                size="xs"
                shape="round"
                type="email"
                name="email"
                placeholder={`anadclalulack@gmail.com`}
                className="mt-[15px] w-[36%] self-center font-light sm:pr-5"
              />
              <Text as="p" className="ml-[289px] mt-6 md:ml-0">
                No Telepon
              </Text>
              <Input
                size="xs"
                shape="round"
                type="number"
                name="groupone"
                placeholder={`089653750433`}
                className="mt-3.5 w-[36%] self-center font-light sm:px-5"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
