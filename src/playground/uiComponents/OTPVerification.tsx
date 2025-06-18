import React, { useState, useRef, useEffect } from "react";
import AnimatedButton from "../../common/Button/AnimatedButton";

const OTP_DIGITS_COUNT = 4;

const OTPVerification: React.FC = () => {
  const inpRef = useRef<(HTMLInputElement | null)[]>([]);
  const [inputArray, setInputArray] = useState<string[]>(
    new Array(OTP_DIGITS_COUNT).fill("")
  );
  const [isVerified, setIsVerified] = useState<boolean>(false);

  useEffect(() => {
    inpRef.current[0]?.focus();
  }, [isVerified]);

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const values = e.target.value;
    if (isNaN(Number(values))) return;

    const newValue = values.trim().slice(-1);
    const newArray = [...inputArray];
    newArray[index] = newValue;
    setInputArray(newArray);

    if (newValue && index < OTP_DIGITS_COUNT - 1) {
      inpRef.current[index + 1]?.focus();
    }
  };

  const handleOnKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.currentTarget.value;
    if (!value && e.key === "Backspace" && index > 0) {
      inpRef.current[index - 1]?.focus();
    }
  };

  const handleRetry = () => {
    inpRef.current[0]?.focus();
    setIsVerified(false);
    setInputArray(new Array(OTP_DIGITS_COUNT).fill(""));
  };

  useEffect(() => {
    const isComplete =
      inputArray[inputArray.length - 1] !== "" &&
      inputArray.join("").length === OTP_DIGITS_COUNT;
    setIsVerified(isComplete);
  }, [inputArray]);

  return (
    <section id="otp-verification">
      <div className="w-full h-full flex items-center justify-center">
        {!isVerified ? (
          <div className="h-full flex items-center justify-center gap-[20px]">
            {inputArray.map((input, index) => (
              <input
                key={index}
                type="text"
                value={input}
                ref={(el) => (inpRef.current[index] = el)}
                onChange={(e) => handleOnChange(e, index)}
                onKeyDown={(e) => handleOnKeyDown(e, index)}
                maxLength={1}
                className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-gray-300 border-[2px] border-transparent hover:border-[var(--primary-color)] appearance-none rounded p-4 outline-none focus:bg-white focus:border-[var(--primary-color)] focus:ring-2 focus:ring-indigo-100"
              />
            ))}
          </div>
        ) : (
          <div className="relative w-[400px] h-[400px] border-gray-200 rounded-lg border-1 dark:border-[#383737] group">
            <div className="w-full h-full shadow-lg rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center flex items-center justify-center flex-col gap-[10px]">
                  <h2 className="text-2xl font-bold text-gray-600 mb-2 animate-pulse">
                    Verification Done 🎉
                  </h2>
                  <AnimatedButton text={"Try again"} onClick={handleRetry} />
                </div>
              </div>
            </div>
            <div className="h-2 w-full bg-gradient-to-l group-hover:via-[var(--primary-color)] group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
            <div className="h-0.5 group-hover:w-full bg-gradient-to-l group-hover:via-[var(--primary-color)] w-[70%] m-auto rounded transition-all absolute bottom-[-1px] left-0"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OTPVerification;
