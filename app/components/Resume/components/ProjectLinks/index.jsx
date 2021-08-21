import React from "react";
import styles from "./styles.scss";

export default React.createClass({
  displayName: "ProjectLinks",

  renderTitle(link) {
    if (link.title) {
      return link.title;
    }
    if (link.visibleLink) {
      return link.visibleLink;
    }
    return link.link;
  },

  renderLinks(link, key) {
    return (
      <li key={key}>
        {this.renderTitle(link)} -{" "}
        {link.link.map((link) => (
          <a key={link.url} href={link.url} target="_blank">
            {link.title}
          </a>
        ))}
      </li>
    );
  },

  render() {
    const { projectLinks } = this.props;
    if (!projectLinks || projectLinks.length)
      return (
        <div>
          <h3>More Projects</h3>
          <ul className={styles.projectsList}>
            {projectLinks.map(this.renderLinks)}
          </ul>
        </div>
      );
  },
});
