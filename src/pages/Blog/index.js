import { BlogCard } from './BlogCard'
import { BlogFilter } from './BlogFilter'
import { blogData } from './data'
export const Blog = () => {
    //Should be posible filter by Category and Tags
    return (
        <div>
            Blog
            <BlogFilter />

            {blogData.map((data, e) => <BlogCard data={data} key={e} />)}
        </div>
    )
}
