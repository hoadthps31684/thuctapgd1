interface IProduct {
    id: number,
    nameProduct: string,
    category: string,
    price: number,
    image: string,
    date: Date
}

export const product = async() => {
    let arr: IProduct[];
    arr = await fetch("http://localhost:3000/product")
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        return data;
                    })
                    .catch(error => {
                        throw new Error(error);
                    });

    let str = `
        <div class="row pt-5">
    `;
    arr.forEach(p => {
        str += `
            <div class="col-3 mb-4">
                <div class="card text-center bg-white">
                    <div class="card-header bg-white">
                        <img src="../img/sanpham/${p.image}">
                    </div>

                    <div class="card-body bg-white pb-0">
                        <h6>${p.nameProduct}</h6>
                        <p>${Number(p.price).toLocaleString("vi-VN", { minimumFractionDigits: 3 })} <span>VNĐ</span></p>
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
}

export function buy(): void {
    console.log("buy successfully");
}