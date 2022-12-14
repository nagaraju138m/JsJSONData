

    let getData = fetch("http://localhost:3000/students");

    getData.then((data)=>{
        console.log(data);
        return data.json();
    }).then((newdata)=>{
        console.log(newdata);
        let table_data = "";
    
        newdata.map((values)=>{
            table_data += `
            <tr>
                <td id="cold">${values.id}</td>
                <td id="cold">${values.name}</td>
                <td id="cold">${values.city}</td>
                <td id="cold">${values.age}</td>
                <td id="cold">${values.Gender}</td>
                <td id="cold">${values.class}</td>
                <td id="cold">${values.Section}</td>
                <td id="cold">${values.Branch}</td>
                <td id="cold">${values.Email}</td>
                <td> <img src= ${values.image}></td>
                
            </tr>
            `;
        });
        document.getElementById("tableData").innerHTML = table_data
    }).catch((err)=>{
        console.log(err);
    });

    function save(){
        var ids = document.regForm.id.value;
        var Name = document.regForm.sname.value;
        var city = document.regForm.city.value;
        var age = document.regForm.age.value;
        var gender = document.regForm.gender.value;
        var email = document.regForm.email.value;

        fetch("http://localhost:3000/students", {
            method: "POST",
            body: JSON.stringify({
                id: ids,
                name : Name,
                city : city,
                Gender: gender,
                class: "10th",
                Section: "A",
                Branch: "Computers",
                Email: email,
                age : age,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu2m8qFdJ0x_RSHUmQzbRbEU5dVY-LL3wFPQ&usqp=CAU"
            }),
            headers:{
                "Content-Type": "application/json; charset=UTF-8"
            }
            }).then(res =>
                res.json()
            ).then(data => console.log(data))
    }



    // ,
    // {
    //   "id": 2,
    //   "name": "charan",
    //   "city": "Door No 3, AmeerPet, Main Road-2, Chennai, Secunderabad",
    //   "Gender": "Male",
    //   "class": "10th",
    //   "Section": "A",
    //   "Branch": "Software",
    //   "Email": "Charan@gmail.com",
    //   "age": 20,
    //   "image": "data:image/jpeg;base64,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"
    // },
    // {
    //   "id": 3,
    //   "name": "Sam",
    //   "city": "H-no: 24, Single Street , NO one Road, Main Hiway, Guntur",
    //   "Gender": "FeMale",
    //   "class": "10th",
    //   "Section": "B",
    //   "Branch": "Mechanical",
    //   "Email": "Sam@gmail.com",
    //   "age": 25,
    //   "image": "data:image/jpeg;base64,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"
    // },
    // {
    //   "id": 4,
    //   "name": "veena",
    //   "city": "House No 2-A2-09, Seetha Street-2 , Find me, United Kingdon, Vizag",
    //   "Gender": "FeMale",
    //   "class": "10th",
    //   "Section": "A",
    //   "Branch": "Electricity",
    //   "Email": "veena@gmail.com",
    //   "age": 21,
    //   "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu2m8qFdJ0x_RSHUmQzbRbEU5dVY-LL3wFPQ&usqp=CAU"
    // }