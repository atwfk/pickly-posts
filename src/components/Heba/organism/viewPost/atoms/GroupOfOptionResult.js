import React from "react";

function GroupOfOptionResult() {
  return (
    <div>
      <div className="mb-m w-full">
      <h3 className="text-md text-dark font-normal">
        Which is easier to learn?
      </h3>
</div>
      <div className="w-full mr-20">
        <div className="misc-box bg-primary flex justify-between items-center w-33xl p-xs mb-xs rounded-md">
          <div className="flex items-center">
            <svg
              className="mr-s"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z"
                fill="white"
              />
              <path
                d="M14.085 14.4023H9.91504L8.97852 17H7.625L11.4258 7.04688H12.5742L16.3818 17H15.0352L14.085 14.4023ZM10.3115 13.3223H13.6953L12 8.66699L10.3115 13.3223Z"
                fill="#5B6366"
              />
            </svg>

            <h3 className="text-sm font-normal text-white mr-xs">React</h3>
          </div>
          <h3 className="text-base font-medium text-white">🌟 75%</h3>
        </div>
      </div>
      <div className=" bg-primary-shd7 flex justify-between items-center w-48 p-xs mb-xs rounded-md">
        <div className="flex items-center">
          <svg
            className="mr-s"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z"
              fill="white"
            />
            <path
              d="M9.29395 17V7.04688H12.5479C13.6279 7.04688 14.4391 7.27018 14.9814 7.7168C15.5283 8.16341 15.8018 8.82422 15.8018 9.69922C15.8018 10.1641 15.6696 10.5765 15.4053 10.9365C15.141 11.292 14.7809 11.5677 14.3252 11.7637C14.863 11.9141 15.2868 12.2012 15.5967 12.625C15.9111 13.0443 16.0684 13.5456 16.0684 14.1289C16.0684 15.0221 15.779 15.724 15.2002 16.2344C14.6214 16.7448 13.8034 17 12.7461 17H9.29395ZM10.6064 12.3447V15.9268H12.7734C13.3841 15.9268 13.8649 15.7695 14.2158 15.4551C14.5713 15.1361 14.749 14.6986 14.749 14.1426C14.749 12.944 14.0973 12.3447 12.7939 12.3447H10.6064ZM10.6064 11.292H12.5889C13.1631 11.292 13.6211 11.1484 13.9629 10.8613C14.3092 10.5742 14.4824 10.1846 14.4824 9.69238C14.4824 9.14551 14.3229 8.74902 14.0039 8.50293C13.6849 8.25228 13.1995 8.12695 12.5479 8.12695H10.6064V11.292Z"
              fill="#5B6366"
            />
          </svg>

          <h3 className="text-sm font-normal text-dark mr-xs">Vue</h3>
        </div>
        <h3 className="text-base font-medium text-dark">25%</h3>
      </div>
    </div>
  );
}

export default GroupOfOptionResult;
