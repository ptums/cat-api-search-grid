/**
 *  This component handles the breed selection from the drop down menu
 */
import React, { Component, Fragment, useContext } from "react";
import { BreedsContext } from "context/BreedsContext";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  setCurrentBreed: (e: string | null) => void;
  resetSearch: () => void;
}

const SelectBreed = ({ setCurrentBreed, resetSearch }: Props) => {
  const { breedList } = useContext(BreedsContext);
  return (
    <Menu as="div" className="inline-block text-left my-4 sm:my-0">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          Select A Breed
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute inset-x-0 sm:inset-x-2 md:inset-x-6 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1 text-left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 xl:grid-cols-5">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => resetSearch()}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-lg"
                  )}
                >
                  <strong>Reset Selection</strong>
                </button>
              )}
            </Menu.Item>
            {breedList &&
              breedList.map((breed) => (
                <Menu.Item key={breed.id}>
                  {({ active }) => (
                    <button
                      onClick={() => setCurrentBreed(breed.id)}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-lg"
                      )}
                    >
                      {breed.name}
                    </button>
                  )}
                </Menu.Item>
              ))}
          </div>
        </Menu.Items>
      </Transition>

      <style jsx>{`
        .dropdown-container {
          width: 100%;
        }

        @media (min-width: 640px) {
          .dropdown-container {
            width: 50rem;
          }
        }
        @media (min-width: 768px) {
          .dropdown-container {
            width: 60rem;
          }
        }
        @media (min-width: 1024px) {
          .dropdown-container {
            width: 70rem;
          }
        }
        @media (min-width: 1280px) {
          .dropdown-container {
            width: 80rem;
          }
        }
      `}</style>
    </Menu>
  );
};

export default SelectBreed;
