// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, {Navigation, EffectFlip, Pagination, EffectFade, Autoplay} from 'swiper'
// import model1 from '../public/images/background1.jpg'
// // import model2 from '../public/images/[Downloader.la]-63ac22c21af05.jpg'
// import tools8 from '../public/images/background1.jpg'
// // import model5 from '../public/images/[Downloader.la]-63ac22c21af05.jpg'
// import model8 from '../public/images/background1.jpg'
// import model9 from '../public/images/background1.jpg'

// import Image from "next/image";




// import 'swiper/scss';
// import 'swiper/scss/navigation'
// import 'swiper/scss/effect-fade'
// import 'swiper/scss/effect-flip'
// import 'swiper/scss/pagination'

// import styles from '../styles/carousel.module.scss'



// function Carousel () {


//     const swipeData = [
//         {
//             id: 1,
//             class: "slideOne",
//             style: {
//                 backgroundImage: `url( ${model9} )`
//             },
//             jumbotronStyle: {
                
//             }

//         },
//         {
//             id: 2,
//             class: "slideTwo",
//             style: {
//                 backgroundImage: `url( ${model8} )`,
//                 backgroundRepeat: 'no-repeat',
//                 backgroundPosition: "left top"  
//             },
//             jumbotronStyle: {
//                 position: "relative",
//                 top: "100px",
//                 left: "68%",
//                 width: "500px",
//             } 
//         },
//         {
//             id:3,
//             class: "slideThree",
//             style: {
//                 backgroundImage: `url( ${tools8} )`,
//                 backgroundRepeat: 'no-repeat'  
//             }
//         }
//     ]
//     SwiperCore.use([Autoplay]);

//     return (
//         <>
//         <Swiper
//                 modules={[Navigation, Autoplay,  EffectFade, Pagination]}
//                   spaceBetween={0}
//                   autoplay
//                   slidesPerView={1}
//                   speed={500}
//                   loop={true}
//                   touchRatio={1.5}
//                   navigation={true}
//                   effect={"fade"}
//                   pagination={{ clickable: true }}
//                   breakpoints={{

//                       749: {
//                           Navigation: false,
//                         }
//                     }
//                   }
//                   className={styles.mySwiper}
//                 >
//                     {
//                         swipeData.map((item) => (
//                             <SwiperSlide style={item.style} key={item.id} className={`${styles.swiperSlide} ` + styles[item.class]}>
                                
//                                 <div >
//                                     <h2>Be Smart, Help Yourself Now</h2>
//                                     <h3>Free Consultation</h3>
//                                     <p>Counseling and psychotherapy for individuals, couples and families.</p>
//                                     <button>
//                                         Contact Us
//                                     </button>
//                                 </div>
//                             </SwiperSlide>
//                         ))
//                     }
                  
                  
//                 </Swiper>
                    
//         </>
//     )
// }

// export default Carousel;