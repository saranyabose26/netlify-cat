var f1=fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=bf37adc6ffc3839bb01a69fdb6e35443");
f1.then((data)=>data.json()).then((data1)=>foo(data1));

var container=document.createElement("div");
container.className="container";

var row=document.createElement("div");
row.className="row";

function foo(data1){
    console.log(data1);
    for(var i=0;i<data1.length;i++)
    {
        var col=document.createElement("div");
        col.className="col-md-4";
        col.innerHTML+=
        `<div class="card" style="width:18rem;">
        <div class="card-body">
        <p class="card-text"><b>ID:</b> ${data1[i].id}
        <b>width:</b>${data1[i].width}
        <b>height:</b>${data1[i].height}</p>
        
        </div>
        </div>`
        row.append(col);
        container.append(row);
        document.body.append(container);
    }
}
