import { Link } from "react-router-dom";

export const FormAddCategory = () => {
  return (
    <div>
      <form className="mx-auto max-w-lg rounded-lg border">
        <div className="flex flex-col gap-4 p-4 md:p-8">
          <div>
            <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Name</label>
            <input name="email" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
          </div>

          <div>
            <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Password</label>
            {/* <input name="password" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" /> */}
            <select name="" id="" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring">
              <option selected>--- Select Status ---</option>
              <option value="Active">Active</option>
              <option value="Deactive">Deactive</option>
            </select>
          </div>

          <div className="flex items-center mt-4 gap-x-3">
            <Link
              to="/listCategory"
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-white transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-red-700 dark:bg-red-600 hover:bg-gray-100 dark:text-gray-200 dark:border-red-500"
            >
              <svg style={{ fill: "#ffffff" }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
              <span>Back</span>
            </Link>

            <Link
              to="/listCategory"
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Add vendor</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
