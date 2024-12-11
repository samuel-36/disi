import BlogCard from "./BlogCard";

interface SuggestionsProps {
  posts: { title: string; excerpt: string; image: string; slug: string }[];
}

const Suggestions: React.FC<SuggestionsProps> = ({ posts }) => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-800">You Might Also Like</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {posts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
