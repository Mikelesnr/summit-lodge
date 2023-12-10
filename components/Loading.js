import loadingGif from "../assets/images/gif/loading-arrow.gif";
import Image from "next/image";
export default function Loading() {
  return (
    <div className="loading">
      <h4>Room Data Loading...</h4>
      <span>
        <Image src={loadingGif} alt="" />
      </span>
    </div>
  );
}
