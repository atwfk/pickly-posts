import React from "react";
import OptionGroup from "../../Molecules/OptionGroup/OptionGroup";
import ImagePoll from "../PostEdit/components/ImagePoll";
import TextDefault from "../../Molecules/TextDefault/TextDefault";

export const tabGroupData = () => {
  return [
    {
      icon: (
        <svg
          className="mr-xs"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.99951 7.33334C5.5518 7.33334 5.99951 6.88562 5.99951 6.33334C5.99951 5.78105 5.5518 5.33334 4.99951 5.33334C4.44723 5.33334 3.99951 5.78105 3.99951 6.33334C3.99951 6.88562 4.44723 7.33334 4.99951 7.33334Z"
            fill="#5B6366"
          ></path>
          <path
            d="M6.99951 9.33333L5.99951 8L3.99951 10.6667H5.99951H7.99951H11.9995L8.99951 6.66666L6.99951 9.33333Z"
            fill="#5B6366"
          ></path>
          <path
            d="M13.3325 2.66666H2.66585C1.93052 2.66666 1.33252 3.26466 1.33252 4V12C1.33252 12.7353 1.93052 13.3333 2.66585 13.3333H13.3325C14.0679 13.3333 14.6659 12.7353 14.6659 12V4C14.6659 3.26466 14.0679 2.66666 13.3325 2.66666ZM2.66585 12V4H13.3325L13.3339 12H2.66585Z"
            fill="#5B6366"
          ></path>
        </svg>
      ),
      component: <ImagePoll />,
      content: "Image Poll",
      active: true,
    },
    {
      icon: (
        <svg
          className="mr-xs"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.6665 7.33333H9.33317V8.66666H4.6665V7.33333ZM4.6665 4.66666H11.9798V6H4.6665V4.66666ZM4.6665 10H13.3332V11.3333H4.6665V10ZM2.6665 2.66666H3.99984V13.3333H2.6665V2.66666Z"
            fill="#5B6366"
          ></path>
        </svg>
      ),
      component: <TextDefault />,
      content: "Text Poll",
      active: false,
    },
    {
      icon: (
        <svg
          className="mr-xs"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.2685 5.724C13.2358 5.65334 13.1952 5.586 13.1378 5.52867L9.13784 1.52867C9.0805 1.47134 9.01317 1.43067 8.9425 1.398C8.9225 1.38867 8.90117 1.38334 8.87984 1.376C8.82384 1.35734 8.7665 1.34534 8.70717 1.342C8.69317 1.34067 8.6805 1.33334 8.6665 1.33334H3.99984C3.2645 1.33334 2.6665 1.93134 2.6665 2.66667V13.3333C2.6665 14.0687 3.2645 14.6667 3.99984 14.6667H11.9998C12.7352 14.6667 13.3332 14.0687 13.3332 13.3333V6C13.3332 5.986 13.3258 5.97334 13.3245 5.95867C13.3212 5.89934 13.3098 5.842 13.2905 5.786C13.2838 5.76467 13.2778 5.744 13.2685 5.724ZM11.0572 5.33334H9.33317V3.60934L11.0572 5.33334ZM3.99984 13.3333V2.66667H7.99984V6C7.99984 6.36867 8.29784 6.66667 8.6665 6.66667H11.9998L12.0012 13.3333H3.99984Z"
            fill="#5B6366"
          ></path>
          <path
            d="M5.3335 8H10.6668V9.33334H5.3335V8ZM5.3335 10.6667H10.6668V12H5.3335V10.6667ZM5.3335 5.33334H6.66683V6.66667H5.3335V5.33334Z"
            fill="#5B6366"
          ></path>
        </svg>
      ),
      component: <OptionGroup />,
      content: "One more poll type",
      active: false,
    },
  ];
};
