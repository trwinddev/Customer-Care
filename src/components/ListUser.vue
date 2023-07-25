<template>
  <div class="pt-5">
    <div class="flex justify-end pb-10 mr-4">
      <div
        class="bg-blue-primary-login text-white py-2 px-4 flex rounded-md gap-2"
      >
        <span><a href="">Tạo người dùng</a></span>
        <span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.93005 1.06957L8.0062 5.56188C8.0062 5.74649 8.12938 5.8388 8.28335 5.8388H13.0874C13.4261 5.8388 13.6417 6.2388 13.4877 6.54649L8.25256 15.1311C8.03699 15.5619 7.39029 15.408 7.39029 14.9157L8.31415 9.62342C8.31415 9.4388 8.16017 9.50034 7.9754 9.50034H2.925C2.58625 9.50034 2.33989 9.00803 2.52466 8.70034L8.06779 0.854187C8.28335 0.454187 8.93005 0.577264 8.93005 1.06957Z"
              fill="white"
            />
          </svg>
        </span>
      </div>
    </div>
    <header
      class="mb-5 border-b-4 border-orange-primary-color flex text-center font-medium"
    >
      <span
        class="border border-t-4 border-orange-primary-color text-orange-primary-color p-2"
        >Lịch sử tương tác</span
      >
      <span class="border p-2 border-t-4 border-gray-text-gray"
        >Sản phẩm dịch vụ</span
      >
      <span class="border p-2 border-t-4 border-gray-text-gray">Ghi chú</span>
    </header>
    <table>
      <tr class="bg-gray-bg-table">
        <th><input type="checkbox" name="" id="" />Check all</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Date</th>
        <th>Score</th>
      </tr>
      <tr>
        <td><input type="checkbox" name="" id="" /></td>
        <td>Kathryn Murphy</td>
        <td>(252) 555-0126</td>
        <td><a href="">tanya.hill@example.com</a></td>
        <td>March 6, 2018</td>
        <td>274</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style>
table,
td,
th {
  border: 1px solid;
  text-align: center;
}

td,
th {
  padding: 5px 10px;
}

table {
  width: 80%;
  border-collapse: collapse;
}
</style>
