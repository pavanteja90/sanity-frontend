import { fetchImageUrl } from "@/services/fetch-image.service";
import Image from "next/image";

const ImageComponent = ({ content }: { content: any }) => {
  return (
    <img src={fetchImageUrl(content.asset).width(2000).url()} />
    // <Image
    //   src={fetchImageUrl(content.asset).width(2000).url()}
    //   alt="Divider"
    //   width={2000}
    //   height={200}
    //   key={content._id || content._key}
    // />
  );
};

export default ImageComponent;
