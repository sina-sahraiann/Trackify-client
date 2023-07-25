import React from 'react'

const StreakCard = ({ journalingStreak }: { journalingStreak: number }) => {


    const encourage = journalingStreak === 0 ? 'You can do better' :
        journalingStreak === 1 ? 'Good start!' :
            journalingStreak === 2 ? 'awesome' : 'You are doing great'

    const checkedDay = <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>

    const checkedClass = "flex h-6 w-6 items-center justify-center rounded-full bg-green-500"
    const uncCheckedClass = "flex h-6 w-6 items-center justify-center rounded-full border border-green-500 bg-green-100"

    return (
        <>

            <div
                className="relative overflow-hidden rounded-2xl border bg-white p-5 py-5 pt-5"
                id="widget"
            >
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <div className="text-sm text-left mb-4 text-gray-400">{encourage}</div>
                        <div className="text-xl font-medium text-gray-700">
                            {journalingStreak} day streak
                        </div>
                    </div>
                    <div className="text-3xl">🎉</div>
                </div>
                <div className="w-full border-t"></div>
                <div className="relative -mt-3 flex-wrap gap-y-2 flex space-x-5 sm:space-x-8">
                    <div
                        className={journalingStreak >= 1 ? checkedClass : uncCheckedClass}
                    >
                        {journalingStreak >= 1 && checkedDay}
                    </div>
                    <div
                        className={journalingStreak >= 2 ? checkedClass : uncCheckedClass}
                    >
                        {journalingStreak >= 2 && checkedDay}
                    </div>
                    <div
                        className={journalingStreak >= 3 ? checkedClass : uncCheckedClass}
                    >
                        {journalingStreak >= 3 && checkedDay}
                    </div>
                    <div
                        className={journalingStreak >= 4 ? checkedClass : uncCheckedClass}
                    >
                        {journalingStreak >= 4 && checkedDay}
                    </div>
                    <div
                        className={journalingStreak >= 5 ? checkedClass : uncCheckedClass}
                    >
                        {journalingStreak >= 5 && checkedDay}
                    </div>
                    <div
                        className={journalingStreak >= 6 ? checkedClass : uncCheckedClass}
                    >
                        {journalingStreak >= 6 && checkedDay}
                    </div>
                    <div
                        className={journalingStreak >= 7 ? checkedClass : uncCheckedClass}
                    >
                        {journalingStreak >= 7 && checkedDay}
                    </div>
                </div>
                {/* <div
                    className="mt-6 flex justify-between border-t border-gray-100 p-2"
                >
                    <div>
                        <div className="font-semibold text-gray-700">356</div>
                        <div className="text-xs text-gray-400">Tweets posted</div>
                    </div>
                    <div>
                        <div className="font-semibold text-gray-700">36</div>
                        <div className="text-xs text-gray-400">Comments</div>
                    </div>
                    <div>
                        <div className="font-semibold text-gray-700">1256</div>
                        <div className="text-xs text-gray-400">Liked posts</div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default StreakCard