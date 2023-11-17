import { Parallax } from 'react-parallax';

// eslint-disable-next-line react/prop-types
const Cover = ({img,title}) => {
  return (
    <div>
           <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
       <div
        className="hero h-[600px]"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl bg-slate-300 bg-opacity-30 px-36 py-6 shadow-2xl">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
     
    </div>
  );
};

export default Cover;
