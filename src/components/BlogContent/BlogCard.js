import React from 'react'
import moment from 'moment';
import {Link} from 'gatsby'
import Utils from '../../utils/pageUtils';

const BlogCard = (props) => {
    const { data: { node: { frontmatter } } } = props;
    return (
        <div className="single-blog-post bg-fffbf5">
            <div className="post-image">
                <Link to={Utils.resolvePageUrl(frontmatter.path)}>
                    <img src={frontmatter ? frontmatter.cover.childImageSharp.fluid.src : ''} alt="image" />
                </Link>
            </div>

            <div className="post-content">
                <ul className="post-meta d-flex justify-content-between align-items-center">
                    <li>
                        <div className="post-author d-flex align-items-center">
                            <img src={frontmatter ? frontmatter.avatar.childImageSharp.fluid.src : ''} className="rounded-circle" alt="image" />
                            <span>{frontmatter.author}</span>
                        </div>
                    </li>
                    <li>
                        <i className='flaticon-calendar'></i>{frontmatter ? moment(frontmatter.date).format('DD/MM/YYYY') : ''}
                    </li>
                </ul>
                <h3>
                    <Link to={Utils.resolvePageUrl(frontmatter.path)}>
                        {frontmatter ? frontmatter.title : ''}
                    </Link>
                </h3>
            </div>
        </div>
    )
}

export default BlogCard
