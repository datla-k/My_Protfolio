'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Codepen, Instagram, Twitter, AtSign, X, ExternalLink, Database, Server, Cloud, Code, BarChart, Zap, Award } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

// ... rest of the file remains unchanged

const experiences = [
  {
    date: "2024 — PRESENT",
    title: "Senior Azure Data Engineer · Microsoft",
    description: "Lead data engineering initiatives, design and implement scalable data solutions using Azure services.",
    skills: ["Azure Synapse", "Azure Databricks", "Power BI", "Azure Data Factory"]
  },
  {
    date: "2022 — 2024",
    title: "Data Engineer · Amazon Web Services",
    description: "Developed and maintained data pipelines, worked with big data technologies on AWS.",
    skills: ["AWS Glue", "Amazon Redshift", "AWS Lambda", "Amazon S3"]
  },
  {
    date: "2020 — 2022",
    title: "Junior Data Engineer · Google Cloud",
    description: "Assisted in building data warehouses and ETL processes using Google Cloud Platform tools.",
    skills: ["BigQuery", "Cloud Dataflow", "Cloud Composer", "Looker"]
  }
]

const projects = [
  {
    title: "Azure Data Lake Optimization",
    description: "Improved data lake performance by 40% using advanced partitioning and indexing strategies. Implemented data skipping, Z-Ordering, and compaction of small files for optimal query speeds.",
    image: "/placeholder.svg?height=100&width=150",
    tags: ["Azure Data Lake", "Azure Databricks", "Delta Lake", "PySpark"],
    fullDescription: "This project involved a comprehensive analysis and optimization of our Azure Data Lake storage. By implementing advanced partitioning strategies and leveraging Delta Lake's indexing capabilities, we significantly improved query performance and reduced data retrieval times. The optimization process included data skipping, Z-Ordering, and compaction of small files, resulting in a 40% overall performance boost.",
    challenges: "One of the main challenges was balancing the trade-off between storage cost and query performance. We had to carefully design our partitioning strategy to avoid over-partitioning while still achieving optimal query speeds.",
    outcomes: "The project resulted in faster data analytics, reduced costs due to more efficient storage utilization, and improved data freshness for downstream applications.",
    githubLink: "https://github.com/yourusername/azure-data-lake-optimization"
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Built a real-time analytics dashboard for monitoring IoT device data streams. Leveraged Azure IoT Hub, Stream Analytics, and Power BI for dynamic visualizations.",
    image: "/placeholder.svg?height=100&width=150",
    tags: ["Azure Stream Analytics", "Power BI", "Azure IoT Hub", "Azure Functions"],
    fullDescription: "Developed a comprehensive real-time analytics dashboard to monitor and visualize data streams from thousands of IoT devices. The solution leverages Azure IoT Hub for device communication, Stream Analytics for real-time data processing, and Power BI for dynamic visualizations.",
    challenges: "Handling the high volume and velocity of incoming data while ensuring low-latency updates to the dashboard was a significant challenge. We also had to design an efficient data model that could support real-time aggregations and historical analysis.",
    outcomes: "The dashboard enabled real-time monitoring of device health, predictive maintenance alerts, and operational insights, leading to a 30% reduction in device downtime and significant cost savings.",
    githubLink: "https://github.com/yourusername/realtime-iot-dashboard"
  },
  {
    title: "Data Warehouse Migration",
    description: "Led the migration of a 50TB on-premise data warehouse to Azure Synapse Analytics. Redesigned data model and optimized queries for improved performance.",
    image: "/placeholder.svg?height=100&width=150",
    tags: ["Azure Synapse Analytics", "Azure Data Factory", "T-SQL", "Power BI"],
    fullDescription: "Spearheaded a large-scale migration project, moving a 50TB on-premise data warehouse to Azure Synapse Analytics. The project involved redesigning the data model to take advantage of Synapse's distributed architecture, setting up efficient ETL pipelines using Azure Data Factory, and optimizing queries for improved performance.",
    challenges: "Ensuring data integrity during the migration, minimizing downtime, and re-engineering complex stored procedures to work efficiently in a distributed environment were our primary challenges.",
    outcomes: "The migration resulted in a 60% reduction in query execution times, enabled real-time data ingestion capabilities, and significantly reduced infrastructure management overhead.",
    githubLink: "https://github.com/yourusername/synapse-migration"
  },
  {
    title: "Machine Learning Pipeline",
    description: "Developed an end-to-end ML pipeline for predictive maintenance in manufacturing. Reduced unplanned downtime by 25% and improved overall equipment effectiveness by 15%.",
    image: "/placeholder.svg?height=100&width=150",
    tags: ["Azure Machine Learning", "Python", "Scikit-learn", "Azure Kubernetes Service"],
    fullDescription: "Created a comprehensive machine learning pipeline for predictive maintenance in a large manufacturing plant. The solution encompasses data ingestion from IoT sensors, data preprocessing, model training using Azure Machine Learning, and deployment of the model as an API on Azure Kubernetes Service.",
    challenges: "Dealing with imbalanced datasets, ensuring model interpretability for stakeholders, and creating a scalable infrastructure that could handle real-time scoring were some of the key challenges we faced.",
    outcomes: "The ML pipeline led to a 25% reduction in unplanned downtime, significant cost savings in maintenance, and improved overall equipment effectiveness (OEE) by 15%.",
    githubLink: "https://github.com/yourusername/ml-predictive-maintenance"
  }
]

const skills = [
  { name: "SQL", icon: Database, level: 90 },
  { name: "Python", icon: Code, level: 85 },
  { name: "Azure", icon: Cloud, level: 80 },
  { name: "Spark", icon: Zap, level: 75 },
  { name: "Data Modeling", icon: BarChart, level: 70 },
  { name: "ETL", icon: Server, level: 85 }
]

const certifications = [
  {
    name: "Azure Data Engineer Associate",
    issuer: "Microsoft",
    date: "2023",
    verificationLink: "https://www.credly.com/badges/azure-data-engineer-associate"
  },
  {
    name: "AWS Certified Data Analytics - Specialty",
    issuer: "Amazon Web Services",
    date: "2022",
    verificationLink: "https://www.credly.com/badges/aws-certified-data-analytics-specialty"
  },
  {
    name: "Google Cloud Professional Data Engineer",
    issuer: "Google Cloud",
    date: "2021",
    verificationLink: "https://www.credential.net/google-cloud-professional-data-engineer"
  }
]

const blogPosts = [
  {
    title: "Optimizing Big Data Pipelines: Lessons Learned",
    date: "2024-01-15",
    summary: "Insights from optimizing large-scale data pipelines, focusing on performance tuning and cost reduction strategies.",
    content: `
      <h2>Introduction</h2>
      <p>In the world of big data, efficient pipelines are crucial for timely and cost-effective data processing. This post shares key lessons learned from optimizing large-scale data pipelines, with a focus on performance tuning and cost reduction strategies.</p>

      <h2>1. Data Partitioning Strategies</h2>
      <p>Proper data partitioning is fundamental to pipeline performance. We found that:</p>
      <ul>
        <li>Time-based partitioning works well for historical analyses</li>
        <li>Key-based partitioning is effective for frequent look-ups</li>
        <li>Hybrid approaches can balance query performance and storage costs</li>
      </ul>

      <h2>2. Caching Mechanisms</h2>
      <p>Implementing intelligent caching significantly reduced processing time:</p>
      <ul>
        <li>Use distributed caching for frequently accessed data</li>
        <li>Implement time-to-live (TTL) strategies to maintain data freshness</li>
        <li>Consider write-through caching for real-time applications</li>
      </ul>

      <h2>3. Query Optimization</h2>
      <p>Optimizing queries led to substantial performance gains:</p>
      <ul>
        <li>Use query explain plans to identify bottlenecks</li>
        <li>Leverage columnar storage formats like Parquet for analytical workloads</li>
        <li>Implement predicate pushdown to reduce data transfer</li>
      </ul>

      <h2>4. Resource Allocation</h2>
      <p>Right-sizing resources is key to balancing performance and cost:</p>
      <ul>
        <li>Implement auto-scaling for variable workloads</li>
        <li>Use spot instances for non-critical, interruptible jobs</li>
        <li>Monitor and adjust resource allocation based on usage patterns</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Optimizing big data pipelines is an ongoing process. By focusing on these key areas, we were able to significantly improve performance and reduce costs. Remember, what works for one pipeline may not work for another, so always test and measure the impact of your optimizations.</p>
    `
  },
  {
    title: "The Future of Data Lakes: Trends and Predictions",
    date: "2023-11-30",
    summary: "Exploring emerging trends in data lake technologies and their potential impact on the data engineering landscape.",
    content: `
      <h2>Introduction</h2>
      <p>Data lakes have become a cornerstone of modern data architectures. As we look to the future, several trends are shaping the evolution of data lakes. This post explores these trends and their potential impact on the data engineering landscape.</p>

      <h2>1. Lakehouse Architecture</h2>
      <p>The convergence of data lakes and data warehouses is giving rise to the lakehouse architecture:</p>
      <ul>
        <li>Combines the flexibility of data lakes with the performance of data warehouses</li>
        <li>Enables ACID transactions on data lakes</li>
        <li>Supports both structured and unstructured data</li>
      </ul>

      <h2>2. Real-time Data Processing</h2>
      <p>The demand for real-time insights is driving changes in data lake technologies:</p>
      <ul>
        <li>Stream processing becoming a native feature of data lakes</li>
        <li>Integration with messaging systems like Kafka for real-time data ingestion</li>
        <li>Development of low-latency query engines for data lakes</li>
      </ul>

      <h2>3. Machine Learning Integration</h2>
      <p>Data lakes are becoming central to ML workflows:</p>
      <ul>
        <li>Native support for ML model training and serving</li>
        <li>Integration with popular ML frameworks</li>
        <li>Feature stores built on top of data lakes</li>
      </ul>

      <h2>4. Data Governance and Security</h2>
      <p>As data lakes grow, so does the need for robust governance and security:</p>
      <ul>
        <li>Fine-grained access controls at the row and column level</li>
        <li>Automated data cataloging and lineage tracking</li>
        <li>Enhanced encryption and masking capabilities</li>
      </ul>

      <h2>5. Cloud-Native and Multi-Cloud</h2>
      <p>The future of data lakes is closely tied to cloud technologies:</p>
      <ul>
        <li>Serverless data lake offerings for easier management</li>
        <li>Multi-cloud data lakes to avoid vendor lock-in</li>
        <li>Integration with cloud-native services for enhanced functionality</li>
      </ul>

      <h2>Conclusion</h2>
      <p>The future of data lakes is exciting and full of potential. As data engineers, staying ahead of these trends will be crucial in designing and implementing data architectures that can meet the evolving needs of businesses in the years to come.</p>
    `
  },
  {
    title: "Implementing Data Governance in the Cloud",
    date: "2023-10-22",
    summary: "A comprehensive guide to establishing robust data governance practices in cloud-based data environments.",
    content: `
      <h2>Introduction</h2>
      <p>As organizations increasingly move their data to the cloud, implementing effective data governance becomes crucial. This post provides a comprehensive guide to establishing robust data governance practices in cloud-based data environments.</p>

      <h2>1. Data Classification and Cataloging</h2>
      <p>The foundation of good data governance starts with understanding your data:</p>
      <ul>
        <li>Implement automated data discovery and classification tools</li>
        <li>Develop a comprehensive data catalog</li>
        <li>Establish metadata management practices</li>
      </ul>

      <h2>2. Access Control and Security</h2>
      <p>Securing your data in the cloud requires a multi-layered approach:</p>
      <ul>
        <li>Implement role-based access control (RBAC)</li>
        <li>Use encryption for data at rest and in transit</li>
        <li>Enable multi-factor authentication for sensitive data access</li>
      </ul>

      <h2>3. Data Quality Management</h2>
      <p>Ensuring data quality is critical for trustworthy analytics and decision-making:</p>
      <ul>
        <li>Implement data quality rules and checks</li>
        <li>Set up data quality monitoring and alerting</li>
        <li>Establish data cleansing and standardization processes</li>
      </ul>

      <h2>4. Data Lifecycle Management</h2>
      <p>Managing data throughout its lifecycle is key to efficient governance:</p>
      <ul>
        <li>Define data retention policies</li>
        <li>Implement automated archiving and deletion processes</li>
        <li>Ensure compliance with relevant regulations (e.g., GDPR, CCPA)</li>
      </ul>

      <h2>5. Auditing and Compliance</h2>
      <p>Regular auditing ensures ongoing compliance and identifies areas for improvement:</p>
      <ul>
        <li>Implement comprehensive logging and auditing</li>
        <li>Conduct regular compliance assessments</li>
        <li>Use cloud-native tools for continuous compliance monitoring</li>
      </ul>

      <h2>6. Data Lineage and Impact Analysis</h2>
      <p>Understanding data flow and dependencies is crucial for governance:</p>
      <ul>
        <li>Implement data lineage tracking</li>
        <li>Conduct regular impact analysis for proposed changes</li>
        <li>Use visualization tools to make data lineage accessible to stakeholders</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Implementing data governance in the cloud is an ongoing process that requires commitment and collaboration across the organization. By focusing on these key areas, you can establish a robust governance framework that ensures data security, quality, and compliance in your cloud-based data environment.</p>
    `
  }
]

export default function Home() {
  const [hoveredExp, setHoveredExp] = useState<number | null>(null)
  const [hoveredProj, setHoveredProj] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [selectedBlogPost, setSelectedBlogPost] = useState<number | null>(null)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'certifications', 'skills', 'experience', 'projects', 'blog']
      const scrollPosition = window.scrollY

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          if (top <= 100 && bottom > 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (selectedProject !== null || selectedBlogPost !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject, selectedBlogPost])

  const closeModal = () => {
    setSelectedProject(null)
    setSelectedBlogPost(null)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#0a192f] text-[#8892b0] flex">
      <div className="w-1/4 fixed h-screen p-10 flex flex-col justify-between">
        <div>
          <h1 className="text-5xl font-bold text-[#ccd6f6] mb-2">KOUSHIK</h1>
          <h2 className="text-2xl text-[#64ffda] mb-4">Azure Data Engineer</h2>
          <p className="mb-8">
            I build scalable, efficient, and innovative data solutions.
          </p>
          <nav className="mt-10">
            <ul className="space-y-4">
              {['about', 'certifications', 'skills', 'experience', 'projects', 'blog'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`text-lg ${
                      activeSection === section ? 'text-[#64ffda]' : 'text-[#8892b0]'
                    } hover:text-[#64ffda] transition-colors focus:outline-none`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-[#8892b0] hover:text-[#64ffda]"><Github size={20} /></a>
          <a href="#" className="text-[#8892b0] hover:text-[#64ffda]"><Linkedin size={20} /></a>
          <a href="#" className="text-[#8892b0] hover:text-[#64ffda]"><Codepen size={20} /></a>
          <a href="#" className="text-[#8892b0] hover:text-[#64ffda]"><Instagram size={20} /></a>
          <a href="#" className="text-[#8892b0] hover:text-[#64ffda]"><Twitter size={20} /></a>
          <a href="#" className="text-[#8892b0] hover:text-[#64ffda]"><AtSign size={20} /></a>
        </div>
      </div>
      <div className="w-3/4 ml-auto p-10">
        <section id="about" className="mb-20">
          <h3 className="text-2xl text-[#ccd6f6] mb-6">About Me</h3>
          <p>
            With a strong background in Azure cloud services and data engineering, 
            I specialize in designing and implementing robust data solutions. 
            My expertise spans across big data processing, data warehousing, 
            and building scalable ETL pipelines.
          </p>
        </section>

        <section id="certifications" className="mb-20">
          <h3 className="text-2xl text-[#ccd6f6] mb-6">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-[#112240] p-4 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-2">
                  <Award className="text-[#64ffda] mr-2" size={20} />
                  <h4 className="text-[#ccd6f6] text-lg">{cert.name}</h4>
                </div>
                <p className="text-sm mb-1">{cert.issuer}</p>
                <p className="text-sm mb-2">{cert.date}</p>
                <a
                  href={cert.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#64ffda] hover:underline text-sm"
                >
                  Verify
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="skills" className="mb-20">
          <h3 className="text-2xl text-[#ccd6f6] mb-6">Skills</h3>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center bg-[#112240] px-3 py-2 rounded-full">
                <skill.icon size={16} className="text-[#64ffda] mr-2" />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="mb-20">
          <h3 className="text-2xl text-[#ccd6f6] mb-6">Where I've Worked</h3>
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="mb-6 p-4 transition-all duration-300 ease-in-out"
              style={{
                transform: hoveredExp === index ? 'scale(1.05)' : 'scale(1)',
                boxShadow: hoveredExp === index ? '0 10px 30px -15px rgba(2,12,27,0.7)' : 'none'
              }}
              onMouseEnter={() => setHoveredExp(index)}
              onMouseLeave={() => setHoveredExp(null)}
            >
              <h4 className="text-[#ccd6f6] text-xl mb-2">{exp.date}</h4>
              <h5 className="text-[#64ffda] text-lg">{exp.title}</h5>
              <p className="text-sm mb-2">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="bg-[#233554] text-[#64ffda] px-2 py-1 rounded text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section id="projects" className="mb-20">
          <h3 className="text-2xl text-[#ccd6f6] mb-6">Some Things I've Built</h3>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 ease-in-out cursor-pointer"
                style={{
                  transform: hoveredProj === index ? 'scale(1.02)' : 'scale(1)',
                  boxShadow: hoveredProj === index ? '0 10px 30px -15px rgba(2,12,27,0.7)' : 'none'
                }}
                onMouseEnter={() => setHoveredProj(index)}
                onMouseLeave={() => setHoveredProj(null)}
                onClick={() => setSelectedProject(index)}
              >
                <Image src={project.image} alt={project.title} width={150} height={100} className="rounded" />
                <div className="flex-1">
                  <h4 className="text-[#ccd6f6] text-xl mb-2 flex items-center">
                    {project.title}
                    <ExternalLink size={16} className="ml-2 text-[#64ffda]" />
                  </h4>
                  <p className="text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-[#233554] text-[#64ffda] px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="blog" className="mb-20">
          <h3 className="text-2xl text-[#ccd6f6] mb-6">Latest Blog Posts</h3>
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <div 
                key={index} 
                className="bg-[#112240] p-6 rounded-lg transition-all duration-300 ease-in-out hover:transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedBlogPost(index)}
              >
                <h4 className="text-[#ccd6f6] text-xl mb-2">{post.title}</h4>
                <p className="text-sm text-[#8892b0] mb-2">{post.date}</p>
                <p className="text-sm">{post.summary}</p>
                <button className="inline-block mt-2 text-[#64ffda] hover:underline">Read more</button>
              </div>
            ))}
          </div>
        </section>
      </div>

      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#0a192f] p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl text-[#ccd6f6]">{projects[selectedProject].title}</h3>
              <button onClick={closeModal} className="text-[#8892b0] hover:text-[#64ffda]">
                <X size={24} />
              </button>
            </div>
            <Image 
              src={projects[selectedProject].image} 
              alt={projects[selectedProject].title} 
              width={600} 
              height={400} 
              className="mb-4 rounded"
            />
            <p className="text-[#8892b0] mb-4">{projects[selectedProject].fullDescription}</p>
            <h4 className="text-[#ccd6f6] text-lg mb-2">Challenges:</h4>
            <p className="text-[#8892b0] mb-4">{projects[selectedProject].challenges}</p>
            <h4 className="text-[#ccd6f6] text-lg mb-2">Outcomes:</h4>
            <p className="text-[#8892b0] mb-4">{projects[selectedProject].outcomes}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {projects[selectedProject].tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="bg-[#233554] text-[#64ffda] px-2 py-1 rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>
            <a 
              href={projects[selectedProject].githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-[#64ffda] text-[#0a192f] px-4 py-2 rounded hover:bg-[#45c7b3] transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      )}

      {selectedBlogPost !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#0a192f] p-8 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl text-[#ccd6f6]">{blogPosts[selectedBlogPost].title}</h3>
              <button onClick={closeModal} className="text-[#8892b0] hover:text-[#64ffda]">
                <X size={24} />
              </button>
            </div>
            <p className="text-sm text-[#8892b0] mb-4">{blogPosts[selectedBlogPost].date}</p>
            <div 
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPosts[selectedBlogPost].content }}
            />
          </div>
        </div>
      )}
    </div>
  )
}