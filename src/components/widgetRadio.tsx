import { h } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

const zeroUrl = "https://serverssl.deradios.stream/8504/;";
const likeUrl =
  "https://playerservices.streamtheworld.com/api/livestream-redirect/FM_LLIKE.mp3";

const WidgetRadio = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [url, setUrl] = useState(zeroUrl);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [station, setStation] = useState<"zero" | "like">("zero");

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [url]);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMuted = () => setIsMuted((m) => !m);

  const handleVolumeChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setVolume(Number(target.value));
  };

  const changeStation = (newStation: "zero" | "like") => {
    if (newStation === station) return;

    setStation(newStation);
    if (newStation === "zero") {
      setUrl(zeroUrl);
    } else {
      setUrl(likeUrl);
    }
    setIsPlaying(false);
  };

  return (
    <div
      className="flex flex-col justify-start items-start w-full max-w-[754px] relative overflow-hidden rounded-xl font-montserrat backdrop-blur-[80px]"
      style={{
        boxShadow: "0px 0px 80px 0 rgba(121,121,121,0.14)",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {/* Background SVG shapes with blur */}
      <div className="absolute top-0 left-0 z-0">
        <svg
          width="676"
          height="201"
          viewBox="0 0 676 201"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_0_1)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 1.82662C0 0.817806 0.817802 0 1.82661 0H662.5L486.801 116.036C479.378 120.939 470.876 123.968 462.025 124.863L350.462 136.144C344.923 136.704 339.637 138.746 335.16 142.054L284.968 179.135C278.614 183.83 270.587 185.656 262.827 184.172L126.154 158.038C122.651 157.368 119.053 157.366 115.549 158.032L0 180V1.82662Z"
              fill="url(#paint0_linear_0_1)"
            />
          </g>
          <g filter="url(#filter1_d_0_1)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 1.82662C0 0.817808 0.817803 7.40034e-08 1.82661 1.65291e-07L563.5 5.09914e-05L435.408 101.178C435.141 101.388 434.821 101.52 434.483 101.559L317.438 114.95C317.15 114.983 316.874 115.084 316.633 115.245L270.824 145.784C264.834 149.777 257.548 151.339 250.448 150.151L126.504 129.421C122.87 128.813 119.152 128.92 115.559 129.737L2.23143 155.493C1.0884 155.753 0 154.884 0 153.712V1.82662Z"
              fill="url(#paint1_linear_0_1)"
              fill-opacity="0.5"
              shape-rendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_0_1"
              x="-13.5"
              y="-11.5"
              width="689.5"
              height="211.676"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="6.75" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_1"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_1"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_0_1"
              x="-13.5"
              y="-11.5"
              width="590.5"
              height="182.539"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="6.75" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_1"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_1"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_0_1"
              x1="89.6321"
              y1="-72.5"
              x2="662.977"
              y2="167.879"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9A2E24" />
              <stop offset="0.475962" stop-color="#D74032" />
              <stop offset="1" stop-color="#BD3E32" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_0_1"
              x1="9.37561e-07"
              y1="9.49999"
              x2="519"
              y2="47.0001"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FE3E3D" />
              <stop offset="0.485577" stop-color="#B8362A" />
              <stop offset="1" stop-color="#6C251E" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ===================================================================================================== */}

      {/* Audio element */}
      <audio ref={audioRef} src={url} />

      {/* Top section with Radio info and live indicator */}
      <div className="flex justify-between flex-wrap self-stretch flex-grow-0 flex-shrink-0 z-10">
        {/* radio / en vivo */}
        <div className="flex justify-center flex-grow-0 flex-shrink-0 h-[142px] relative gap-6 p-7">
          <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2">
            <p className="flex-grow-0 text-center flex-shrink-0 text-[51px] font-bold tracking-[2.23px] leading-[33.27px] uppercase text-white">
              Radio
            </p>
            <p className="flex-grow-0 text-center flex-shrink-0 text-[31px] w-[196px] font-extrabold tracking-[2.23px] leading-[33.27px] text-white uppercase">
              {" "}
              {station === "zero" ? "Zero 94.5" : "Like 89.7"}
            </p>
          </div>

          <div className="self-stretch flex-grow-0 flex-shrink-0 w-[3px] rounded-[5.48px] bg-white"></div>

          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[116px] relative gap-[7px] pt-1.5">
            <svg
              width="113"
              height="49"
              viewBox="0 0 113 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style="flex-grow:0;flex-shrink:0;width:111.86px;height:47.5px"
              preserveAspectRatio="none"
            >
              <path
                d="M4.078 36.839a4.41 4.41 0 1 0 8.82 0m-8.82 0v-2.513m0 2.513H5.82m7.078 0v-2.513m0 2.513h-1.744m1.744-5.026a4.41 4.41 0 1 0-8.821 0m8.82 0v2.513m0-2.513h-1.743m-7.077 0v2.513m0-2.513H5.82m10.018 5.389a7.35 7.35 0 0 1-7.35 7.35m0 0a7.35 7.35 0 0 1-7.351-7.35m7.35 7.35v2.944m0 0h3.676m-3.675 0H4.813m-.735-13.17h2.846m5.975 0h-2.847"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M26.795 35.497h6.323v2.785h-6.323zm.225 6.365h7.148v2.873H24v-15.47h9.924v2.873H27.02zm11.067 2.873v-15.47h2.514l7.748 11.138h-1.22V29.265h3.003v15.47h-2.496L39.87 33.597h1.22v11.138zm27.406 0-5.666-15.47h3.284l4.952 13.702h-1.932l5.028-13.702h3.02l-5.684 15.47zm11.284 0v-15.47h3.039v15.47zm11.541 0-5.666-15.47h3.283l4.953 13.702h-1.932l5.028-13.702h3.02l-5.684 15.47zm17.515.265a7 7 0 0 1-2.889-.597 6.9 6.9 0 0 1-2.288-1.68 8 8 0 0 1-1.501-2.54q-.525-1.46-.526-3.183 0-1.724.526-3.182a7.9 7.9 0 0 1 1.519-2.542 6.9 6.9 0 0 1 2.289-1.68 6.8 6.8 0 0 1 2.852-.596q1.557 0 2.851.597a6.7 6.7 0 0 1 2.27 1.68 7.9 7.9 0 0 1 1.52 2.54Q113 35.256 113 37q0 1.724-.544 3.204a7.9 7.9 0 0 1-1.52 2.542 6.8 6.8 0 0 1-2.27 1.657q-1.294.597-2.833.597m-.018-3.05q.881 0 1.613-.353a3.9 3.9 0 0 0 1.313-1.017q.564-.663.863-1.569.32-.906.319-2.011 0-1.105-.319-2.011a4.6 4.6 0 0 0-.863-1.57 3.7 3.7 0 0 0-1.294-1.016 3.8 3.8 0 0 0-1.632-.353q-.882 0-1.632.353-.732.354-1.295 1.017a4.9 4.9 0 0 0-.882 1.569q-.3.906-.3 2.011 0 1.083.3 2.011.32.906.863 1.57.563.662 1.314 1.016.75.353 1.632.353M1.138 11.545a1.827 1.827 0 0 1 3.653 0v7.031a1.827 1.827 0 0 1-3.653 0zm8.22-4.725a1.827 1.827 0 1 1 3.653 0v11.756a1.827 1.827 0 0 1-3.653 0zm8.22-4.993a1.827 1.827 0 1 1 3.653 0v16.75a1.827 1.827 0 0 1-3.654 0zm8.219 4.993a1.827 1.827 0 1 1 3.653 0v11.756a1.827 1.827 0 0 1-3.653 0zm8.22 4.725a1.827 1.827 0 0 1 3.653 0v7.031a1.827 1.827 0 0 1-3.653 0zm8.22 1.966a1.827 1.827 0 1 1 3.653 0v5.065a1.827 1.827 0 0 1-3.653 0zm8.22-4.623a1.827 1.827 0 1 1 3.653 0v9.688a1.827 1.827 0 0 1-3.654 0zm8.219 2.657a1.827 1.827 0 0 1 3.654 0v7.031a1.827 1.827 0 0 1-3.654 0zm8.22-4.725a1.827 1.827 0 1 1 3.653 0v11.756a1.827 1.827 0 0 1-3.653 0zm8.22-4.993a1.827 1.827 0 1 1 3.653 0v16.75a1.827 1.827 0 0 1-3.653 0zm8.22 4.993a1.827 1.827 0 1 1 3.653 0v11.756a1.827 1.827 0 0 1-3.654 0zm8.219 4.725a1.827 1.827 0 0 1 3.653 0v7.031a1.827 1.827 0 0 1-3.653 0zm8.22 1.966a1.827 1.827 0 0 1 3.653 0v5.065a1.827 1.827 0 0 1-3.653 0zm8.22-4.623a1.827 1.827 0 1 1 3.653 0v9.688a1.827 1.827 0 0 1-3.653 0z"
                fill="#fff"
              />
            </svg>
          </div>
        </div>

                 {/* Play button */}
         <button
           onClick={handlePlayPause}
           className="flex justify-center items-center mt-[78px] sm:mr-[60px] mx-auto w-[140px] h-[140px] sm:w-[105px] sm:h-[105px] rounded-full shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl cursor-pointer"
           style={{
             background: "linear-gradient(135deg, #FF543C 0%, #FF3C3D 100%)",
           }}
           aria-label={isPlaying ? "Pausar" : "Reproducir"}
         >
                     {/* Play icon */}
           <div className="ml-2 sm:ml-2">
             <svg
               width="55"
               height="62"
               viewBox="0 0 41 46"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
               className="sm:w-[41px] sm:h-[46px]"
             >
               <path
                 d="M38.706 19.503c2.743 1.524 2.743 5.47 0 6.994L5.943 44.699C3.276 46.179 0 44.252 0 41.202V4.798C0 1.748 3.276-.18 5.943 1.301z"
                 fill="#fff"
               />
             </svg>
           </div>
        </button>
      </div>

             {/* Bottom section with station buttons and volume */}
       <div className="flex flex-col md:flex-row justify-between items-center self-stretch flex-grow-0 flex-shrink-0 z-10 gap-8 sm:gap-6 p-8 sm:p-7">
         {/* station select */}
         <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center flex-grow-0 gap-4 sm:gap-6 order-2 md:order-1">
           <button
             onClick={() => changeStation("zero")}
             className={`flex justify-center items-center flex-grow-0 flex-shrink-0 tracking-[2.23px] leading-[26px] relative px-3 py-2 rounded-[8.65px] border-[0.72px] transition-all duration-200 ${
               station === "zero"
                 ? "bg-white/20 border-white/50"
                 : "bg-white/[0.12] border-white/30 hover:bg-white/25"
             }`}
           >
             <p className="flex-grow-0 flex-shrink-0 text-[24px] sm:text-[28px] font-bold text-center uppercase text-white">
               zero 94.5
             </p>
           </button>

           <button
             onClick={() => changeStation("like")}
             className={`flex justify-center items-center flex-grow-0 flex-shrink-0 tracking-[2.23px] leading-[26px] relative px-3 py-2 rounded-[8.65px] border-[0.72px] transition-all duration-200 ${
               station === "like"
                 ? "bg-white/20 border-white/50"
                 : "bg-white/[0.12] border-white/30 hover:bg-white/25"
             }`}
           >
             <p className="flex-grow-0 flex-shrink-0 text-[24px] sm:text-[28px] font-bold text-center uppercase text-white">
               like 89.7
             </p>
           </button>
         </div>

         {/* Volume controls */}
         <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-4 sm:gap-2.5 px-6 sm:px-7 order-1 md:order-2">
           <button
             onClick={handleMuted}
             className="p-1 text-white hover:bg-white/10 rounded transition-colors"
             aria-label={isMuted ? "Activar sonido" : "Silenciar"}
           >
             {isMuted ? (
               <svg
                 width="22"
                 height="16"
                 viewBox="0 0 22 16"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <path
                   d="M13.9873 4.81366C14.831 5.65763 15.305 6.80213 15.305 7.9955C15.305 9.18887 14.831 10.3334 13.9873 11.1773M17.1646 1.63632C18.852 3.32425 19.8 5.61327 19.8 8C19.8 10.3867 18.852 12.6758 17.1646 14.3637M9.90085 1.69933L5.40037 5.29971H1.79999V10.7003H5.40037L9.90085 14.3007V1.69933Z"
                   stroke="white"
                   strokeWidth="2.5"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                 />
                 <rect
                   x="0.484324"
                   y="12.6334"
                   width="22.3445"
                   height="3.5"
                   rx="1.75"
                   transform="rotate(-33.09 0.484324 12.6334)"
                   fill="#D9D9D9"
                   stroke="#B3372A"
                 />
               </svg>
             ) : (
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 width="22"
                 height="16"
                 viewBox="0 0 22 16"
                 fill="none"
               >
                 <path
                   d="M14.1873 4.81366C15.031 5.65763 15.505 6.80213 15.505 7.9955C15.505 9.18887 15.031 10.3334 14.1873 11.1773M17.3646 1.63632C19.0521 3.32425 20 5.61327 20 8C20 10.3867 19.0521 12.6758 17.3646 14.3637M10.1009 1.69933L5.60038 5.29971H2V10.7003H5.60038L10.1009 14.3007V1.69933Z"
                   stroke="white"
                   strokeWidth="2.5"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                 />
               </svg>
             )}
           </button>
           <input
             type="range"
             min="0"
             max="1"
             step="0.0001"
             value={volume}
             onInput={handleVolumeChange}
             className="widgetRadio_volume"
             style={{
               appearance: "none",
               borderRadius: "50px",
               height: "6px",
               width: "100%",
               maxWidth: "280px",
               background: "#e5e5e5",
             }}
           />
          <style jsx>{`
            .widgetRadio_volume::-webkit-slider-thumb {
              appearance: none;
              width: 20px;
              height: 20px;
              background: white;
              border-radius: 4px;
              transform: rotate(45deg);
              cursor: pointer;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3),
                0 2px 4px rgba(0, 0, 0, 0.2);
            }
            .widgetRadio_volume::-moz-range-thumb {
              appearance: none;
              width: 20px;
              height: 20px;
              background: white;
              border-radius: 4px;
              transform: rotate(45deg);
              cursor: pointer;
              border: none;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3),
                0 2px 4px rgba(0, 0, 0, 0.2);
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default WidgetRadio;
