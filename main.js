let userData = [
    {
        id:1,
        name: "test1",
        date:"2 novamber",
        number: "136",
        Activation: "Active",
       
      },
    {
      id:2,
      name: "test2",
      date:"2 novamber",
      number: "111",
      Activation: "Active",
     
    },
    {
        id:3,
        name: "test3",
        date:"2 novamber",
        number: "222",
        Activation: "Active",
       
      },
      {
        id:4,
        name: "test4",
        date:"2 novamber",
        number: "333",
        Activation: "Active",
       
      },
      {
        id:5,
        name: "test5",
        date:"2 novamber",
        number: "444",
        Activation: "Active",
       
      },
      {
        id:6,
        name: "test6",
        date:"2 novamber",
        number: "555",
        Activation: "Active",
       
      },
    
  ];
  function displayCards(){
      let allRows = ""
      for(let i = 0; i < userData.length; i++){
          allRows += `
        
        <tr>
              <td >${userData[i].id}</td>
              <td>${userData[i].name}</td>
              <td>${userData[i].number}</td>
              <td>${userData[i].date}</td>
              <td>${userData[i].Activation}</td>
            </tr>

          
          `
          document.getElementById("rows").innerHTML = allRows
      
  
  
  }}
  
  displayCards()
  
  
  
  