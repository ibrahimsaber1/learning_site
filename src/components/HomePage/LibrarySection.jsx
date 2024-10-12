// LibrarySection.js
import React from 'react';
import '../../styles/HomePage/LibrarySection.css';

const LibrarySection = () => {
  return (
    <section className="library-section text-center">
        <div className="library-div position-relative">
      <h2 className="section-title">A UNIVERSE OF ARABIC LIBRARY IN ALMOST "EVERYTHING"</h2>
      <h2 className="section-title">LEARNING THROUGH YOUTUBE IN ITS UNIQUE PRIME</h2>

      <button className="Explore-btn">Explore our learning youinverse</button>

      <main className="container mx-auto px-4 content-wrapper">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example card structure  "/assets/course1.jpeg" */}
            <div className="course-card">
                <div className="card-image">
                   <img src="/assets/course1.jpeg" alt="Graphic Design" className="card-image" />             
                  </div>
                <div className="card-content">
                    <h3 className="font-bold mb-2">Graphic Design</h3>
                    <p className="text-sm text-gray-400 mb-4">Learn the essentials of graphic design and more.</p>
                    <a href="#" className="text-blue-400 text-sm">Learn more →</a>
                </div>
            </div>

            <div className="course-card">
                <div className="card-image">
                    <img src="/assets/course1.jpeg" alt="Back-end Programming" className="card-image" />
                </div>
                <div className="card-content">
                    <h3 className="font-bold mb-2">Back-end Programming</h3>
                    <p className="text-sm text-gray-400 mb-4">Master back-end programming concepts and frameworks.</p>
                    <a href="#" className="text-blue-400 text-sm">Learn more →</a>
                </div>
            </div>

            <div className="course-card">
                <div className="card-image">
                    <img src="/assets/course1.jpeg" alt="Front-end Programming" className="card-image"/>
                </div>
                <div className="card-content pr-4">
                    <h3 className="font-bold mb-2">Front-end Programming</h3>
                    <p className="text-sm text-gray-400 mb-4">Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans.</p>
                    <a href="#" className="text-blue-400 text-sm">Learn more →</a>
                </div>
            </div>

            <div className="course-card">
                <div className="card-image">
                    <img src="/assets/course1.jpeg" alt="UI/UX Design" className="card-image"/>
                </div>
                <div className="card-content pr-4">
                    <h3 className="font-bold mb-2">UI/UX Design</h3>
                    <p className="text-sm text-gray-400 mb-4">Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans.</p>
                    <a href="#" className="text-blue-400 text-sm">Learn more →</a>
                </div>
            </div>

            <div className="course-card">
                <div className="card-image">
                    <img src="/assets/course1.jpeg" alt="Back-end Programming" className="card-image"/>
                </div>
                <div className="card-content pr-4">
                    <h3 className="font-bold mb-2">Back-end Programming</h3>
                    <p className="text-sm text-gray-400 mb-4">Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans.</p>
                    <a href="#" className="text-blue-400 text-sm">Learn more →</a>
                </div>
            </div>

            <div className="course-card">
                <div className="card-image">
                    <img src="/assets/course1.jpeg" alt="UI/UX Design" className="card-image"/>
                </div>
                <div className="card-content pr-4">
                    <h3 className="font-bold mb-2">UI/UX Design</h3>
                    <p className="text-sm text-gray-400 mb-4">Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans.</p>
                    <a href="#" className="text-blue-400 text-sm">Learn more →</a>
                </div>
            </div>

            <div className="course-card">
                <div className="card-image">
                    <img src="/assets/course1.jpeg" alt="Back-end Programming" className="card-image"/>
                </div>
                <div className="card-content pr-4">
                    <h3 className="font-bold mb-2">Back-end Programming</h3>
                    <p className="text-sm text-gray-400 mb-4">Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans.</p>
                    <a href="#" className="text-blue-400 text-sm">Learn more →</a>
                </div>
            </div>

            <div className="course-card">
                <div className="card-image">
                    <img src="/assets/course1.jpeg" alt="Front-end Programming" className="card-image"/>
                </div>
                <div className="card-content pr-4">
                    <h3 className="font-bold mb-2">Front-end Programming</h3>
                    <p className="text-sm text-gray-400 mb-4">Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans.</p>
                    <a href="#" className="text-blue-400 text-sm">Learn more →</a>
                </div>
            </div>

            <div className="course-card">
                <div className="card-image">
                    <img src="/assets/course1.jpeg" alt="UI/UX Design" className="card-image"/>
                </div>
                <div className="card-content pr-4">
                    <h3 className="font-bold mb-2">UI/UX Design</h3>
                    <p className="text-sm text-gray-400 mb-4">Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans.</p>
                    <a href="#" className="text-blue-400 text-sm">Learn more →</a>
                </div>
            </div>

            <div className="course-card">
                <div className="card-image">
                    <img src="/assets/course1.jpeg" alt="UI/UX Design" className="card-image"/>
                </div>
                <div className="card-content pr-4">
                    <h3 className="font-bold mb-2">UI/UX Design</h3>
                    <p className="text-sm text-gray-400 mb-4">Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans.</p>
                    <a href="#" className="text-blue-400 text-sm">Learn more →</a>
                </div>
            </div>

            <div className="course-card">
                <div className="card-image">
                    <img src="/assets/course1.jpeg" alt="Graphic Design" className="card-image"/>
                </div>
                <div className="card-content pr-4">
                    <h3 className="font-bold mb-2">Graphic Design</h3>
                    <p className="text-sm text-gray-400 mb-4">Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans.</p>
                    <a href="#" className="text-blue-400 text-sm">Learn more →</a>
                </div>
            </div>

            <div className="course-card">
                <div className="card-image">
                    <img src="/assets/course1.jpeg" alt="UI/UX Design" className="card-image"/>
                </div>
                <div className="card-content pr-4">
                    <h3 className="font-bold mb-2">UI/UX Design</h3>
                    <p className="text-sm text-gray-400 mb-4">Muffin lemon drops toffee. Pudding tootsie roll brownie jelly beans.</p>
                    <a href="#" className="text-blue-400 text-sm">Learn more →</a>
                </div>
            </div>
        </div>
    </main>
    </div>
    </section>
  );
};

export default LibrarySection;
