'use client'

import LoadingSpinner from "@/components/atoms/loadingspinner/loadingSpinner";

const Loading = () => {
    return (
      <div className="flex min-h-full flex-col text-center justify-center sm:px-6 lg:p-8 p-8 h-[100vh] bg-gradient-to-r from-indigo-600 to-indigo-200">
          <div className="m-auto justify-center">
              <LoadingSpinner
              />
          </div>
      </div>
    )
}

export default Loading
