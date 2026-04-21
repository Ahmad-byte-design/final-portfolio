import { Link } from "react-router-dom";

type Props = {
  mobile?: any;
  onClose?:any;
}

function NavItems({ mobile, onClose }:Props) {
  const items = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Projects", link: "/projects" },
    { name: "Certificate", link: "/certificates" },
    { name: "History", link: "/histories" },
  ];

  if (mobile) {
    return (
      <ul className="flex flex-col w-full py-2">
        {items.map((item) => (
          <li key={item.name}>
            <Link
              to={item.link}
              onClick={onClose}
              className="flex items-center gap-2 px-6 py-3 hover:text-popover 
                         hover:bg-amber-400/20 transition duration-200 group"
            >
              <span className="w-1 h-1 rounded-full bg-popover opacity-0 
                               scale-0 group-hover:opacity-100 group-hover:scale-100 
                               transition duration-300" />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="flex items-center justify-between w-full px-8  ">
      {items.map((item) => (
        <li
          key={item.name}
          className="w-full flex items-center justify-center gap-2 hover:text-popover group"
        >
          <p className="w-1 h-1 rounded-2xl bg-popover opacity-0 scale-0 
                        group-hover:opacity-100 group-hover:scale-100 transition duration-300" />
          <Link to={item.link} className="w-full">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavItems;