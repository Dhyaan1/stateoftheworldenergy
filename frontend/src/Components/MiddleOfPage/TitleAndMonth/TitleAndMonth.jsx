/* eslint-disable react/prop-types */
import "./TitleAndMonth.css";

function TitleAndMonth() {
  return (
    <div className="max-[380px]:mb-[-100px] max-[515px]:mb-[-100px] text-center">
      <h1 className="mb-2 mt-2 text-3xl font-extrabold text-white md:text-4xl min-[810px]:text-5xl lg:text-6xl whitespace-nowrap">
        STATE OF THE&nbsp;
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          WORLD
        </span>
      </h1>
    </div>
  );
}

export default TitleAndMonth;
