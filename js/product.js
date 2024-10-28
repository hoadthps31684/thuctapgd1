export const product = async () => {
  const URL_API = "http://127.0.0.1:5500/json/db.json";

  let arr;
  try {
    const response = await fetch(URL_API);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    arr = data.product;
    if (!Array.isArray(arr)) {
      throw new Error("Data is not an array");
    }
  } catch (error) {
    console.error("Failed to fetch menu data:", error);
    return null;
  }
  let str = `
        <div class="row pt-5">
    `;
  arr.forEach((p) => {
    str += `
            <div class="col-3 mb-4">
                <div class="card text-center bg-white">
                    <div class="card-header bg-white">
                        <img src="../img/sanpham/${p.image}">
                    </div>

                    <div class="card-body bg-white pb-0">
                        <h6>${p.nameProduct}</h6>
                        <p>${Number(p.price).toLocaleString("vi-VN", {
                          minimumFractionDigits: 3,
                        })} <span>VNĐ</span></p>
                    </div>

                    <div class="card-footer bg-white">
                        <button class="btn btn-outline-info">Mua</button>
                        <i class="fa-regular fa-heart btn btn-outline-danger border-0"></i>
                    </div>
                </div>
            </div>  
        `;
  });
  str += `
        </div>
    `;
  return str;
};
export function buy() {
  console.log("buy successfully");
}
