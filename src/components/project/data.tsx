const projects = [
  {
    id: 1,
    title: "tulip.",
    desc: "Bringing a stock market like perspective to investing in real estate",
    imageUrl: "/project/tulip/tulip-cover.png",
    size: "wide",
    content: (
      <div className="space-y-6 text-text">
        <p>
          Work in progress
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
      <div className="space-y-6 text-text">
        <p className="">
          Work in progress
        </p>
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
        <p>
          Work in progress
        </p>
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
      <div className="space-y-6 grid-2">
        <p className="text-text">
          Created a frontend with ReactJS.
        </p>
        <div className="relative w-full h-[50vh] md:h-[55vh]">
          <img 
            src="/project/permias/permias-cover.png"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </div>
    )
  }
];

export default projects;