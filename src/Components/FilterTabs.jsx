import React from "react";

export default function FilterTabs({
  options,
  selectedOption,
  setSelectedOption,
  label
}) {
  return (
<div className="flex gap-6 flex-col mt-12 lg:flex-row lg:gap-12 items-start lg:items-center justify-start">

<h4 className="uppercase font-semibold archivo text-[18px] lg:text-[20px] text-[#c4c1b0] tracking-wider">
{label}
</h4>

<div className="flex lg:gap-6 gap-4">

<button
onClick={() => setSelectedOption("All")}
className={`px-6 border font-semibold border-(--primary-color)/40 rounded-sm text-[14px] barlow transition-all duration-200
${
selectedOption === "All"
? "bg-(--primary-color) text-[#fffced] border-none"
: "text-grey hover:bg-(--secondary-color) hover:text-white"
}`}
>
All
</button>

{options.map((option) => (
<button
key={option}
onClick={() => setSelectedOption(option)}
className={`px-6 py-1 border barlow border-[1.59px] border-(--secondary-color)/75 font-semibold rounded-sm hover:text-white text-[15px] transition-all duration-200
${
selectedOption === option
? "bg-(--primary-color) white border-none"
: "text-grey hover:bg-(--secondary-color) hover:text-white"
}`}
>
{option}
</button>
))}

</div>
</div>
  );
}

