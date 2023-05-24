import React, {FunctionComponent} from "react";
import TextAreaProps from "@/types/TextAreaProps";

const TextArea: FunctionComponent<TextAreaProps> = ({title, name, description, required}) => {
  return (
    <div className="mt-5">
      <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
        <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10">
          <div className="text-left">
            <div className="flex items-center">
              <div className="font-medium text-sm">{title}</div>
              <div
                className="text-red-500 ml-2 px-2 py-0.5 bg-slate-100 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
              > Obligatoire
              </div>
            </div>
            <div className="mt-3 text-xs leading-relaxed text-slate-500">
              <div> {description}
              </div>
            </div>
          </div>
        </label>
        <div className="flex-1 w-full mt-3 xl:mt-0">
            <textarea rows={5}
                      name={name}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write your thoughts here..."
                      required={required}
            ></textarea>
        </div>
      </div>
    </div>
  )
}

export default TextArea
