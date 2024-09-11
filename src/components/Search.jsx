import React from "react";

const Search = () => {
  const [text, setText] = React.useState("");
  const [list, setList] = React.useState([
    "Frontend Development",
    "JavaScript",
    "React.js",
    "Responsive Design",
    "Redux",
    "API Integration",
  ]);
  const [message, setMessage] = React.useState("");

  const searchList = list.filter((item) =>
    item.toLowerCase().includes(text.toLowerCase())
  );

  const handleClick = (item) => {
    setMessage(`You clicked on ${item}`);
  };

  return (
    <div className="p-8 bg-neutral-900 rounded-lg shadow-md">
      {/* Explanation of the feature */}
      <div className="mb-6 p-6 bg-gradient-to-r from-orange-500 to-red-800 text-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-2">Search Feature</h2>
        <p className="text-neutral-200">
          Use this search feature to filter through a list of skills or projects
          by typing keywords in the search box. As you type, the list below will
          automatically update to show only the items that match your search.
          Click on any item to see more details about it.
        </p>
      </div>

      {/* Search input field */}
      <input
        placeholder="Search skills or projects..."
        onChange={(e) => setText(e.target.value)}
        className="w-full p-3 mb-6 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />

      {/* Render the filtered list */}
      <ul className="space-y-3">
        {searchList.map((item, index) => (
          <li
            key={index}
            className="p-4 bg-neutral-800 rounded-lg shadow-sm hover:bg-neutral-700 transition-colors duration-200"
          >
            <span
              onClick={() => handleClick(item)}
              className="cursor-pointer text-orange-500 hover:text-orange-300"
            >
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* Display the message when an item is clicked */}
      {message && (
        <div className="mt-6 p-4 bg-neutral-800 text-orange-500 rounded-lg shadow-sm">
          {message}
        </div>
      )}
    </div>
  );
};

export default Search;
