const Header = {
    render() {
        return /* html */`    <header>
        <div class="bg-[#272f54] p-4">
          <a href="#">
            <img src="../img/Untitled-1.jpg" alt="" class="mx-auto">
          </a>
        </div>
        <div class="bg-[#cb7801] flex justify-between">
          <ul class="flex">
            <li><a href="" class="block py-3 px-4 hover:bg-indigo-600 hover:text-white">Trang chủ</a></li>
            <li><a href="" class="block py-3 px-4 hover:bg-indigo-600 hover:text-white">Tuyển sinh</a></li>
            <li><a href="" class="block py-3 px-4 hover:bg-indigo-600 hover:text-white">Chương trình đào tạo</a></li>
            <li><a href="" class="block py-3 px-4 hover:bg-indigo-600 hover:text-white">Góc sinh viên</a></li>
            <li><a href="" class="block py-3 px-4 hover:bg-indigo-600 hover:text-white">Tuyển dụng</a></li>
          </ul>
          <div class="py-3 mr-[20px]">
            <input type="text" class="">
            <input type="submit" value="Tìm kiếm" class="border-2 h-[24px] bg-[#272f54] text-[13px] text-white ">
          </div>
        </div>
        <div class="mt-[10px] ">
          <img src="./img/banner.jpg" alt="" width="1200px">
        </div>
      </header>`
    }
};
export default Header;