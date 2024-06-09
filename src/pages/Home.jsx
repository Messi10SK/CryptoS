import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Landingpage from '../components/Landingpage';
import Featured from '../components/Featured';


export default function Home() {
  return (
    <>
      <Header />
     
      <Landingpage />
      <Featured/>
      <section className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full h-screen flex items-center justify-center">
          <iframe
            className="w-full h-full"
            src="/Cryptocurrency_ The Future of Finance and Money.mp4"
            title="YouTube video player"
            frameBorder="0"
          
            allow="accelerometer;  muted; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
      </section>
  
  

      <Footer />
    </>
  );
}
