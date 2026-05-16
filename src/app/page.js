import Image from "next/image";
import Banner from "./components/Banner";
import Featured from "./components/Featured";
import WhyChoose from "./components/WhyChoose";
import Ready from "./components/Ready";

export default function Home() {
  return (
  <>
  <Banner></Banner>
  <Featured/>
  <WhyChoose/>
  <Ready></Ready>
  </>
  );
}
