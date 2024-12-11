
// import Link from "next/link";
// //former code
// interface BlogCardProps {
//   title: string;
//   excerpt: string;
//   image: string;
//   slug: string;
// }

// const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, image, slug }) => {
//   return (
//     <Link href={`/blog/${slug}`} className="block">
//       <div className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
//         <img src={image} alt={title} className="w-full h-48 object-cover" />
//         <div className="p-4">
//           <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
//           <p className="text-gray-600 mt-2">{excerpt}</p>
//           <span className="mt-4 inline-block">
//             <Link
//               href={`/blog/${slug}`}
//               className="bg-green-950 text-white px-3 py-2 rounded-lg font-medium inline-flex items-center justify-center text-xs lg:text-sm"
//             >
//               Read More
//             </Link>
//           </span>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default BlogCard;

import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, image, slug }) => {
  return (
    <Link href={`/blog/${slug}`} className="block">
      <div className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <p className="text-gray-600 mt-2">{excerpt}</p>
          <span className="bg-green-950 text-white px-3 py-2 rounded-lg font-medium inline-flex items-center justify-center text-xs lg:text-sm">
            Read More
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
