import "./description.scss";

const SRDescription = ({ content }: { content: any }) => {
  return <h1 className="sr-description">{content.srDescription}</h1>;
};

export default SRDescription;
