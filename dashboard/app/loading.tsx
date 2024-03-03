'use client'

import LoadingSpinner from "@/components/atoms/loadingspinner/loadingSpinner";

const Loading = () => {
    return (
        <div className="flex min-h-full flex-col text-center justify-center sm:px-6 lg:p-8 p-8 h-[100vh]"
             style={{
                 background: `linear-gradient(327.21deg, rgba(33, 0, 75, 0.24) 3.65%, rgba(60, 0, 136, 0) 40.32%), linear-gradient(245.93deg, rgba(209, 21, 111, 0.16) 0%, rgba(209, 25, 80, 0) 36.63%), linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.01) 85.72%), #13111C`,
             }}
        >
            <div className="m-auto justify-center">
                <LoadingSpinner/>
            </div>
        </div>
    )
}

export default Loading
