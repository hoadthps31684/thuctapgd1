export const homepage = async () => {
    let arr;
    arr = await fetch("http://localhost:3000/homepage")
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
        const truncatedSubject = p.subject.length > 70 ? p.subject.substring(0, 70) + "..." : p.subject;
        str += `
            <div class="col-3">
                <div class="card text-center bg-white">
                    <div class="card-header bg-white">
                        <img src="../img/${p.image}" with = 150px, height = 120px>
                    </div>
    
                    <div class="card-body bg-white pb-0">
                        <h6>${p.title}</h6>
                        <p>${p.subject}</p>
                    </div>
    
                    <div class="card-footer bg-white">
                        <button class="btn btn-outline-info">Xem bài viết</button>
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
