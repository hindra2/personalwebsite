const projects = [
  {
    id: 1,
    title: "tulip.",
    desc: "Bringing a stock market like perspective to investing in real estate",
    imageUrl: "/project/tulip/tulip-cover.png",
    size: "wide",
    content: (
      <div className="space-y-6 bg-background text-text">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ipsum in mattis 
          sociosqu imperdiet ante condimentum nam.
        </p>
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Top Food Delivery Apps</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center">
              <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">1</span>
              <span>UberEats - Best Overall Selection</span>
            </li>
            <li className="flex items-center">
              <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">2</span>
              <span>DoorDash - Fastest Delivery Times</span>
            </li>
          </ul>
        </div>
        <p className="text-gray-400">
          Commodo pharetra aliquam augue, lectus fames finibus. Habitasse 
          pellentesque sociosqu varius pretium porta.
        </p>
      </div>
    )
  },
  {
    id: 2,
    title: "akar",
    desc: "A knowledge management platform",
    imageUrl: "/project/akar/akar-cover2.png",
    size: "default",
    content: (
      <div className="space-y-6">
        <p className="text-gray-400">
          Pharetra integer velit scelerisque placerat molestie conubia.
        </p>
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-white text-xl font-bold mb-4">Essential Tips</h3>
          <div className="space-y-3 text-gray-400">
            <p>• Consider the Rule of Thirds</p>
            <p>• Mind your lighting setup</p>
            <p>• Keep cables organized</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Explorify",
    desc: "A place to host, find and join events around campus",
    imageUrl: "/1",
    size: "default",
    content: (
      <div className="space-y-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-white text-xl font-bold mb-4">Featured Apps</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-700 rounded-lg">
              <h4 className="text-white font-bold mb-2">Strava</h4>
              <p className="text-gray-400">Track your rides and join challenges</p>
            </div>
            <div className="p-4 bg-gray-700 rounded-lg">
              <h4 className="text-white font-bold mb-2">Komoot</h4>
              <p className="text-gray-400">Plan your routes effectively</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Permias Website",
    desc: "Website for the Indonesian community in UIUC",
    imageUrl: "/project/permias/permias-cover.png",
    size: "wide",
    content: (
      <div className="space-y-6">
        <p className="text-gray-400">
          Facilisis blandit interdum molestie, himenaeos venenatis mus.
        </p>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-white text-xl font-bold mb-4">Digital Wellbeing</h3>
            <p className="text-gray-400">Track and manage your screen time effectively</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-white text-xl font-bold mb-4">Mindfulness</h3>
            <p className="text-gray-400">Apps to help you stay present and focused</p>
          </div>
        </div>
      </div>
    )
  }
];

export default projects;