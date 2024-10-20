import Image from "next/image";
import ProfileImage from "@/public/images/Profile.svg";

export default function Profile() {
  return (
    <div className="bg-gray-100 my-8 py-8">
      <div className="flex flex-col">
        <div className="sm:flex justify-around items-center sm:px-8">
          <div>
            <Image
              src={ProfileImage}
              alt=""
              className="size-30  mx-auto rounded-full object-cover"
              width="200"
              height="200"
            />

            <div className="text-center mt-4 mb-8">
              <h3 className="text-lg/tight font-medium text-gray-900">
                Tarak Anand
              </h3>

              <p className="mt-0.5 text-gray-700">M.Com, CA</p>
            </div>
          </div>

          <div className="mx-4 sm:w-1/4">
            <p className="leading-6">A passionate educator.</p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              accusantium totam odit eligendi magni provident debitis maiores
              expedita natus aperiam.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, distinctio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
