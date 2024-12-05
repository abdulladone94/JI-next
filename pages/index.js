import Head from "next/head";
import dynamic from "next/dynamic";

import Curtains from "../components/Layout/Curtains/Curtains";
import SecondScreen from "../components/Index/SecondScreen/SecondScreen";
import ThirdScreen from "../components/Index/ThirdScreen/ThirdScreen";
import FourthScreen from "../components/Index/FourthScreen/FourthScreen";
import FifthScreen from "../components/Index/FifthScreen/FifthScreen";
import SixthScreen from "../components/Index/SixthScreen/SixthScreen";
import SeventhScreen from "../components/Index/SeventhScreen/SeventhScreen";

import styles from "../styles/Home.module.css";
import EighthScreen from "../components/Index/EighthScreen/EighthScreen";
import NinthScreen from "../components/Index/NinthScreen/NinthScreen";
import Footer from "../components/Index/Footer/Footer";

const AnimCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const ImgSlider = dynamic(
  () => import("../components/Index/ImageSlider/ImageSlider"),
  {
    ssr: false,
  }
);
export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <Head>
          <title>Jewl Icoic </title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Animated Cursor */}
        <AnimCursor
          innerSize={6}
          outerSize={25}
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={4}
          trailingSpeed={15}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "black",
          }}
          outerStyle={{
            backdropFilter: "invert(1)",
          }}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
            ".imp",
          ]}
        />

        {/* Curtains */}
        <Curtains />

        <ImgSlider />

        {/* SO WHY ARE THESE COMMENTED OUT? BECAUSE THE IMAGE SLIDER CAN'T STOP PLAYIN' "I AM TOO OLD FOR THIS SHIT" SO I HAD TO IMPORT THE OTHERS INTO THE IMAGE SLIDER SO THEY RENDER AT THE SAME TIME. EVEN MY GRANDMA CAN RENDER FASTER THAN IT!!! */}

        {/* <SecondScreen />
        <ThirdScreen />
        <FourthScreen />
        <FifthScreen />
        <SixthScreen />
        <SeventhScreen />
        <EighthScreen />
        <NinthScreen /> */}

        {/* <Footer /> */}
      </div>
    </>
  );
}
