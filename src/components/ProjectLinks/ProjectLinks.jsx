const renderTitle = (link) => {
  if (link.title) {
    return link.title;
  }
  if (link.visibleLink) {
    return link.visibleLink;
  }
  return link.link;
};

const renderLinks = (link, key) => {
  return (
    <li key={key}>
      {renderTitle(link)}
      {link.link && " -"}
      {link.link &&
        link.link.map((link) => (
          <a key={link.url} href={link.url} target="_blank">
            {link.title}
          </a>
        ))}
    </li>
  );
};

export const ProjectLinks = ({ projectLinks }) => (
  <div>
    <h3>More Projects</h3>
    <ul className="projectsList">{projectLinks.map(renderLinks)}</ul>
  </div>
);