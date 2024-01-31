import React from 'react'

function LatestPost() {
  return (
    <>
    <div className="flex justify-center">
      {/* Card 1 */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img className="w-full" src="card1-image.jpg" alt="Card 1" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Card 1 Title</div>
          <p className="text-gray-700 text-base">
            Some content for Card 1. Add your own details here.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img className="w-full" src="card2-image.jpg" alt="Card 2" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Card 2 Title</div>
          <p className="text-gray-700 text-base">
            Some content for Card 2. Add your own details here.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img className="w-full" src="card3-image.jpg" alt="Card 3" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Card 3 Title</div>
          <p className="text-gray-700 text-base">
            Some content for Card 3. Add your own details here.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default LatestPost