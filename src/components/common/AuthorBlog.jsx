import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Image from "gatsby-image";

//config
import { about, banner } from "../../data/config";

export default function AuthorBlog() {
  const data = useStaticQuery(graphql`
    query AuthorQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 108, height: 108) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
          author {
            name
          }
        }
      }
    }
  `);

  const title = data.site.siteMetadata?.title;
  const author = data.site.siteMetadata?.author.name;
  const avatar = data?.avatar?.childImageSharp?.fixed;
  const aboutDescription = about.aboutDescription;
  const icons = banner.icons;

  return (
    <aside className="mt-5 mt-lg-0 widget-author widget text-center">
      <div className="widget-author-inner">
        <div className="author-avatar-center">
          <Image
            fixed={avatar}
            alt={`${title} - ${author}`}
            className="author-avatar rounded-circle"
          />
        </div>
        <h2 className="mt-5 author-name">{author}</h2>
        <h5 className="author-title d-none d-lg-block">about me</h5>
        <p className="mb-2">{aboutDescription}</p>
        <Link className="know-more">know more</Link>
      </div>
      <div className="text-center pt-3 pb-5">
        {icons.map((icon) => (
          <a
            className="socialicons text-muted"
            target="_blank"
            rel="noopener noreferrer"
            href={icon.url}
          >
            <i className={`${icon.image} fa-2x`} />
          </a>
        ))}
      </div>
    </aside>
  );
}
