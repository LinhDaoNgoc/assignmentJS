// const Header = {
//     render() {
//         return /* html */ `
//       <div class="bg-blue-800 py-4">
//       <a href="">
//         <img src="https://picsum.photos/150/40" alt="" class="mx-auto">
//       </a>
//     </div>
//     <div class="bg-orange-500">
//       <ul class="flex">
//         <li><a href="/" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Trang chủ </a></li>
//         <li><a href="/about" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Tyển sinh</a></li>
//         <li><a href="/news" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">News</a></li>
//         <li><a href="/contact" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Contact</a></li>
//       </ul>
//     </div>
//       `;
//     },
// };
// export default Header;
const Header = {
    render() {
        return /* html */`    <header>
      <div class="bg-[#272f54] p-4">
        <a href="#">
          <img src="https://picsum.photos/150/40" alt="" class="mx-auto">
        </a>
      </div>
      <div class="bg-[#cb7801] flex justify-between">
        <ul class="flex">
          <li><a href="/" class="block py-3 px-4 hover:bg-indigo-600 hover:text-white">Trang chủ</a></li>
          <li><a href="/about" class="block py-3 px-4 hover:bg-indigo-600 hover:text-white">Tuyển sinh</a></li>
          <li><a href="/news" class="block py-3 px-4 hover:bg-indigo-600 hover:text-white">Chương trình đào tạo</a></li>
          <li><a href="" class="block py-3 px-4 hover:bg-indigo-600 hover:text-white">Góc sinh viên</a></li>
          <li><a href="" class="block py-3 px-4 hover:bg-indigo-600 hover:text-white">Tuyển dụng</a></li>
        </ul>
        <div class="py-3 mr-[20px]">
          <input type="text" class="">
          <input type="submit" value="Tìm kiếm" class="border-2 h-[24px] bg-[#272f54] text-[13px] text-white ">
        </div>
      </div>
    </header>`;
    },
};
export default Header;