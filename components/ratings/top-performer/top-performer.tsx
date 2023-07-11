import { fetchImageUrl } from "@/services/fetch-image.service";
import "./top-performer.scss";
import Image from "next/image";

const SRTopPerformer = ({ content }: { content: any }) => {
  return (
    <div className="flex">
      <Image
        className="award"
        src={fetchImageUrl(content.canstarAward.asset).width(200).url()}
        alt="Preview of Canstar award"
        width={200}
        height={200}
      />
      <section className="performer-info">
        <p className="title">{content.title}</p>
        <p className="provider">{content.providerName}</p>
        <p className="description">{content.description}</p>
      </section>
      <Image
        className="provider"
        src={fetchImageUrl(content.providerLogo.asset).width(200).url()}
        alt="Preview of provider logo"
        width={250}
        height={200}
      />
    </div>
  );
};

export default SRTopPerformer;
