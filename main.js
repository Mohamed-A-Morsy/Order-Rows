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
          <div class="col-md-12 mt-2">
          <div class="innerHtml  d-flex justify-content-between rounded-pill px-3 pt-1 align-items-center">
          <p>${userData[i].id}</p>
          <p>${userData[i].name}</p>
          <p>${userData[i].number}</p>
          <p>${userData[i].date}</p>
          <p>${userData[i].Activation}</p>
          </div>
        </div>
          
          `
          document.getElementById("rows").innerHTML = allRows
      
  
  
  }}
  
  displayCards()
  
  
  
  