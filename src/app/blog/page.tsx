import BlogCard from "@/components/BlogCard";

const BlogPage = () => {
  const blogPosts = [
    {
      title: "Benefits of an Enterprise Content Management System to Streamline your Business Operations.",
      excerpt: "Discover how an Enterprise Content Management System can revolutionize your business by improving efficiency, enhancing collaboration, and reducing operational costs.",
      image: "/blogImages/benefitsofECM.jpg",
      slug: "enterprise-content-management-benefits",
    },
    {
      title: "WHAT WORKFLOW SYSTEM DOES YOUR ORGANIZATION USE?",
      excerpt: "The right workflow system can make or break productivity. Explore the importance of choosing the right tools to optimize your organization's processes.",
      image: "/blogImages/whatworkflow.jpg",
      slug: "workflow-system-for-your-organization",
    },
    {
      title: "DOCUMENT SECURITY AND THE 2 METHODS PROVEN TO HANDLE ALL YOUR SECURITY BREACHES",
      excerpt: "Protect your sensitive information with two tried-and-tested document security methods designed to prevent breaches and safeguard your business.",
      image: "/blogImages/documentsecurity.jpg",
      slug: "document-security-methods",
    },
    {
      title: "CONSIDER BULK SCANNING YOUR BACKLOG DATA",
      excerpt: "Bulk scanning can help you digitize historical documents quickly, freeing up space and ensuring easy access to critical information.",
      image: "/blogImages/consider.jpg",
      slug: "bulk-scanning-backlog-data",
    },
    {
      title: "THINGS TO CONSIDER WHEN IMPLEMENTING A DOCUMENT MANAGEMENT SYSTEM",
      excerpt: "Implementing a document management system requires careful planning. Learn the key factors to ensure a smooth transition and long-term success.",
      image: "/blogImages/thingstoconsider.jpg",
      slug: "implementing-document-management-system",
    },
    {
      title: "IMPORTANCE OF BUSINESS INTELLIGENCE",
      excerpt: "Business Intelligence tools empower decision-making through data-driven insights. Discover why BI is essential for modern organizations.",
      image: "/blogImages/importanceofBusinessIntelligence.jpg",
      slug: "importance-of-business-intelligence",
    },
    {
      title: "DIGITIZATION VS DIGITALIZATION: WHAT’S THE DIFFERENCE?",
      excerpt: "Although often used interchangeably, digitization and digitalization have distinct meanings. Uncover their differences and how they impact your business.",
      image: "/blogImages/digitizationvsdigitalization.jpg",
      slug: "digitization-vs-digitalization",
    },
    {
      title: "WHY SHOULD YOU AUTOMATE YOUR BUSINESS PROCESSES?",
      excerpt: "Automation is more than a trend—it’s a necessity. Learn how automating business processes can save time, cut costs, and boost productivity.",
      image: "/blogImages/whyshouldyouautomate.jpg",
      slug: "why-automate-business-processes",
    },
    {
      title: "DIGITAL IMAGING AND SCANNING INTERNATIONAL Ltd - YOUR DIGITIZATION PARTNER",
      excerpt: "At Digital Imaging and Scanning International Ltd, we specialize in helping businesses transition to a fully digitized environment with expert solutions.",
      image: "/blogImages/yourdigitizationpartner.jpg",
      slug: "digital-imaging-and-scanning-international",
    },
    // Add more posts...
  ];

  return (
    <div className="mx-auto px-4 py-8 bg-white">
      <h1 className="mb-4 text-center text-3xl text-slate-700 md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-green-400 to-green-950 text-transparent bg-clip-text mt-5">WHAT'S HAPPENING AT DISI GROUP</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

