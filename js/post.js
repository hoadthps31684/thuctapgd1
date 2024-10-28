export const post = async () => {
    let arr;
    arr = await fetch("http://localhost:3000/post")
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
        const truncatedSubject = p.subject.length > 65 ? p.subject.substring(0, 65) + "..." : p.subject;
        str += `
            <div class="col-3">
                <div class="card text-center bg-white">
                    <div class="card-header bg-white">
                        <img src="../img/${p.image}">
                    </div>
    
                    <div class="card-body bg-white pb-0">
                        <p class="fs-6">${p.title}</p>
                        <p class="fs-6">${truncatedSubject}</p>
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
