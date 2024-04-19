import { useState } from "react";
import { Link } from "react-router-dom";

const MenusItems = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const menuItems = [
    {
      src: "/",
      title: "Submissions",
      icon: "",
    },
    {
      src: "/createdlist",
      title: "Created List",
      icon: "",
    },
    {
      src: "/createform",
      title: "Create New",
      icon: "",
    },
    {
      src: "/login",
      title: "Admin Login",
      icon: "",
    },
  ];
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col items-center w-full bg-white">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/995ebfe6589ba9ef368aa6b9cc6672e6df267e91ef1e0c3be6276e5bf4948629?apiKey=c5b21244005740b39ba2d54a5fdcbffd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/995ebfe6589ba9ef368aa6b9cc6672e6df267e91ef1e0c3be6276e5bf4948629?apiKey=c5b21244005740b39ba2d54a5fdcbffd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/995ebfe6589ba9ef368aa6b9cc6672e6df267e91ef1e0c3be6276e5bf4948629?apiKey=c5b21244005740b39ba2d54a5fdcbffd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/995ebfe6589ba9ef368aa6b9cc6672e6df267e91ef1e0c3be6276e5bf4948629?apiKey=c5b21244005740b39ba2d54a5fdcbffd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/995ebfe6589ba9ef368aa6b9cc6672e6df267e91ef1e0c3be6276e5bf4948629?apiKey=c5b21244005740b39ba2d54a5fdcbffd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/995ebfe6589ba9ef368aa6b9cc6672e6df267e91ef1e0c3be6276e5bf4948629?apiKey=c5b21244005740b39ba2d54a5fdcbffd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/995ebfe6589ba9ef368aa6b9cc6672e6df267e91ef1e0c3be6276e5bf4948629?apiKey=c5b21244005740b39ba2d54a5fdcbffd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/995ebfe6589ba9ef368aa6b9cc6672e6df267e91ef1e0c3be6276e5bf4948629?apiKey=c5b21244005740b39ba2d54a5fdcbffd&"
        className=" rounded-md aspect-[1.19] w-[58px]"
        alt=""
        onClick={toggleSidebar}
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/742c1613d46e0e223a96aebb09d015c1244e63636a9154a5c3549175b9d56598?apiKey=c5b21244005740b39ba2d54a5fdcbffd&"
        className="mt-7 aspect-[1.14] w-[25px]"
        alt=""
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1bad3571a207dfaaa42a61ea2ca34822d9b00c2f5e493cbcb0969c6fdc1d969?apiKey=c5b21244005740b39ba2d54a5fdcbffd&"
        className="mt-10 w-5 aspect-[0.74]"
        alt=""
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe03a84c6ef4195ddb9900990189b72789913c11763cdf10fdab6798c3ad3da2?apiKey=c5b21244005740b39ba2d54a5fdcbffd&"
        className="mt-10 aspect-square w-[25px]"
        alt=""
      />
      <div className="shrink-0 self-stretch mt-8 h-px bg-black border border-black border-solid" />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a33eb21e6656d7905cddb485cc26bca967b6bb3360e1850181475c486b29b90?apiKey=c5b21244005740b39ba2d54a5fdcbffd&"
        className="mt-8 aspect-[0.76] w-[22px]"
        alt=""
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/364d5615391c7e330c9dbfe2f277019a8fbe53e6a9aca66c08dee6d35b9d6530?apiKey=c5b21244005740b39ba2d54a5fdcbffd&"
        className="mt-9 aspect-[1.19] w-[25px]"
        alt=""
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebe373febc54047e5e30fecd285b89bb8fb1ee3332674f8012e0d266ce272a2a?apiKey=c5b21244005740b39ba2d54a5fdcbffd&"
        className="mt-9 aspect-square w-[25px]"
        alt=""
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f5df4387b3f03a7701628719e4afc1f2a625a27839af126ba9b75835cc0d873?apiKey=c5b21244005740b39ba2d54a5fdcbffd&"
        className="mt-16 aspect-square w-[22px]"
        alt=""
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fa181a16665583680e7dccf71c4b629e9240a080988dafa4d4e3f6b820f0a6f?apiKey=c5b21244005740b39ba2d54a5fdcbffd&"
        className="mt-7 w-5 aspect-[0.91]"
        alt=""
      />
      <div
        className={`flex flex-col items-start shadow-[0px_4px_34px_rgba(0,0,0,0.1)] absolute left-0 top-0 -z-40 bg-white min-h-screen w-max pt-20 transition-transform duration-500 ease-in-out transform ${
          isSidebarOpen ? "translate-x-10 md:translate-x-24" : "-translate-x-20 md:-translate-x-1"
        }`}
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9f171694a4219e1985e3f351d4c94a4b1d558d530c72748a9f7c90698a784ac?apiKey=c5b21244005740b39ba2d54a5fdcbffd&"
          className="shrink-0 self-start aspect-[0.51] w-[19px] absolute top-9 left-full z-99"
          alt=""
          onClick={toggleSidebar}
        />
        {/* sidebar content */}
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.src}
            className="block p-4 border-gray-200 hover:bg-gray-100"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenusItems;
