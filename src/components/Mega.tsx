import React from 'react';
import Blogcard from '../components/Blogcard';


export default function Mega() {
  const posts = [
    {
      id: "1",
      title: "Generative AI",
      description: "Generative AI refers to a branch of artificial intelligence that focuses on creating new content, such as text, images, music, videos, and even code.",
      date:"2024-12-20",
      image:"../image/11.png",
    },
    {
      id: "2",
      title: "Machine Learning Basics",
      description: "A Dynamic and essential subset of AI that focuses on developing algorithms that enable computers to learn from and make predictions based on data.",
      date:"2024-12-20",
      image:"../image/9.png",
    },
    {
      id: "3",
      title: "Natural Languages Processing",
      description: "Natural Language Processing (NLP) is a field of AI that enables machines to understand, interpret, and generate human language.",
      date:"2024-12-20",
      image:"../image/10.png",
    },
    {
      id: "4",
      title: "Progressive Web Apps",
      description: "stay update on key web development trends like progressive web apps, JavaScript frameworks, and API-driven development for 2024.",
      date:"2024-12-20",
      image:"../image/8.jpg",
    },
    {
      id: "5",
      title: "Cybersecurity Features and Elements",
      description: "Understand essential cybersecurity practices to protect sensitive information, including strong passwords, 2FA, and software updates.",
      date:"2024-12-20",
      image:"../image/6.png",
    },
    {
      id: "6",
      title: "Introduction to Blockchain Technology",
      description: "Discover blockchain fundamentals, its applications beyond cryptocurrencies, and the challenges facing this transformative technology .",
      date:"2024-12-20",
      image:"../image/7.png",
    },


  ]
  return (
    <div className='my-8'>
      <h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change'>
        Exploring the World of Artificial Intelligence and Technology
      </h1>
     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
      {posts.map((post, index)=> (
        <div className="fade-in" key={post.id}>
          <div className='blog-card'>
            <Blogcard post={post} isDarkBackground = {index % 2 === 0}/>
          </div>
        </div>
      ))}

     </div>
    </div>
  );
}
