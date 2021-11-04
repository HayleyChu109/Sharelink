import React from "react";

export default function ListLink(props) {
  console.log("Filtered list", props);

  const linkList = props.links.map((link, index) => {
    return (
      <div key={index} className="text-center my-3">
        <a href={link.url} className="me-3">
          {link.name}
        </a>
        <br />
        {link.tags.map((tag, j) => (
          <span key={j} className="me-3">
            {tag}
          </span>
        ))}
      </div>
    );
  });
  return <div className="linklist">{linkList}</div>;
}
