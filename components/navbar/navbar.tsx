import { fetchImageUrl } from '@/services/fetch-image.service';
import './navbar.scss';
import Image from "next/image";

const Navbar = ({ content }: { content: any }) => {
  return (
    <div>
        <Image
        className="navbar-desktop"
          src={fetchImageUrl(content.desktopNavbar.asset).width(2000).url()}
          alt="Preview of Navbar"
          width={2000}
          height={200}
        />
        <Image
        className="navbar-tablet"
          src={fetchImageUrl(content.tabletNavbar.asset).width(2000).url()}
          alt="Preview of Navbar"
          width={2000}
          height={200}
        />
        <Image
        className="navbar-mobile"
          src={fetchImageUrl(content.mobileNavbar.asset).width(2000).url()}
          alt="Preview of Navbar"
          width={2000}
          height={200}
        />
    </div>
  );
};

export default Navbar;
