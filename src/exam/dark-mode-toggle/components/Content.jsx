import { useGlobalContext } from "../context";
import lightImage from "../../../assets/images/light-image.svg";
import darkImage from "../../../assets/images/dark-image.svg";

const Content = () => {

  const { theme } = useGlobalContext();

  return (
    <div className="flex flex-col md:flex-row gap-10 px-5 py-8 md:py-20 ">
      <div className="w-full md:w-[50%]">
        <h2 className="mb-6 font-bold text-5xl text-sky-600">What is Lorem Ipsum</h2>
        <p className="text-xl leading-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <img alt="" src={theme === "Dark" ? darkImage : lightImage} className="w-full md:w-[50%]" />
    </div>
  )
}

export default Content;