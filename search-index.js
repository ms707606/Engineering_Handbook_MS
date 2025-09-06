// Search index for cross-page search functionality
const searchIndex = [
  {
    title: "Welcome to our Engineering Handbook!",
    filePath: "main.html",
    content: "This handbook serves as a comprehensive resource, supporting you throughout your journey, whether you're a student entering the field, a seasoned professional revisiting the fundamentals, or anywhere in between. Together, we're revolutionizing education through technology, shaping a brighter and more interconnected future for learning. This handbook is designed to support your professional growth by providing essential knowledge, best practices, and technical insights. Discover the vision that drives us. Learn about each role within the team. Understand the company's structure."
  },
  {
    title: "Mission & Vision",
    filePath: "mission.html", 
    content: "Our mission is to revolutionize education through technology. We believe in creating innovative solutions that make learning more accessible, engaging, and effective for students worldwide. Our vision is to be the leading force in educational technology, empowering educators and learners to achieve their full potential through cutting-edge digital solutions."
  },
  {
    title: "Tech Manifesto",
    filePath: "tech_manifesto.html",
    content: "This manifesto outlines our commitment to innovation, collaboration, and ethical technology. We embrace diversity. Our strength lies in our diversity. We actively seek and value talent from all backgrounds, irrespective of gender, race, ethnicity, religion, disability, age, sexual orientation, or any differences. We appreciate the differences among us as they contribute not merely to our collective strength, but also to the richness and depth of our innovation. We are one team. There's no division here. We're all part of the same team. Collaboration and leveraging different perspectives are our strengths to successfully achieve collective goals. We embrace mistakes and learn from them. We are user-centric. We build, own and run it. We are curious. Curiosity is a valuable trait here. We stay curious and open to learning. We constantly explore new ideas and technologies. Our curiosity drives our innovation and keeps us ahead in the tech landscape."
  },
  {
    title: "Competencies Framework",
    filePath: "Competencies.html",
    content: "Our competencies framework defines the skills, knowledge, and behaviors expected at each level of our engineering organization. This framework helps guide career development, performance reviews, and hiring decisions. It covers technical skills, leadership capabilities, communication, and domain expertise across different engineering roles."
  },
  {
    title: "Engineering Structure Vision",
    filePath: "Structure/Engineering_Structure.html",
    content: "Our engineering structure is designed to support scalable growth while maintaining high-quality standards. We organize teams around domains and capabilities, enabling focused expertise while promoting cross-team collaboration. This structure supports both individual contributor growth and technical leadership development."
  },
  {
    title: "Domain-Centric Structure",
    filePath: "Structure/Domain_Centric.html",
    content: "We organize our engineering teams around business domains to ensure deep understanding of user needs and business context. Each domain team owns the full stack of their area, from frontend to backend to data, enabling faster iteration and better user experiences. This structure promotes ownership, accountability, and technical excellence."
  },
  {
    title: "Cluster of Domains",
    filePath: "Structure/Cluster_of_Domains.html",
    content: "Related domains are grouped into clusters to facilitate knowledge sharing, resource allocation, and strategic alignment. Clusters help coordinate cross-domain initiatives while maintaining domain autonomy. This structure enables both focused domain expertise and broader organizational coherence."
  },
  {
    title: "Driving Engineering Consistency",
    filePath: "Structure/Driving_engineering.html",
    content: "We maintain engineering consistency through shared standards, tools, and practices across all teams. This includes coding standards, architectural patterns, testing practices, and deployment processes. Consistency enables knowledge sharing, reduces cognitive load, and ensures high-quality outcomes across the organization."
  },
  {
    title: "Recap & FAQs",
    filePath: "Structure/Recap.html",
    content: "This section provides a summary of our engineering structure and answers to frequently asked questions. It serves as a quick reference for understanding how our organization works, career paths, and key processes. This resource helps both new team members and existing employees navigate our engineering culture and practices."
  },
  {
    title: "OrgTech Team",
    filePath: "Teams/OrgTech.html",
    content: "The OrgTech team focuses on building and maintaining the internal tools and systems that power our organization. This includes HR systems, project management tools, communication platforms, and other infrastructure that enables our teams to work effectively. We ensure these systems are reliable, user-friendly, and scalable to support our growing organization."
  }
];

// Function to search across all pages
function searchAcrossPages(searchTerm) {
  if (!searchTerm || searchTerm.trim() === '') {
    return [];
  }

  const term = searchTerm.toLowerCase();
  const results = [];

  searchIndex.forEach(page => {
    const contentLower = page.content.toLowerCase();
    const titleLower = page.title.toLowerCase();
    
    // Check if search term appears in title or content
    if (titleLower.includes(term) || contentLower.includes(term)) {
      // Find the context around the search term
      let context = '';
      const termIndex = contentLower.indexOf(term);
      
      if (termIndex !== -1) {
        // Get context around the search term (50 characters before and after)
        const start = Math.max(0, termIndex - 50);
        const end = Math.min(contentLower.length, termIndex + term.length + 50);
        context = page.content.substring(start, end);
        
        // Add ellipsis if we're not at the beginning or end
        if (start > 0) context = '...' + context;
        if (end < page.content.length) context = context + '...';
      } else {
        // If not found in content, use title as context
        context = page.title;
      }
      
      results.push({
        title: page.title,
        filePath: page.filePath,
        context: context
      });
    }
  });

  return results;
}
