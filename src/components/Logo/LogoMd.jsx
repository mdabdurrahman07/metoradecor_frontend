import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoMd = () => {
  return (
    <Link href={"/"}>
      <Image
        src="/logos/MetoraDecorLogoMid.png"
        alt="Metora Decor Logo"
        width={160}
        height={30}
      />
    </Link>
  );
};

export default LogoMd;
