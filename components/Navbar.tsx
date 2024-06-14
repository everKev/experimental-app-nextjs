import React from "react";
import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

export const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/Map.svg"
            alt="GCC Logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <h3 className="hero__logo__blueBold">TS Service Department</h3>
        </Link>

        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-white rounded-full bg-primary-blue min-w-[130px]"
        />
      </nav>
    </header>
  );
};
