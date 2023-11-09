import React from 'react'

const Button = ({ text }) => {
    return (
        <button className="bg-[#151F6D] text-white rounded-xl py-[14px] px-[32px] text-[17px] leading-5 font-normal">
          {text}
        </button>
      );
    }

export default Button