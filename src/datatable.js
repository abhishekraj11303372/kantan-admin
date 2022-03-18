export const userColumns =[
  {field:"id", headerName:"ID",width: 70 },
  {
    field:"user",
    headerName: "User",
    width:230 ,
    renderCell: (params) => {
      return(
        <div className="cellWithImg">
          <img className="imgCell" src={params.row.img} alt="avatar" />
          {params.row.firstName}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width:230,
  },
  {
    field:"age",
    headerName:"Age",
    width:100,
  },
  {
    field:"status",
    headerName: "Status",
    width:230 ,
    renderCell: (params) => {
      return(
        <div className={`cellWithStatus ${params.row.status}`} >
          {params.row.status}
        </div>
      );
    },
  },
];

// export const columns = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'firstName', headerName: 'First name', width: 130 },
//     { field: 'lastName', headerName: 'Last name', width: 130 },
//     {
//       field: 'age',
//       headerName: 'Age',
//       type: 'number',
//       width: 90,
//     },
//     {
//       field: 'fullName',
//       headerName: 'Full name',
//       description: 'This column has a value getter and is not sortable.',
//       sortable: false,
//       width: 160,
//       valueGetter: (params) =>
//         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//     },
//   ];
  
  export const rows = [
    { id: 1, status:"active" ,email:"abc1@mail.com" , img:"https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" ,lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, status:"passive" ,email:"abc2@mail.com" , img:"https://images.pexels.com/photos/331990/pexels-photo-331990.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" ,lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, status:"active" ,email:"abc3@mail.com" , img:"https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" ,lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, status:"hold" ,email:"abc4@mail.com" , img:"https://images.pexels.com/photos/109998/pexels-photo-109998.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" ,lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, status:"passive" ,email:"abc5@mail.com" , img:"https://images.pexels.com/photos/1906795/pexels-photo-1906795.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" ,lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, status:"active" ,email:"abc6@mail.com" , img:"https://images.pexels.com/photos/2869565/pexels-photo-2869565.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" ,lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, status:"active" ,email:"abc7@mail.com" , img:"https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" ,lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, status:"passive" ,email:"abc8@mail.com" , img:"https://images.pexels.com/photos/11427613/pexels-photo-11427613.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" ,lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, status:"active" ,email:"abc9@mail.com" , img:"https://images.pexels.com/photos/3330118/pexels-photo-3330118.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" ,lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];