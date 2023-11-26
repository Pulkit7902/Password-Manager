const copytable = (txt) =>{
    navigator.clipboard.writeText(txt).then(
        () =>{
            alert("copied the text" + txt);

        }
    )

    console.log("copy function is operatable");


}
function maskpass(pass){
    let str = "";
    for(let i=0;i<pass.length;++i){
        str+="*";


    }
    return str;

}
const deletetable = (website) =>{
    let tb = document.querySelector("table")
    let data = localStorage.getItem("passwords")
    if(data==null){
        tb.innerHTML = "No Data Is There"
    }
    let arr = JSON.parse(data)
    arrupdate = arr.filter((e)=>{

        return e.website !=website
    })
    localStorage.setItem("passwords" , JSON.stringify(arrupdate))
    alert(`successfull deletion , ${website} , ${password.value}`)
    showtable()

}
function showpass(pass){
    console.log("show pass is fuctioning");
    return pass

}
const showtable =() =>{
let tb = document.querySelector("table")

let data = localStorage.getItem("passwords");
if(data == null ||JSON.parse(data).length == 0){
    tb.innerHTML = "No Data is there"
}
else{
    let str =""
    tb.innerHTML = `  <tr>
    <th>Website</th>
    <th>Usename</th>
     <th>Password</th>
     <th>Delete </th>
   </tr>`
    

    let array = JSON.parse(data);
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    
    str += `<tr>
<td>${element.website} <img onclick="copytable(${element.website}) " src="OIP.jpeg" alt=""></td>
<td>${element.username} <img onclick="copytable(${element.username})" src="OIP.jpeg" alt=""></td>
<td>${maskpass(element.password)} <img onclick="copytable(${element.password}) " src="OIP.jpeg" alt=""> </td>
<td> <button class = "btnse"  onclick="deletetable('${element.website}')">Delete</button></td>
</tr>`
website.value = "";
username.value = ""
password.username = ""

}
tb.innerHTML = tb.innerHTML + str;
}}
console.log("hello");
showtable();

document.querySelector(".btn").addEventListener("click" , (e)=>{
    e.preventDefault();
    console.log("clicked")
    console.log(document.getElementById('username').value , document.getElementById('password').value)
    let passwords = localStorage.getItem("passwords");


if (passwords === null) {
    let json = [];
    json.push({ website:website.value,username: document.getElementById('username').value, password: document.getElementById('password').value });
    alert("Pass saved");
    localStorage.setItem("passwords", JSON.stringify(json));
} else {
    let json = JSON.parse(localStorage.getItem("passwords"));
    json.push({website:website.value, username: document.getElementById('username').value, password: document.getElementById('password').value });
    alert("Password saved");
    localStorage.setItem("passwords", JSON.stringify(json));
}
console.log(passwords)
showtable();
}) 
