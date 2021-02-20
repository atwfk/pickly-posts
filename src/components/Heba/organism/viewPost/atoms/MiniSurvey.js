import React from "react";
import postMan from "../../../../../img/Frame 145.png";
function MiniSurvey() {
  return (
    <div>
      <div className="mb-m w-full">
        <h3 className="text-md text-dark font-normal">
          How can I better style this outfit?
        </h3>
      </div>
      <div className="misc-box grid gap-x-2 gap-y-4 mb-m rounded-md relative">
        <div className="misc-box mb-m relative rounded-md overflow-hidden">
          <img
            src={postMan}
            alt="post"
            className="md:w-37xl"
            style={{ width: "600px", height: "450px" }}
          />
        </div>
      </div>

      <h3 class="text-sm font-normal text-dark-grey mb-xs w-full">
        Group name
      </h3>
      <div className="misc-box bg-grey-bg hover:bg-grey-shd6 flex items-center w-37xl p-xs mb-xs rounded-md">
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
        <h3 className="text-sm font-normal text-dark">Choice</h3>
      </div>
      <div
        className="mr-s"
        className="misc-box bg-grey-bg hover:bg-grey-shd6 flex items-center w-37xl p-xs mb-xs rounded-md"
      >
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

        <h3 className="text-sm font-normal text-dark">Choice</h3>
      </div>
      <div className="misc-box bg-grey-bg hover:bg-grey-shd6 flex items-center w-37xl p-xs mb-xs rounded-md">
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
            d="M15.917 13.8418C15.7939 14.8945 15.4043 15.708 14.748 16.2822C14.0964 16.8519 13.2282 17.1367 12.1436 17.1367C10.9678 17.1367 10.0244 16.7152 9.31348 15.8721C8.6071 15.029 8.25391 13.901 8.25391 12.4883V11.5312C8.25391 10.6061 8.41797 9.79264 8.74609 9.09082C9.07878 8.389 9.54818 7.85124 10.1543 7.47754C10.7604 7.09928 11.4622 6.91016 12.2598 6.91016C13.3171 6.91016 14.1647 7.20638 14.8027 7.79883C15.4408 8.38672 15.8122 9.20247 15.917 10.2461H14.5977C14.4837 9.45312 14.2354 8.87891 13.8525 8.52344C13.4743 8.16797 12.9434 7.99023 12.2598 7.99023C11.4212 7.99023 10.7627 8.30013 10.2842 8.91992C9.81022 9.53971 9.57324 10.4215 9.57324 11.5654V12.5293C9.57324 13.6094 9.79883 14.4684 10.25 15.1064C10.7012 15.7445 11.3324 16.0635 12.1436 16.0635C12.8727 16.0635 13.431 15.8994 13.8184 15.5713C14.2103 15.2386 14.4701 14.6621 14.5977 13.8418H15.917Z"
            fill="#5B6366"
          />
        </svg>

        <h3 className="text-sm font-normal text-dark">Choice</h3>
      </div>

      <h3 class="text-sm font-normal text-dark-grey mb-xs w-full">
        Group name
      </h3>
      <div className="misc-box bg-grey-bg hover:bg-grey-shd6 flex items-center w-37xl p-xs mb-xs rounded-md">
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
        <h3 className="text-sm font-normal text-dark">Choice</h3>
      </div>
      <div
        className="mr-s"
        className="misc-box bg-grey-bg hover:bg-grey-shd6 flex items-center w-37xl p-xs mb-xs rounded-md"
      >
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

        <h3 className="text-sm font-normal text-dark">Choice</h3>
      </div>

      <h3 class="text-sm font-normal text-dark-grey mb-xs w-full">
        Group name
      </h3>
      <div className="misc-box bg-grey-bg hover:bg-grey-shd6 flex items-center w-37xl p-xs mb-xs rounded-md">
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
        <h3 className="text-sm font-normal text-dark">Choice</h3>
      </div>
      <div
        className="mr-s"
        className="misc-box bg-grey-bg hover:bg-grey-shd6 flex items-center w-37xl p-xs mb-xs rounded-md"
      >
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

        <h3 className="text-sm font-normal text-dark">Choice</h3>
      </div>
      <div className="misc-box bg-grey-bg hover:bg-grey-shd6 flex items-center w-37xl p-xs mb-xs rounded-md">
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
            d="M15.917 13.8418C15.7939 14.8945 15.4043 15.708 14.748 16.2822C14.0964 16.8519 13.2282 17.1367 12.1436 17.1367C10.9678 17.1367 10.0244 16.7152 9.31348 15.8721C8.6071 15.029 8.25391 13.901 8.25391 12.4883V11.5312C8.25391 10.6061 8.41797 9.79264 8.74609 9.09082C9.07878 8.389 9.54818 7.85124 10.1543 7.47754C10.7604 7.09928 11.4622 6.91016 12.2598 6.91016C13.3171 6.91016 14.1647 7.20638 14.8027 7.79883C15.4408 8.38672 15.8122 9.20247 15.917 10.2461H14.5977C14.4837 9.45312 14.2354 8.87891 13.8525 8.52344C13.4743 8.16797 12.9434 7.99023 12.2598 7.99023C11.4212 7.99023 10.7627 8.30013 10.2842 8.91992C9.81022 9.53971 9.57324 10.4215 9.57324 11.5654V12.5293C9.57324 13.6094 9.79883 14.4684 10.25 15.1064C10.7012 15.7445 11.3324 16.0635 12.1436 16.0635C12.8727 16.0635 13.431 15.8994 13.8184 15.5713C14.2103 15.2386 14.4701 14.6621 14.5977 13.8418H15.917Z"
            fill="#5B6366"
          />
        </svg>

        <h3 className="text-sm font-normal text-dark">Choice</h3>
      </div>
    </div>
  );
}

export default MiniSurvey;
