import React from "react";
interface comps{
    icon:string,
    link:string,
    imgAlt:string,
}
function ContactComponent({icon,link,imgAlt}:comps) {
  return (
    <div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="md:size-28 4xl:size-44" src={icon} alt={imgAlt} />
      </a>
    </div>
  );
}

export default ContactComponent;
