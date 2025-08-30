"use client";
import { useState } from "react";
import Image from "next/image";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-pink-200 shadow-md">
        <div className="w-full flex items-center justify-between h-15 px-5">
          <a href="/" className="w-30">
            <Image src="/s.png" width={120} height={40} alt="Logo" />
          </a>

          <div className="hidden md:flex space-x-4 font-semibold">
            <a className="hover:text-pink-500" href="#">Home</a>
            <a className="hover:text-pink-500" href="#">About Us</a>
            <a className="hover:text-pink-500" href="#">Service</a>
            <a className="hover:text-pink-500" href="#">Portofolio</a>
            <a className="hover:text-pink-500" href="#">Contact</a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white shadow-md px-4 py-2 space-y-2 text-sm">
            <a className="block hover:text-pink-500" href="#">Home</a>
            <a className="block hover:text-pink-500" href="#">About Us</a>
            <a className="block hover:text-pink-500" href="#">Service</a>
            <a className="block hover:text-pink-500" href="#">Portofolio</a>
            <a className="block hover:text-pink-500" href="#">Contact</a>
          </div>
        )}
      </nav>
  
    <section className="px-6 container mx-auto flex justify-between items-center h-150">
        <div className="w-3/6">
          <h4 className="text-xl font-bold text-black">𝓑𝓸𝓾𝓷𝓳𝓸𝓾𝓻۶ৎ</h4>
          <h3 className="text-4xl font-bold text-green-950 ">𝑯𝒊, 𝑰'𝒎 𝑺𝒉𝒂𝒉𝒂𝒅𝒂𖹭</h3>
          <h4 className="text-xl font-bold text-pink-500">Frontend |</h4>
          <p className="mb-5">⤑ I'm a Software Engineer, particularly in Front-End Development. I'm 16 years old and currently in 11th grade at SMK Telkom Malang</p>
          <button className="bg-pink-500 text-white px-5 py-2 border-pink-500 rounded-xl ">Contact Us</button>
        </div>
        <img className="w-80 items-center rounded-full  border-3 border-pink-500" src="/syifaa.jpeg" />
      </section>

<section className="bg-pink-50 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-10 px-6">
          <div className="flex justify-center md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/s.png"
              alt="Profile"
              width={350}
              height={350}
              className="rounded-full shadow-lg"
            />
          </div>

          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-pink-500 font-semibold mb-2">𝓐𝓫𝓸𝓾𝓽 𝓜𝓮ʚɞ</h2>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              My Real Life is Up to You? I am a{" "}
              <span className="text-pink-500">Front End Developer</span>
            </h1>
            <p className="text-gray-600 mb-4">
              I’m a Front End developer and designer living Malang, Indonesian. I spend
              my days studying about front end, Back end and also UI/UX Design.
            </p>

            <ul className="grid grid-cols-2 gap-2 text-gray-700 mb-6">
              <li>• Front-end Development</li>
              <li>• UI/UX Design</li>
              <li>• Back-end Development</li>
              <li>• Marketing</li>
            </ul>

            <button className="bg-pink-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-pink-600">
              Download CV
            </button>
          </div>
        </div>
      </section>


      <footer className="bg-white py-10 shadow-inner">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Now</h3>
            <p>@hadahacker.com</p>
            <p>+62 856-0997-2009</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p>Jl. Temen Level 2, Malang, East Java</p>
            <p>Indonesian</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Social Media</h3>
            <div className="flex justify-center md:justify-start space-x-3 text-pink-500">
              <li className="#">Tw: @Cimolpedazz</li>
              <li className="#">Ig: @Sh4mieeera</li>
              <li className="#">GitHub: Shahada209</li>
            </div>
          </div>
        </div>
      </footer>

      <section className="bg-pink-50 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-pink-500">𝓞𝓾𝓻 𝓢𝓮𝓻𝓿𝓲𝓬𝓮﹗</h2>
        <div className="w-20 h-1 bg-pink-500 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        
          <div className="bg-pink-500 rounded-xl shadow-lg p-8 hover:scale-105 transition">
            <div className="text-yellow-400 text-5xl mb-4">🖥️</div>
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <p className="text-gray-300 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>

         
          <div className="bg-pink-500 rounded-xl shadow-lg p-8 hover:scale-105 transition">
            <div className="text-yellow-400 text-5xl mb-4">🛠️</div>
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <p className="text-gray-300 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>

          
          <div className="bg-pink-500 rounded-xl shadow-lg p-8 hover:scale-105 transition">
            <div className="text-yellow-400 text-5xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">Marketing</h3>
            <p className="text-gray-300 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
        </div>
      </div>
    </section>
      
        

         <section className="py-12 container mx-auto px-6 h-100">
        <h2 className="text-3xl font-bold mb-6 text-pink-500">𝓜𝔂 𝓙𝓸𝓾𝓻𝓷𝓮𝔂☆</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Some History of My Life, 2009 - 2025</h3>
            <p className="text-gray-600 mb-4">Hi, my name is Hada, and this is a brief story of my life so far.</p>
            <p className="text-sm text-gray-500">Date of Birth: 20 february 2009</p>
            <img src="/cat.gif" alt="Profile Animation" className="rounded-lg w-50 max-w-md" />
          </div>
          <div>
            <ul className="text-gray-600 space-y-2">
              <li><strong>2009</strong> - This was the year I was born.</li>
              <li><strong>2015</strong> - I took my first steps into the world of education. It was the year I entered school.</li>
              <li><strong>2024</strong> - I began my journey towards becoming a software engineer at SMK Telkom Malang.</li>
              <li><strong>2025</strong> - Now, in 2025, I’m diving deep into the world of front-end development. Each day is a new opportunity to refine my skills, create new things, and build the future. </li>
            </ul>
            <button className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-lg shadow hover:bg-pink-600">
              Download CV
            </button>
          </div>
        </div>
      </section>

     
      <section className="py-12 bg-pink-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4 text-pink-500">𝓢𝓾𝓼𝓬𝓻𝓲𝓫𝓮 𝓽𝓸 𝓞𝓾𝓻 𝓝𝓮𝔀𝓼𝓵𝓮𝓽𝓽𝓮𝓻</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <input type="email" placeholder="Enter your email"
              className="w-full md:w-1/3 px-4 py-2 rounded-lg border border-gray-500 focus:outline-none" />
            <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    
      </>
  );
}
  
