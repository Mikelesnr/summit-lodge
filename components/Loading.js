import loadingGif from "@assets/images/gif/loading-arrow.gif";
export default function Loading() {
  return (
    <div className="loading">
      <h4>Room Data Loading...</h4>
      <img src={loadingGif} alt="" />
    </div>
  );
}
