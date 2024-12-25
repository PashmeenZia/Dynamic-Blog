"use client"
import React from 'react';
import CommentSection from '@/components/CommentSection';
import AuthorCard from '@/components/AuthorCard';

const posts = [
  {
    id: "1",
    title: "Generative AI",
    description: "Generative AI refers to a category of artificial intelligence models designed to create new content, such as text, images, audio, or video, by learning patterns and structures from existing data. These models, powered by advanced algorithms like deep learning and neural networks, can produce outputs that mimic human creativity and communication. Generative AI has a wide range of applications, including generating realistic images, writing essays, creating music, designing products, and simulating conversations. It is driven by technologies like Generative Adversarial Networks (GANs) and transformer models, such as GPT and DALL·E, which enable machines to understand context and generate coherent, contextually relevant outputs. This innovation has transformed industries by enhancing productivity, enabling personalization, and opening new avenues for creativity, while also raising ethical questions about its misuse and the authenticity of AI-generated content.",
    date:"2024-12-20",
    image:"../image/11.png",
  },
  {
    id: "2",
    title: "Machine Learning Basics",
    description: "Machine Learning (ML) is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed. It involves the development of algorithms that can identify patterns in data, make predictions, or automate decision-making processes. Machine learning models are trained on data, allowing them to generalize and handle new, unseen inputs. The field encompasses various techniques, including supervised learning (where models learn from labeled data), unsupervised learning (where they identify hidden patterns in unlabeled data), and reinforcement learning (where agents learn optimal behaviors through trial and error). ML is foundational to many modern technologies, powering applications such as recommendation systems, autonomous vehicles, fraud detection, and natural language processing.",
    date:"2024-12-20",
    image:"../image/9.png",
  },
  {
    id: "3",
    title: "Natural Languages Processing",
    description: "AI is transforming healthcare by improving diagnostics, personalized medicine, and predictive analystics for better patient outcomes.Natural Language Processing (NLP) is a branch of artificial intelligence that focuses on the interaction between computers and human language, enabling machines to understand, interpret, and generate natural language. It combines computational linguistics with machine learning and deep learning techniques to process and analyze large volumes of text and speech data. NLP powers applications such as language translation, sentiment analysis, speech recognition, chatbots, and text summarization. By leveraging models that understand syntax, semantics, and context, NLP allows machines to perform tasks like answering questions, detecting emotions, and automating customer support. Its advancements have revolutionized industries by improving communication, automating repetitive tasks, and enabling more intuitive interactions between humans and technology. However, challenges like handling language ambiguity, cultural nuances, and ethical concerns remain areas of active research and development.",
    date:"2024-12-20",
    image:"../image/10.png",
  },
  {
    id: "4",
    title: "Progressive Web Apps",
    description: "Progressive Web Apps (PWAs) are web applications that combine the functionality of traditional websites with the seamless user experience of native mobile apps. Built using standard web technologies like HTML, CSS, and JavaScript, PWAs are designed to be fast, reliable, and engaging. They offer features such as offline access, push notifications, and home screen installation, making them highly adaptable and user-friendly. PWAs work across various devices and browsers, eliminating the need for separate app development for different platforms. By leveraging service workers and responsive design, they deliver a consistent and secure experience, even in low-network conditions, bridging the gap between web and mobile applications effectively.",
    date:"2024-12-20",
    image:"../image/8.jpg",
  },
  {
    id: "5",
    title: "Cybersecurity Features and Elements",
    description: "Cybersecurity encompasses a range of features and elements designed to protect digital systems, networks, and data from unauthorized access, theft, or damage. Core elements include encryption to secure data, firewalls to monitor and control network traffic, and intrusion detection systems to identify and mitigate threats. Multi-factor authentication (MFA) and access controls ensure only authorized users can access sensitive resources. Regular software updates and patches address vulnerabilities, while robust antivirus and anti-malware solutions defend against malicious attacks. Additionally, data backup and disaster recovery plans help maintain continuity during breaches. Cybersecurity also emphasizes user education to prevent phishing and social engineering attacks, creating a comprehensive approach to safeguarding digital assets.",
    date:"2024-12-20",
    image:"../image/6.png",
  },
  {
    id: "6",
    title: "Introduction to Blockchain Technology",
    description:"Blockchain technology is a decentralized, distributed ledger system that records transactions securely and transparently across multiple computers. It operates on a peer-to-peer network, eliminating the need for intermediaries and ensuring trust through cryptographic algorithms. Each transaction is grouped into a block which is linked to the previous block, forming a chronological chain This structure makes blockchain immutable, as altering any block would require changes to all subsequent blocks, which is nearly impossible. Blockchain is the foundation of cryptocurrencies like Bitcoin but extends to various applications, including supply chain management, smart contracts, and secure identity verification, revolutionizing how data and transactions are managed in the digital age.",
    date:"2024-12-20",
    image:"../image/7.png",
  },
]; 

export default function Post({params} : {params : {id: string}}) {
  const {id} = params;
  const post = posts.find((p) => p.id === id);

  if(!post){
    return(
      <h2 className='text-2xl font-bold text-center mt-10'>Post Not Found</h2>
    );
  }

  const renderParagraphs = (description:string) => {
    return description.split("/n").map((para, index) => (
      <p key={index} className='mt-4mtext-jutify'>
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className='max-w-3xl mx-auto p-5'>
      <h1 className='md:text-4xl text-3xl font-bold text-blue-900 animate-color-change text-center'>{post.title}</h1>

      {post.image && (
        <img
        src={post.image}
        alt={post.title}
        className='w-full h-auto rounded-md mt-4'/>
      )}

      <div className='mt-6 text-lg text-slate-700'>
        {renderParagraphs(post.description)}
      </div>
      <CommentSection postId={post.id}/>
      <AuthorCard/>
    </div>
  )
}
