export default function Footer() {
  return (
    <footer class="bg-white dark:border-t-[1px] dark:border-green200 dark:bg-clip-padding backdrop-filter dark:backdrop-filter backdrop-blur-sm dark:backdrop-blur-sm bg-opacity-10 dark:bg-opacity-10">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                FoodMe
              </span>
            </a>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 dark:text-white">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Biz haqimizda
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Shartlar
              </a>
            </li>

            <li>
              <a href="#" class="hover:underline">
                Bog'lanish
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-white lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-white">
          © 2024{" "}
          <a href="#" class="hover:underline">
            FoodMe™
          </a>
        </span>
      </div>
    </footer>
  );
}
