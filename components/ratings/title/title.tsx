import './title.scss';

const SRTitle = ({ content }: { content: any }) => {
  return (
      <h1 className="sr-title">{content.srTitle}</h1>
  );
};

export default SRTitle;
