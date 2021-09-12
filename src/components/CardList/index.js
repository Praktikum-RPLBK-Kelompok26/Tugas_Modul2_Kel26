import React from "react";

export default function CardList(props) {
    const { judul, kelompok, shift, isNameBold, image } = props;

    return (
        <div className="bg-white shadow pb-12">
            <div className="text-center">
                <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 pt-6">
                    {judul}
                </h2>
                <div className="mt-6 grid grid-cols-l grid-cols-1">
                    <div className="group relative shadow">
                        <div className="w-full min-h-80 bg-gray-200 aspect-w-l aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img
                                src={image}
                                alt="Gambar"
                                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                            />
                        </div>
                        <div className="text-center">
                            <div>
                                <h3
                                    className={`${
                                        isNameBold ? "font-bold " : ""
                                    } text-3xl text-gray-70`}
                                >
                                    <span aria-hidden="true" className="absolute inset-0" />
                                       Kelompok {kelompok}
                                </h3>
                                <p className="text-xl font-medium text-gray-900">
                                     Shift {shift}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    );
}