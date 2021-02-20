import React from 'react'

function OptionOfGroup({numOFOptions}) {
  console.log(numOFOptions)
    return (
        <div>
          <div className="mb-m w-full">
               <h3 className="text-md text-dark font-normal">
             Which is easier to learn?
             </h3>
             </div>
            
             {numOFOptions.map((option,index)=>(
           
            <div
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
                  d="M14.085 14.4023H9.91504L8.97852 17H7.625L11.4258 7.04688H12.5742L16.3818 17H15.0352L14.085 14.4023ZM10.3115 13.3223H13.6953L12 8.66699L10.3115 13.3223Z"
                  fill="#5B6366"
                />
              </svg>
              <h3 className="text-sm font-normal text-dark">{option}</h3>
            </div>
             ))}
        </div>
    )
}

export default OptionOfGroup
