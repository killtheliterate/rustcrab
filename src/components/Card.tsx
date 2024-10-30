import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { FaArrowRight } from "react-icons/fa";

type Item = {
  icon?: string;
  cover?: string;
  title?: string;
  link: string;
  name?: string;
  description: string;
};

type CardProps = { item: Item };

const Card: FC<CardProps> = ({ item }) => {
  return (
    <Link
      href={item.link}
      className="dark:bg-gray-900 group bg-gray-200 rounded-lg shadow-lg transition duration-300 hover:shadow-xl min-w-full toolsInnerCard"
    >
      <div className="flex items-center gap-5 sm:gap-10 relative hover:scale-105 p-6 px-10 transition duration-300">
        <div className="flex flex-col md:flex-col gap-5 items-start w-full">
          <div className="md:flex flex-col">
            <Image
              src={item.icon ?? item.cover ?? ""}
              alt={item.name ?? item.title ?? ""}
              width={75}
              height={75}
              className="rounded-md min-w-20  h-30 p-2 object-contain"
            />

            <div className="grid gap-2 text-left text-wrap">
              <h3 className="text-xl font-semibold text-current dark:text-white">
                {item.name ?? item.title}
              </h3>

              <p className="dark:text-gray-400 text-gray-600 mb-4">
                {item.description}
              </p>
            </div>
          </div>
        </div>
        <FaArrowRight className="dark:text-white opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 transition duration-300" />
      </div>
    </Link>
  );
};

export default Card;
