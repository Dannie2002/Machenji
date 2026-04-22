import React from "react";

export default function FilterTabs({
  options,
  selectedOption,
  setSelectedOption,
  label
}) {
  return (
<div className="flex gap-6 flex-col mt-12 lg:flex-row lg:gap-12 items-start lg:items-center justify-start">

<h4 className="uppercase font-light chivo text-[18px] lg:text-[18px] text-[#ece9dd] tracking-wider">
{label}
</h4>

<div className="flex lg:gap-6  flex-wrap gap-4">

<button
onClick={() => setSelectedOption("All")}
className={`px-6 border font-semibold uppercase border-[#ece9dd]/80  text-[14px] barlow transition-all duration-200
${
selectedOption === "All"
? "bg-(--primary-color) text-[#fffced] border-none"
: "text-[#ece9dd] hover:bg-(--secondary-color) hover:text-white"
}`}
>
All
</button>

{options.map((option) => (
<button
key={option}
onClick={() => setSelectedOption(option)}
className={`px-6 py-2 border-[1.59px] border-[#fffced]/60 font-normal zalando hover:text-[#fffced] text-[15px] transition-all duration-250
${
selectedOption === option
? "bg-(--primary-color) font-semibold text-[#ece9dd] border-none"
: "text-[#ece9dd]/80 hover:bg-(--secondary-color) hover:text-[#ece9dd]"
}`}
>
{option}
</button>
))}

</div>
</div>
  );
}

