import React from 'react';
import Image from "next/image";
const Logo = () => {
    return (
        <Image
            src="/logos/MetoraDecorLogoMid.png"
            alt="Metora Decor Logo"
            width={100}
            height={20}
          />
    );
};

export default Logo;