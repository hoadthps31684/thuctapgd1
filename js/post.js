export const post = async () => {
  const URL_API = "http://127.0.0.1:5500/json/db.json";

  let arr;
  try {
    const response = await fetch(URL_API);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    arr = data.post; 
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
