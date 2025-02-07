import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

const BookDetails = () => {
    const navigate = useNavigate(); // Used for redirection
    const [searchTerm, setSearchTerm] = useState(""); // Search state

    const fakeBooks = [
        // 📚 English Books
        { id: 1, title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", genre: "Fantasy", condition: "New", price: "$2", image: "https://m.media-amazon.com/images/I/81YOuOGFCJL._SL1500_.jpg" },
        { id: 2, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", condition: "Good", price: "$1", image: "https://www.hachettebookgroup.com/wp-content/uploads/2020/06/9780762498130-3.jpg" },
        { id: 3, title: "1984", author: "George Orwell", genre: "Dystopian", condition: "New", price: "$1", image: "https://penguinseriesdesign.com/wp-content/uploads/2018/03/signet-1984-21.jpg" },
        { id: 4, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic", condition: "Like New", price: "$1.7", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/220px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg" },
        { id: 5, title: "Dune", author: "Frank Herbert", genre: "Sci-Fi", condition: "Like New", price: "$2", image: "https://m.media-amazon.com/images/I/81nq+ewtkcL._SY425_.jpg" },
    
        // 📚 Amharic Books 🇪🇹
        { id: 6, title: "አጼ ቴዎድሮስ ", author: "ጳውሎስ ኞኞ", genre: "ታሪክ", condition: "New", price: "45 ብር", image: "https://i0.wp.com/kaggerbet.com/wp-content/uploads/2020/08/Atse-Tewodros-1.jpg" },
        { id: 7, title: "ሰመመን", author: "ብርሃኑ ዘሪሁን ", genre: "ፍቅር", condition: "Good", price: "30 ብር", image: "https://i0.wp.com/kaggerbet.com/wp-content/uploads/2020/08/Sememen-1.jpg" },
        { id: 8, title: "ጸሃይ ከጨለማዬ ምን አለሽ ", author: "እሱባለው ተፈራ ", genre: "ልብወለድ ", condition: "New", price: "50 ብር", image: "https://www.mereb.shop/Image/Product/94856961/94856961-45-684-large.jpg" },
        { id: 9, title: "ፍቅር እስከመቃብር ", author: "ሃዲስ አለማየሁ ", genre: "ፍቅር", condition: "Like New", price: "35 ብር", image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1590965645i/53713557.jpg" },
        { id: 10, title: "ልጅነት", author: "ዘነበ ወላ", genre: "አስቂኝ ", condition: "Good", price: "25 ብር", image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1436430008i/25876701.jpg" }
    ];
    
    // Function to handle the exchange request
    const handleExchangeRequest = (bookId) => {
        alert("You must be logged in to request an exchange!"); // Show an alert
        navigate("/login"); // Redirect to login page
    };

    return (
        <Box sx={{ width: "100%", paddingTop: 6, paddingX: 5 }}>  
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "#2E3B55" }}>
                    📚 Available Books
                </Typography>

                <TextField
    label="Search Books"
    variant="outlined"
    sx={{
        width: "30%",
        backgroundColor: "white",
        borderRadius: "25px",
        boxShadow: 2,
        color: "black"  
    }}
    InputProps={{
        style: { color: "black" },  
        startAdornment: (
            <InputAdornment position="start">
                <SearchIcon sx={{ color: "#007BFF" }} />
            </InputAdornment>
        ),
    }}
/>
            </Box>

            {/* Book List (This is where books are displayed) */}
            <Grid container spacing={4} justifyContent="center" sx={{ paddingX: 5 }}>

                {fakeBooks.map((book) => (
                    <Grid item key={book.id} xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 345, backgroundColor: "#fff", boxShadow: 3, borderRadius: 2 }}>
                            <CardMedia
                                component="img"
                                height="250"
                                image={book.image}
                                alt={book.title}
                                sx={{ objectFit: "contain", padding: "10px", backgroundColor: "#fff" }}
                            />
                            <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#444" }}>
                                    {book.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#666" }}>
                                    Author: {book.author}
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#666" }}>
                                    Genre: {book.genre}
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#666" }}>
                                    Condition: {book.condition}
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: "bold", color: "#007bff" }}>
                                    Price: {book.price}
                                </Typography>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{ marginTop: 2, backgroundColor: "#28a745", "&:hover": { backgroundColor: "#218838" } }}
                                    onClick={() => handleExchangeRequest(book.id)}
                                >
                                    Request Exchange
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default BookDetails;





// import React, { useEffect, useState } from "react";
// import { DataGrid } from "@mui/x-data-grid";
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
// import Button from "@mui/material/Button";
// import axios from "axios";
// import { COMMON_URL } from "../constants/URL";
// import { Box, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material";
// import { useCookies } from "react-cookie";
// import Loading from "../main/Loading";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// const BookDetails = () => {
//     const [data, setData] = useState([]);
//     //const [dataList, setDataList] = useState([]);
//     const [cookies, _setCookie] = useCookies(['access_token']);
//     const [isLoading, setIsLoading] = useState(true);
//     const [isDialogOpen, setDialogOpen] = useState(false);
//     const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
//     const [enableEditDeleteBtn, setEnableEditDeleteBtn] = useState(false);
//     const [title, setTitle] = useState('');
//     const [author, setAuthor] = useState('');
//     const [genre, setGenre] = useState('');
//     const [condition, setCondition] = useState('');
//     const [price, setPrice] = useState(0);

//     const [id, setId] = useState(null);
//     const [isSaved, setIsSaved] = useState(false);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 axios.defaults.headers.common['Authorization'] = cookies['access_token'];
//                 //const marketDataPromise = axios.get(COMMON_URL + "api/get-mf-api-data");
//                 const dbData = await axios.get(COMMON_URL + "api/books/getAllBooksForAUser");

//                 //const [marketData, dbData] = await Promise.all([marketDataPromise, dbDataPromise]);

//                 if (dbData.status === 200 && dbData.data) {
//                     //setDataList(marketData.data);
//                     setData(dbData.data);
//                     setIsLoading(false);
//                     setIsSaved(false);
//                 }
//             }
//             catch (error) {
//                 // Handle errors if any of the API calls fail
//                 console.error('Error calling one or more APIs', error);
//             }
//         };
//         fetchData();
//     }, [isSaved]);

//     const columns = [
//         { field: "title", headerName: "Title", flex: 1 },
//         { field: "author", headerName: "Author", flex: 1 },
//         { field: "genre", headerName: "Genre", flex: 1 },
//         { field: "condition", headerName: "Condition", flex: 1 },
//         { field: "available", headerName: "Avaiable", flex: 1 },
//         { field: "price", headerName: "Price", flex: 1 },
//     ];

//     const handleDialog = () => {
//         setDialogOpen(!isDialogOpen);
//     };

//     const handleDeteleDialog = () => {
//         setIsDeleteDialogOpen(!isDeleteDialogOpen);
//     }

//     const isAnyFieldEmpty = () => {
//         return !title || !author || !genre || !condition || !price;
//     };

//     const handleAdd = () => {
//         setIsLoading(true);
//         handleDialog();
//         axios.defaults.headers.common['Authorization'] = cookies['access_token'];

//         const data = {
//             id: id,
//             title: title,
//             author: author,
//             genre: genre,
//             condition: condition,
//             price: price
//         };

//         axios.post(COMMON_URL + "api/books/addBook", data).then((res) => {
//             setIsSaved(true);
//             setEnableEditDeleteBtn(false);
//         }).catch((error) => {
//             toast.error('Failed to add/edit book.', {
//                 position: toast.POSITION.TOP_RIGHT,
//                 style: { backgroundColor: 'red', color: '#fff' },
//             });
//             setIsLoading(false);
//         }).finally(() => {
//             setId(null);
//             setTitle('');
//             setAuthor('');
//             setGenre('');
//             setCondition('');
//             setPrice(0);
//         })
//     };

//     const handleChangeStatus = () => {
//         setIsLoading(true);
//         axios.defaults.headers.common['Authorization'] = cookies['access_token'];

//         const data = {
//             id: id,
//         };

//         axios.post(COMMON_URL + "api/books/changeStatus", data).then((res) => {
//             setIsSaved(true);
//             setEnableEditDeleteBtn(false);
//         }).catch((error) => {
//             console.error('userinfo failed:', error);
//             setIsLoading(false);
//         }).finally(() => {
//             setId(null);
//             setTitle('');
//             setAuthor('');
//             setGenre('');
//             setCondition('');
//             setPrice(0);
//         })
//     };

//     return (
//         <Box sx={{ width: "100%", paddingTop: 6 }}>
//             {isLoading ?
//                 <>
//                     <Loading />
//                 </> :
//                 <>
//                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
//                         <h1>Book Info</h1>
//                         {<div>
//                             <Button
//                                 variant="contained"
//                                 onClick={handleDialog}
//                                 style={{ marginRight: 10 }}
//                                 disabled={enableEditDeleteBtn}
//                             >
//                                 Add
//                             </Button>
//                             <Button
//                                 variant="contained"
//                                 color="primary"
//                                 disabled={!enableEditDeleteBtn}
//                                 onClick={handleDialog}
//                                 style={{ marginRight: 10 }}
//                             >
//                                 Edit
//                             </Button>
//                             <Button
//                                 variant="contained"
//                                 color="secondary"
//                                 disabled={!enableEditDeleteBtn}
//                                 onClick={handleChangeStatus}
//                             >
//                                 Change Status
//                             </Button>
//                         </div>
//                         }
//                     </div>

//                     <DataGrid
//                         autoHeight
//                         rows={data}
//                         columns={columns}
//                         initialState={{
//                             pagination: {
//                                 paginationModel: { page: 0, pageSize: 10 },
//                             },
//                         }}
//                         pageSizeOptions={[5, 10]}
//                         onRowSelectionModelChange={(newSelection) => {
//                             if (newSelection.length == 1) {
//                                 const selectedData = data.find(item => item.id === newSelection[0]);
//                                 setId(selectedData.id);
//                                 setTitle(selectedData.title);
//                                 setAuthor(selectedData.author);
//                                 setGenre(selectedData.genre);
//                                 setCondition(selectedData.condition);
//                                 setPrice(selectedData.price);
//                                 setEnableEditDeleteBtn(true);
//                             }
//                             else {
//                                 setId(null);
//                                 setTitle('');
//                                 setAuthor('');
//                                 setGenre('');
//                                 setCondition('');
//                                 setPrice(0);
//                                 setEnableEditDeleteBtn(false);
//                             }
//                         }}
//                     />
//                 </>}
//             <Dialog open={isDialogOpen} onClose={handleDialog}>
//                 <DialogTitle>Publish Book</DialogTitle>
//                 <DialogContent>
//                     <form>
//                         <Grid container spacing={2}>
//                             <Grid item xs={12}>
//                                 <FormControl fullWidth variant="outlined">
//                                     <InputLabel>Title</InputLabel>
//                                     <OutlinedInput
//                                         label="Title"
//                                         type="string"
//                                         value={title}
//                                         onChange={(e) => setTitle(e.target.value)}
//                                     />
//                                 </FormControl>
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <FormControl fullWidth variant="outlined">
//                                     <InputLabel>Author</InputLabel>
//                                     <OutlinedInput
//                                         label="Author"
//                                         type="string"
//                                         value={author}
//                                         onChange={(e) => setAuthor(e.target.value)}
//                                     />
//                                 </FormControl>
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <FormControl fullWidth variant="outlined">
//                                     <InputLabel>Genre</InputLabel>
//                                     <OutlinedInput
//                                         label="Genre"
//                                         type="string"
//                                         value={genre}
//                                         onChange={(e) => setGenre(e.target.value)}
//                                     />
//                                 </FormControl>
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <FormControl fullWidth variant="outlined">
//                                     <InputLabel>Condition</InputLabel>
//                                     <OutlinedInput
//                                         label="Conditon"
//                                         type="string"
//                                         value={condition}
//                                         onChange={(e) => setCondition(e.target.value)}
//                                     />
//                                 </FormControl>
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <FormControl fullWidth variant="outlined">
//                                     <InputLabel>Price</InputLabel>
//                                     <OutlinedInput
//                                         label="Price"
//                                         type="number"
//                                         value={price}
//                                         onChange={(e) => {
//                                             const inputValue = e.target.value;
//                                             if (/^\d*$/.test(inputValue)) {
//                                                 setPrice(inputValue);
//                                             }
//                                         }}
//                                     //disabled
//                                     />
//                                 </FormControl>
//                             </Grid>
//                             <Grid item xs={6}>
//                                 <Box display="flex" justifyContent="flex-end">
//                                     <Button variant="contained" color="primary" onClick={handleAdd} disabled={isAnyFieldEmpty()}>
//                                         Add
//                                     </Button>
//                                 </Box>
//                             </Grid>
//                             <Grid item xs={6}>
//                                 <Box display="flex" justifyContent="flex-start">
//                                     <Button variant="contained" color="secondary" onClick={handleDialog}>
//                                         Cancel
//                                     </Button>
//                                 </Box>
//                             </Grid>
//                         </Grid>
//                     </form>
//                 </DialogContent>
//             </Dialog>
//         </Box>
//     );
// };

// export default BookDetails;
