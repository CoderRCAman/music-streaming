import React, { useState } from "react";

export default function SideItem({ Icon, FallBackIcon, Title }) {
  const [focus, setFocus] = useState(false);
  return (
    <div
      className="mt-10 select-none  flex gap-5 group items-center focus:font-bold cursor-pointer"
      tabIndex={-1}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      {!focus ? (
        <Icon
          style={{ color: "#d1d5db", fontSize: "1.5rem", fontWeight: "bold" }}
        />
      ) : (
        <FallBackIcon style={{ color: "white", fontSize: "1.5rem" }} />
      )}

      <p className="text-white ">{Title}</p>
    </div>
  );
}
