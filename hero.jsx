import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MdArrowOutward } from 'react-icons/md';
import { PiEqualsThin } from 'react-icons/pi';
import { PiShoppingCartSimpleThin } from 'react-icons/pi';
import { ScrollTrigger } from 'gsap/ScrollTrigger';





function Hero() {
  const videoConRef = useRef(null);
  const playBtnRef = useRef(null);
  

  useEffect(() => {
    const videoCon = videoConRef.current;
    const playBtn = playBtnRef.current;
   

    const mouseEnter = () => {
      gsap.to(playBtn, { scale: 1, opacity: 1 });
    };

    const mouseLeave = () => {
      gsap.to(playBtn, { scale: 0, opacity: 0 });
    };

    const mouseMove = (dets) => {
      gsap.to(playBtn, { left: dets.clientX-70 , top: dets.clientY-80});
    };

    videoCon.addEventListener('mouseenter', mouseEnter);
    videoCon.addEventListener('mouseleave', mouseLeave);
    document.addEventListener('mousemove', mouseMove);

    return () => {
      videoCon.removeEventListener('mouseenter', mouseEnter);
      videoCon.removeEventListener('mouseleave', mouseLeave);
      document.removeEventListener('mousemove', mouseMove);
    };
  }, []);


    
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".nav .left", {
      transform: "translateY(-100%)",
      scrollTrigger: {
        trigger: ".hero",
        scroller: ".nav",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });

  }); 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(" .nav .right", {
      transform: "translateY(-100%)",
      scrollTrigger: {
        trigger: ".hero",
        scroller: ".nav",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });

    gsap.from(".nav .left ", {
      transform: "translateY(-100%)",
      scrollTrigger: {
        trigger: ".hero",
        scroller: ".nav",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
  },[]);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".change", {
      y: 0,
      ease: "expo.inOut",
      stagger: 0.2,
    });
    tl.to(".course", {
      y: 0,
      ease: "expo.inOut",
      duration: 0.5,
      
    })
  }, []);
  
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      gsap.to('#cursor', {
        left: event.clientX,
        top: event.clientY,
      });
    };

    const handleMouseEnter = () => {
      gsap.to('#cursor', {
        transform: 'translate(-50%, -50%) scale(1)',
      });
    };

    const handleMouseLeave = () => {
      gsap.to('#cursor', {
        transform: 'translate(-50%, -50%) scale(0)',
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    document.querySelectorAll('.child').forEach((elem) => {
      elem.addEventListener('mouseenter', handleMouseEnter);
      elem.addEventListener('mouseleave', handleMouseLeave);
    });
});
  

















  





  return (
    <>
     <div id="cursor"></div>
    <div className="hero">
      <nav className="nav">
        <div className="left">
          <h2>TWO</h2>
          <h2>GOOD</h2>
          <h2>CO.</h2>
        </div>
        <div className="right">
          <h4 className='shop'>SHOP</h4>
          <h4 className='catering'>CATERING<MdArrowOutward /></h4>
          <h4 className='donate'>DONATE</h4>
          <h4><PiEqualsThin /></h4>
          <h4><PiShoppingCartSimpleThin /></h4>
        </div>
      </nav>
      <div className="heading">
        <div className="bounding"><h1 className='change'>change</h1></div>
        <h1 className='change2'>CHANGE</h1>
        <div className="boundings"><h1 className=' the course'>the course</h1></div>
        
        <div className="video-container" ref={videoConRef}>
          <div className="play" ref={playBtnRef}>PLAY</div>
          <video className="video" autoPlay loop muted src="src\Components\video.mp4"></video>
        </div>
      </div>
    </div>
    <hr/>
    <div className="page2">
        <div className="elem">
          <img src='https://cdn.sanity.io/images/w8f1ak3c/production/ee1c2e8894a4c47c4f4ce71b8973589f8a5045b2-902x1500.png/Rectangle%203.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format'></img>
            <div className="dets"><h2>shop</h2><h2>home</h2></div>
        </div>
        <div className="elem">
          <img src='https://cdn.sanity.io/images/w8f1ak3c/production/bb84b7106e978c37f5aa92c8d5781751b2e9d9f2-900x1500.png/Rectangle%202.png?w=640&h=1067&auto=format'></img>
            <div className="dets"><h2>shop</h2><h2>primary</h2></div>
        </div>
        <div className="elem">
          <img src='https://cdn.sanity.io/images/w8f1ak3c/production/d3151106849ff2494d66916cf554c68a0603444d-902x1500.png/Rectangle%20220.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format'></img>
            <div className="dets"><h2>shop</h2><h2>bath</h2></div>
        </div>
    </div>
    <div className="page3">
    <div class="child" id="child1">
                <img src="https://cdn.sanity.io/images/w8f1ak3c/production/d6a2a4be8e3063d64648773f57f5f447609a93ab-5000x5000.png/Love-Care-Pack-Expanded-Two-Good-Co.png?w=1024&h=1024&auto=format"
                    alt=""></img>
            </div>
            <div class="child" id="child2">
                <img src="https://cdn.sanity.io/images/w8f1ak3c/production/d6a2a4be8e3063d64648773f57f5f447609a93ab-5000x5000.png/Love-Care-Pack-Expanded-Two-Good-Co.png?w=1024&h=1024&auto=format"
                    alt=""></img>

            </div>
            <div class="child" id="child3">
                <img src="https://cdn.sanity.io/images/w8f1ak3c/production/d6a2a4be8e3063d64648773f57f5f447609a93ab-5000x5000.png/Love-Care-Pack-Expanded-Two-Good-Co.png?w=1024&h=1024&auto=format"
                    alt=""></img>

            </div>
            <div class="child" id="child4">
                <img src="https://cdn.sanity.io/images/w8f1ak3c/production/d6a2a4be8e3063d64648773f57f5f447609a93ab-5000x5000.png/Love-Care-Pack-Expanded-Two-Good-Co.png?w=1024&h=1024&auto=format"
                    alt=""></img>

            </div>
    </div>
    
    </>

  );
}

export default Hero;
