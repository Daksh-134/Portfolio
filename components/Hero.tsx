import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pt-32">
      <div className="flex justify-center relative my-5">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Welcome to my Portfolio"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I am Daksh Baweja, a pre-final year Computer Science student at
            NSUT.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
