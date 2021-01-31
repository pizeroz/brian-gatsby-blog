import React from 'react'
import {Link} from 'gatsby'
import BlogSidebar from './BlogSidebar'
import BlogComment from './BlogComment'
import Config from '../../../config'
import Utils from '../../utils/pageUtils'

const BlogDetailsContent = (data) => {
    const { data: { node, next, previous }} = data;
    const { html, frontmatter } = node;
    const {
        title, excerpt, path, categories, tags, author
    } = frontmatter;
    let prevButton, nextButton;
    if (previous) {
        prevButton = <Link to={Utils.resolvePageUrl(previous.frontmatter.path)}>
                        <span className="image-prev">
                            <img src={previous.frontmatter ? previous.frontmatter.cover.childImageSharp.fluid.src : ''} alt="bb" />
                            <span className="post-nav-title">Prev</span>
                        </span>

                        <span className="prev-link-info-wrapper">
                            <span className="prev-title">{previous.frontmatter.title}</span>
                            <span className="meta-wrapper">
                                <span className="date-post">{previous.frontmatter.date}</span>
                            </span>
                        </span>
                    </Link>;
    }

    if (next) {
        nextButton = <Link to={Utils.resolvePageUrl(next.frontmatter.path)}>
                        <span className="next-link-info-wrapper">
                            <span className="next-title">{next.frontmatter.title}</span>
                            <span className="meta-wrapper">
                                <span className="date-post">{next.frontmatter.date}</span>
                            </span>
                        </span>

                        <span className="image-next">
                            <img src={next.frontmatter ? next.frontmatter.cover.childImageSharp.fluid.src : ''} alt="bb" />
                            <span className="post-nav-title">Next</span>
                        </span>
                    </Link>;
    }
    return (
        <section className="blog-details-area ptb-20">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="blog-details-desc">
                            <h2>{title}</h2>

                            <div className="article-image">
                                <img src={frontmatter ? frontmatter.cover.childImageSharp.fluid.src : ''} alt="bb" />
                            </div>

                            <div className="article-content">
                                <div className="entry-meta">
                                    <ul>
                                        <li>
                                            <i className='bx bx-folder-open'></i>
                                            <Link to="#">
                                                {categories[0]}
                                            </Link>
                                        </li>
                                        <li>
                                            <i className='bx bx-group'></i>
                                            <Link to="#">
                                                813,454
                                            </Link>
                                        </li>
                                        <li>
                                            <i className='bx bx-calendar'></i>
                                            <Link to="#">
                                                {frontmatter.date}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <article className='article-content' dangerouslySetInnerHTML={{ __html: html }} />
                            </div>

                            <div className="article-footer">
                                <div className="article-tags">
                                    <span><i className='bx bx-purchase-tag'></i></span>
                                    {
                                        tags.map(( tag, key ) => (
                                            <Link to="#" key={key}>{tag}</Link>
                                        ))
                                    }
                                </div>

                                <div className="article-share">
                                    <ul className="social">
                                        <li><span>Chia sẻ:</span></li>
                                        <li>
                                            <Link to="#" className="facebook">
                                                <i className='bx bxl-facebook'></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="twitter">
                                                <i className='bx bxl-twitter'></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="linkedin">
                                                <i className='bx bxl-linkedin'></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="instagram">
                                                <i className='bx bxl-instagram'></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="article-author">
                                <div className="author-profile-header"></div>
                                <div className="author-profile">
                                    <div className="author-profile-title">
                                        <img src={frontmatter ? frontmatter.avatar.childImageSharp.fluid.src : ''} className="shadow-sm" alt="uu" />
                                        <h4>{author}</h4>
                                        <span className="d-block">{author}</span>
                                        <p>Chris Orwig is a celebrated photographer, author, and writer who brings passion to everything he does. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="tracer-post-navigation">
                                <div className="prev-link-wrapper">
                                    <div className="info-prev-link-wrapper">
                                        {prevButton}
                                    </div>
                                </div>
                                <div className="next-link-wrapper">
                                    <div className="info-next-link-wrapper">
                                        {nextButton}
                                    </div>
                                </div>
                            </div>

                            <BlogComment data={data}/>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogDetailsContent
