import React, { useState } from "react";

function Info({ title, desc }) {
  const shortDesc = `${desc.slice(0, 300)}<br/><p class='text-gray-500 cursor-pointer'>Read More...</p>`;
  const longDesc = `${desc}<br/><p class='text-gray-500 cursor-pointer'>Read Less...</p>`;

  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md info-component">
      <h1 className="text-xl font-semibold mb-2">{title}</h1>
      <p
        dangerouslySetInnerHTML={{
          __html: desc.length >= 300 ? (toggle ? longDesc : shortDesc) : desc,
        }}
        className="text-base"
        onClick={() => setToggle(!toggle)}
      />
    </div>
  );
}

export default Info;
