import Link from "next/link";

import ParticlesComponent from "../components/animated-background.js";
const CV = () => {
  return (
    <Link href="/resume.pdf">
      <a target="_blank">Download My Resume</a>
    </Link>
  );
};
export default CV;
