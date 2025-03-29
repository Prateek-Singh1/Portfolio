import React, { useState } from "react";
import { useGet } from "../../api/apiService";
import { API_URLS } from "../../config/apiUrls";
import SearchBar from "../../common/SearchBar/SearchBar";

interface Users {
  image: string;
  firstName: string;
  email: string;
}

const Debouncing: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const url = API_URLS.USERS;
  const params = { limit: 50 };
  const { data } = useGet(url, params);
  const allUsers = data?.users || [];

  // ***** Debounce Function *****
  function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
    let timer: ReturnType<typeof setTimeout>;
    return function (...args: Parameters<T>) {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  }

  // Search function with debounce
  const handleSearchChange = debounce((query: string) => {
    setSearchQuery(query.toLowerCase());
  }, 1000);

  // Filter users based on search query
  const filteredUsers = allUsers.filter(
    (user: Users) =>
      user.firstName.toLowerCase().includes(searchQuery) ||
      user.email.toLowerCase().includes(searchQuery)
  );

  return (
    <>
      <section id="debouncing">
        <div className="relative flex items-center justify-center flex-col">
          <div className="z-10 w-full lg:max-w-[60%] p-[10px] sticky top-0 bg-gray-50 dark:bg-gray-700">
            <div className="h-[46px]">
              <SearchBar onChange={handleSearchChange} />
            </div>
          </div>

          <div className="p-2 w-full lg:max-w-[60%] flex items-center justify-center flex-col gap-2">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user: Users, index: number) => (
                <div
                  key={index}
                  className="w-full flex relative overflow-hidden rounded-lg shadow-md transition-all duration-500 group "
                >
                  <div className="w-full relative overflow-hidden hover:shadow-xl hover:transform hover:-translate-y-1 rounded-lg shadow-md transition-all duration-500 border-1 border-[#E7E7E7] bg-white dark:bg-[#181818] dark:border-x dark:border-b dark:border-[#383737] group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)] to-stone-900 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative z-1 p-[10px] flex gap-[15px]">
                      <img
                        src={user?.image}
                        className="object-cover w-[70px] h-14 rounded-full  fill-gray-700"
                      />
                      <div className="w-full">
                        <div className="flex gap-2 md:items-center mb-2 transition-colors duration-500 text-[var(--primary-color)] group-hover:text-white">
                          <h3 className="font-bold text-[16px]">
                            {user.firstName}
                          </h3>
                        </div>
                        <p className="text-[13px] transition-colors duration-500 text-gray-600 dark:text-[#808080] group-hover:text-white">
                          {user?.email}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 dark:text-gray-400">No users found</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Debouncing;
