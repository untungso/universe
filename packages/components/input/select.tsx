"use client";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import * as React from "react";

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

export const SelectInput = () => {
  const [selected, setSelected] = React.useState(people[0]);

  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-md border-2 border-slate-12 bg-slate-1 py-2 pl-6  pr-10 text-left shadow-md hover:cursor-pointer focus:outline-none focus-visible:border-blue-800 focus-visible:ring-2 focus-visible:ring-slate-1 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-2 dark:border-slate-1 dark:bg-slate-12 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-slate-6 dark:text-slate-1"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={React.Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-slate-1 py-1 text-base shadow-lg ring-1 ring-slate-12 ring-opacity-5 focus:outline-none dark:bg-slate-12 dark:ring-slate-1 sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 hover:cursor-pointer ${
                      active
                        ? "bg-pink-100 text-slate-12 dark:text-slate-1"
                        : "text-slate-10"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-pink">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
