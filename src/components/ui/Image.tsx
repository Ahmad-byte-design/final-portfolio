import Icon from "./Icon";


import { MdOutlineLiveTv } from "react-icons/md";
import { FaCode } from "react-icons/fa";

type Props = {
  src?: string;
  alt?: string;
  className?: string;
  urls?: any;
};

const baseStyle = `relative `;

function Image({ src, alt, urls, className }: Props) {
  return (
    <figure className={`${baseStyle} ${className}`}>
      <img src={src} alt={alt} draggable={false} loading="lazy" />
      {urls && (
        <div className="icons flex items-center justify-center gap-3 absolute  bottom-2 right-2 ">
          <a href={urls.watch}>
            <Icon
              icon={<MdOutlineLiveTv className="text-black" />}
              className="w-5! h-5! p-3! bg-foreground hover:bg-muted"
            />
          </a>
          <a href={urls.githup}>
            <Icon
              icon={<FaCode className="text-black"/>}
              className="w-5! h-5! bg-foreground p-3 hover:bg-foreground"
            />
          </a>
        </div>
      )}
    </figure>
  );
}

export default Image;
