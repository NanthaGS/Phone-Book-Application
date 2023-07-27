// // // // // import * as React from 'react';
// // // // // import { styled } from '@mui/material/styles';
// // // // // import Card from '@mui/material/Card';
// // // // // import CardHeader from '@mui/material/CardHeader';
// // // // // import CardMedia from '@mui/material/CardMedia';
// // // // // import CardContent from '@mui/material/CardContent';
// // // // // import CardActions from '@mui/material/CardActions';
// // // // // import Collapse from '@mui/material/Collapse';
// // // // // import Avatar from '@mui/material/Avatar';
// // // // // import IconButton from '@mui/material/IconButton';
// // // // // import Typography from '@mui/material/Typography';
// // // // // import Button from '@mui/material/Button';
// // // // // import BookmarkIcon from '@mui/icons-material/Bookmark';
// // // // // import AddIcon from '@mui/icons-material/Add';
// // // // // import MoreVertIcon from '@mui/icons-material/MoreVert';
// // // // // import GroupsIcon from '@mui/icons-material/Groups';
// // // // // import EditIcon from '@mui/icons-material/Edit';
// // // // // import Navbar from './Navbar';
// // // // // // import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
// // // // // import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
// // // // // import './Group.css';

// // // // // const ExpandMore = styled((props) => {
// // // // //   const { expand, ...other } = props;
// // // // //   return <IconButton {...other} />;
// // // // // })(({ theme, expand }) => ({
// // // // //   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
// // // // //   marginLeft: 'auto',
// // // // //   transition: theme.transitions.create('transform', {
// // // // //     duration: theme.transitions.duration.shortest,
// // // // //   }),
// // // // // }));

// // // // // const cardsData = [
// // // // //   {
// // // // //     id: 1,
// // // // //     avatarLabel: 'F',
// // // // //     title: 'Friends',
// // // // //     note: '',
// // // // //     method: "",
// // // // //   },
// // // // //   {
// // // // //     id: 2,
// // // // //     avatarLabel: 'Fam',
// // // // //     title: 'Family',
// // // // //     note: '',
// // // // //     method: "",
// // // // //   },
// // // // //   {
// // // // //     id: 3,
// // // // //     avatarLabel: 'O',
// // // // //     title: 'Office',
// // // // //     note: '',
// // // // //     method: "",
// // // // //   },
// // // // //   {
// // // // //     id: 4,
// // // // //     avatarLabel: 'G',
// // // // //     title: 'Game',
// // // // //     note: '',
// // // // //     method: "",
// // // // //   },
// // // // //   {
// // // // //     id: 5,
// // // // //     avatarLabel: 'ngo',
// // // // //     title: 'NGO',
// // // // //     note: '',
// // // // //     method: "",
// // // // //   }
// // // // // ];

// // // // // const CardRow = styled('div')(({ theme }) => ({
// // // // //   display: 'flex',
// // // // //   gap: theme.spacing(2),
// // // // // }));

// // // // // export default function GroupPage() {
// // // // //   return (
// // // // //     <div className="imgsss">
// // // // //     <div >
// // // // //         <div>
// // // // //       <Navbar/>
// // // // //       <div>
// // // // //       <Button variant="contained" color="success" style={{marginLeft: '1300px',marginBottom: '-40px'}}>Create Group <AddIcon/></Button>
// // // // //       </div>
// // // // //     <div className="card-container">
// // // // //       <CardRow>
// // // // //         {cardsData.map((card) => (
// // // // //           <Card key={card.id} sx={{ width: '220px', marginLeft: '30px',marginTop: '100px',backgroundColor: '#f5f5f5',color:'black',height:'270px'}}>
// // // // //             <CardHeader style={{marginBottom:'-20px' }}
// // // // //               avatar={
// // // // //                 <Avatar sx={{ backgroundColor: 'black' }} aria-label="recipe">
// // // // //                   {card.avatarLabel}
// // // // //                 </Avatar>
// // // // //               }
// // // // //               action={
// // // // //                 <IconButton aria-label="settings">
// // // // //                   <MoreVertIcon  style={{color: 'black' }}/>
// // // // //                 </IconButton>
// // // // //               }
// // // // //               title={card.title}
// // // // //             />
// // // // //             <CardMedia
// // // // //               height="150"
// // // // //             >
// // // // //               <PeopleOutlineIcon style={{ fontSize: '120px', marginLeft:'30px',marginBottom:'-30px', color: 'grey' }}/>
// // // // //             </CardMedia>
// // // // //             <CardContent>
// // // // //               <Typography variant="body2" color="black" style={{marginBottom: '10px' }}>
// // // // //                 {card.note}
// // // // //               </Typography>
// // // // //             </CardContent>
// // // // //             <CardActions disableSpacing>
// // // // //               <IconButton aria-label="add to favorites">
// // // // //                 <BookmarkIcon style={{color: 'crimson' }}/>
// // // // //               </IconButton>
// // // // //               <IconButton aria-label="share">
// // // // //                 <EditIcon  style={{color: 'crimson' }}/>
// // // // //               </IconButton>
// // // // //               <ExpandMore
// // // // //                 expand={false}
// // // // //                 onClick={() => {}}
// // // // //                 aria-expanded={false}
// // // // //                 aria-label="show more"
// // // // //               >
// // // // //                 {/* <ExpandMoreIcon /> */}
// // // // //               </ExpandMore>
// // // // //             </CardActions>
// // // // //             <Collapse in={false} timeout="auto" unmountOnExit>
// // // // //               <CardContent>
// // // // //                 <Typography paragraph>Method:</Typography>
// // // // //                 <Typography paragraph>{card.method}</Typography>
// // // // //               </CardContent>
// // // // //             </Collapse>
// // // // //           </Card>
// // // // //         ))}
// // // // //       </CardRow>
// // // // //     </div>
// // // // //     </div>
// // // // //     </div>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // // GroupPage.js
// // // // import * as React from 'react';
// // // // import { styled } from '@mui/material/styles';
// // // // import Card from '@mui/material/Card';
// // // // import CardHeader from '@mui/material/CardHeader';
// // // // import CardMedia from '@mui/material/CardMedia';
// // // // import CardContent from '@mui/material/CardContent';
// // // // import CardActions from '@mui/material/CardActions';
// // // // import Collapse from '@mui/material/Collapse';
// // // // import Avatar from '@mui/material/Avatar';
// // // // import IconButton from '@mui/material/IconButton';
// // // // import Typography from '@mui/material/Typography';
// // // // import Button from '@mui/material/Button';
// // // // import BookmarkIcon from '@mui/icons-material/Bookmark';
// // // // import AddIcon from '@mui/icons-material/Add';
// // // // import MoreVertIcon from '@mui/icons-material/MoreVert';
// // // // import GroupsIcon from '@mui/icons-material/Groups';
// // // // import EditIcon from '@mui/icons-material/Edit';
// // // // import Navbar from './Navbar';
// // // // import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
// // // // import './Group.css';

// // // // const ExpandMore = styled((props) => {
// // // //   const { expand, ...other } = props;
// // // //   return <IconButton {...other} />;
// // // // })(({ theme, expand }) => ({
// // // //   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
// // // //   marginLeft: 'auto',
// // // //   transition: theme.transitions.create('transform', {
// // // //     duration: theme.transitions.duration.shortest,
// // // //   }),
// // // // }));

// // // // const cardsData = [
// // // //   {
// // // //     id: 1,
// // // //     avatarLabel: 'F',
// // // //     title: 'Friends',
// // // //     note: '',
// // // //     method: "",
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     avatarLabel: 'Fam',
// // // //     title: 'Family',
// // // //     note: '',
// // // //     method: "",
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     avatarLabel: 'O',
// // // //     title: 'Office',
// // // //     note: '',
// // // //     method: "",
// // // //   },
// // // //   {
// // // //     id: 4,
// // // //     avatarLabel: 'G',
// // // //     title: 'Game',
// // // //     note: '',
// // // //     method: "",
// // // //   },
// // // //   {
// // // //     id: 5,
// // // //     avatarLabel: 'ngo',
// // // //     title: 'NGO',
// // // //     note: '',
// // // //     method: "",
// // // //   }
// // // // ];

// // // // const CardRow = styled('div')(({ theme }) => ({
// // // //   display: 'flex',
// // // //   gap: theme.spacing(2),
// // // //   flexWrap: 'wrap',
// // // //   justifyContent: 'space-evenly',
// // // // }));

// // // // export default function GroupPage() {
// // // //   return (
// // // //     <div className="imgsss">
// // // //       <div>
// // // //         <Navbar/>
// // // //         <div>
// // // //           <Button variant="contained" color="success" style={{marginLeft: '1300px',marginBottom: '-40px'}}>Create Group <AddIcon/></Button>
// // // //         </div>
// // // //         <div className="card-container">
// // // //           <CardRow>
// // // //             {cardsData.map((card) => (
// // // //               <Card key={card.id} className="card">
// // // //                 <CardHeader style={{marginBottom:'-20px' }}
// // // //                   avatar={
// // // //                     <Avatar sx={{ backgroundColor: 'black' }} aria-label="recipe">
// // // //                       {card.avatarLabel}
// // // //                     </Avatar>
// // // //                   }
// // // //                   action={
// // // //                     <IconButton aria-label="settings">
// // // //                       <MoreVertIcon  style={{color: 'black' }}/>
// // // //                     </IconButton>
// // // //                   }
// // // //                   title={card.title}
// // // //                 />
// // // //                 <CardMedia
// // // //                   height="150"
// // // //                 >
// // // //                   <PeopleOutlineIcon style={{ fontSize: '120px', marginLeft:'30px',marginBottom:'-30px', color: 'grey' }}/>
// // // //                 </CardMedia>
// // // //                 <CardContent>
// // // //                   <Typography variant="body2" color="black" style={{marginBottom: '10px' }}>
// // // //                     {card.note}
// // // //                   </Typography>
// // // //                 </CardContent>
// // // //                 <CardActions disableSpacing>
// // // //                   <IconButton aria-label="add to favorites">
// // // //                     <BookmarkIcon style={{color: 'crimson' }}/>
// // // //                   </IconButton>
// // // //                   <IconButton aria-label="share">
// // // //                     <EditIcon  style={{color: 'crimson' }}/>
// // // //                   </IconButton>
// // // //                   <ExpandMore
// // // //                     expand={false}
// // // //                     onClick={() => {}}
// // // //                     aria-expanded={false}
// // // //                     aria-label="show more"
// // // //                   >
// // // //                     {/* <ExpandMoreIcon /> */}
// // // //                   </ExpandMore>
// // // //                 </CardActions>
// // // //                 <Collapse in={false} timeout="auto" unmountOnExit>
// // // //                   <CardContent>
// // // //                     <Typography paragraph>Method:</Typography>
// // // //                     <Typography paragraph>{card.method}</Typography>
// // // //                   </CardContent>
// // // //                 </Collapse>
// // // //               </Card>
// // // //             ))}
// // // //           </CardRow>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }



// // // // GroupPage.js
// // // // import React, { useState } from 'react';
// // // // import { styled } from '@mui/material/styles';
// // // // import Card from '@mui/material/Card';
// // // // import CardHeader from '@mui/material/CardHeader';
// // // // import CardMedia from '@mui/material/CardMedia';
// // // // import CardContent from '@mui/material/CardContent';
// // // // import CardActions from '@mui/material/CardActions';
// // // // import Collapse from '@mui/material/Collapse';
// // // // import Avatar from '@mui/material/Avatar';
// // // // import IconButton from '@mui/material/IconButton';
// // // // import Typography from '@mui/material/Typography';
// // // // import Button from '@mui/material/Button';
// // // // import BookmarkIcon from '@mui/icons-material/Bookmark';
// // // // import AddIcon from '@mui/icons-material/Add';
// // // // import MoreVertIcon from '@mui/icons-material/MoreVert';
// // // // import GroupsIcon from '@mui/icons-material/Groups';
// // // // import EditIcon from '@mui/icons-material/Edit';
// // // // import Navbar from './Navbar';
// // // // import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
// // // // import './Group.css';

// // // // const ExpandMore = styled((props) => {
// // // //   const { expand, ...other } = props;
// // // //   return <IconButton {...other} />;
// // // // })(({ theme, expand }) => ({
// // // //   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
// // // //   marginLeft: 'auto',
// // // //   transition: theme.transitions.create('transform', {
// // // //     duration: theme.transitions.duration.shortest,
// // // //   }),
// // // // }));

// // // // const initialCards = [
// // // //   {
// // // //     id: 1,
// // // //     avatarLabel: 'F',
// // // //     title: 'Friends',
// // // //     note: '',
// // // //     method: "",
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     avatarLabel: 'Fam',
// // // //     title: 'Family',
// // // //     note: '',
// // // //     method: "",
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     avatarLabel: 'O',
// // // //     title: 'Office',
// // // //     note: '',
// // // //     method: "",
// // // //   },
// // // //   {
// // // //     id: 4,
// // // //     avatarLabel: 'G',
// // // //     title: 'Game',
// // // //     note: '',
// // // //     method: "",
// // // //   },
// // // //   {
// // // //     id: 5,
// // // //     avatarLabel: 'ngo',
// // // //     title: 'NGO',
// // // //     note: '',
// // // //     method: "",
// // // //   }
// // // // ];

// // // // const CardRow = styled('div')(({ theme }) => ({
// // // //   display: 'flex',
// // // //   gap: theme.spacing(2),
// // // //   flexWrap: 'wrap',
// // // //   justifyContent: 'space-evenly',
// // // // }));

// // // // export default function GroupPage() {
// // // //   const [cardsData, setCardsData] = useState(initialCards);

// // // //   const handleCreateGroup = () => {
// // // //     // Generate a new card ID based on the current timestamp
// // // //     const newCardId = Date.now();
// // // //     // Create the new card data object
// // // //     const newCard = {
// // // //       id: newCardId,
// // // //       avatarLabel: 'New',
// // // //       title: 'New Group',
// // // //       note: '',
// // // //       method: "",
// // // //     };
// // // //     // Add the new card to the existing cardsData array
// // // //     setCardsData([...cardsData, newCard]);
// // // //   };

// // // //   return (
// // // //     <div className="imgsss">
// // // //       <div>
// // // //         <Navbar/>
// // // //         <div>
// // // //           <Button variant="contained" color="success" onClick={handleCreateGroup} style={{marginLeft: '1300px',marginBottom: '-40px'}}>Create Group <AddIcon/></Button>
// // // //         </div>
// // // //         <div className="card-container">
// // // //           <CardRow>
// // // //             {cardsData.map((card) => (
// // // //               <Card key={card.id} className="card">
// // // //                 <CardHeader style={{marginBottom:'-20px' }}
// // // //                   avatar={
// // // //                     <Avatar sx={{ backgroundColor: 'black' }} aria-label="recipe">
// // // //                       {card.avatarLabel}
// // // //                     </Avatar>
// // // //                   }
// // // //                   action={
// // // //                     <IconButton aria-label="settings">
// // // //                       <MoreVertIcon  style={{color: 'black' }}/>
// // // //                     </IconButton>
// // // //                   }
// // // //                   title={card.title}
// // // //                 />
// // // //                 <CardMedia
// // // //                   height="150"
// // // //                 >
// // // //                   <PeopleOutlineIcon style={{ fontSize: '120px', marginLeft:'30px',marginBottom:'-30px', color: 'grey' }}/>
// // // //                 </CardMedia>
// // // //                 <CardContent>
// // // //                   <Typography variant="body2" color="black" style={{marginBottom: '10px' }}>
// // // //                     {card.note}
// // // //                   </Typography>
// // // //                 </CardContent>
// // // //                 <CardActions disableSpacing>
// // // //                   <IconButton aria-label="add to favorites">
// // // //                     <BookmarkIcon style={{color: 'crimson' }}/>
// // // //                   </IconButton>
// // // //                   <IconButton aria-label="share">
// // // //                     <EditIcon  style={{color: 'crimson' }}/>
// // // //                   </IconButton>
// // // //                   <ExpandMore
// // // //                     expand={false}
// // // //                     onClick={() => {}}
// // // //                     aria-expanded={false}
// // // //                     aria-label="show more"
// // // //                   >
// // // //                     {/* <ExpandMoreIcon /> */}
// // // //                   </ExpandMore>
// // // //                 </CardActions>
// // // //                 <Collapse in={false} timeout="auto" unmountOnExit>
// // // //                   <CardContent>
// // // //                     <Typography paragraph>Method:</Typography>
// // // //                     <Typography paragraph>{card.method}</Typography>
// // // //                   </CardContent>
// // // //                 </Collapse>
// // // //               </Card>
// // // //             ))}
// // // //           </CardRow>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // // GroupPage.js
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GroupsIcon from '@mui/icons-material/Groups';
import EditIcon from '@mui/icons-material/Edit';
import Navbar from './Navbar';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import './Group.css';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const initialCards = [
  {
    id: 1,
    avatarLabel: 'F',
    title: 'Friends',
    note: '',
    method: "",
  },
  {
    id: 2,
    avatarLabel: 'O',
    title: 'Office',
    note: '',
    method: "",
  }
 
];

const CardRow = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
}));

export default function GroupPage() {
  const [cardsData, setCardsData] = useState(initialCards);

  const handleCreateGroup = () => {
    const id = window.prompt('Enter ID:');
    const avatarLabel = window.prompt('Enter Avatar Label:');
    const title = window.prompt('Enter Title:');
    const note = window.prompt('Enter Note:');
    const method = window.prompt('Enter Method:');

    if (!id || !avatarLabel || !title || !note || !method) {
    
      return;
    }

    const newCardId = Date.now();
   
    const newCard = {
      id: parseInt(id), 
      avatarLabel,
      title,
      note,
      method,
    };
    
    setCardsData([...cardsData, newCard]);
  };

  return (
    <div className="imgsss">
      <div>
        <Navbar />
        <div>
          <Button variant="contained" color="success" onClick={handleCreateGroup} style={{ marginLeft: '1300px', marginBottom: '-40px' }}>Create Group <AddIcon /></Button>
        </div>
        <div className="card-container">
          <CardRow>
            {cardsData.map((card) => (
              <Card key={card.id} className="card">
                <CardHeader style={{ marginBottom: '-20px' }}
                  avatar={
                    <Avatar sx={{ backgroundColor: 'black' }} aria-label="recipe">
                      {card.avatarLabel}
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon style={{ color: 'black' }} />
                    </IconButton>
                  }
                  title={card.title}
                />
                <CardMedia
                  height="150"
                >
                  <PeopleOutlineIcon style={{ fontSize: '120px', marginLeft: '30px', marginBottom: '-30px', color: 'grey' }} />
                </CardMedia>
                <CardContent>
                  <Typography variant="body2" color="black" style={{ marginBottom: '10px' }}>
                    {card.note}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <BookmarkIcon style={{ color: 'crimson' }} />
                  </IconButton>
                  <IconButton aria-label="share">
                    <EditIcon style={{ color: 'crimson' }} />
                  </IconButton>
                  <ExpandMore
                    expand={false}
                    onClick={() => { }}
                    aria-expanded={false}
                    aria-label="show more"
                  >
                
                  </ExpandMore>
                </CardActions>
                <Collapse in={false} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>{card.method}</Typography>
                  </CardContent>
                </Collapse>
              </Card>
            ))}
          </CardRow>
        </div>
      </div>
    </div>
  );
}

// import EditIcon from '@mui/icons-material/Edit';
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import BookmarkIcon from '@mui/icons-material/Bookmark';
// import AddIcon from '@mui/icons-material/Add';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
// import './Group.css';
// import axios from 'axios';
// import Navbar from './Navbar';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// const initialCards = [
//   {
//     id: 1,
//     avatarLabel: 'F',
//     title: 'Friends',
//     note: '',
//     method: '',
//   },
//   {
//     id: 2,
//     avatarLabel: 'Fam',
//     title: 'Family',
//     note: '',
//     method: '',
//   },
//   {
//     id: 3,
//     avatarLabel: 'O',
//     title: 'Office',
//     note: '',
//     method: '',
//   },
// ];

// const CardRow = styled('div')(({ theme }) => ({
//   display: 'flex',
//   gap: theme.spacing(2),
//   flexWrap: 'wrap',
//   justifyContent: 'space-evenly',
// }));

// const GroupPage = () => {
//   const navigate = useNavigate();

//   const [cardsData, setCardsData] = useState(initialCards);
//   const [contacts, setContacts] = useState([]);

//   useEffect(() => {
//     fetchContacts();
//   }, []);

//   const fetchContacts = async () => {
//     try {
//       const token = localStorage.getItem('jwtToken');
//       if (!token) {
//         console.error('You need to log in to view contacts.');
//         return;
//       }

//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       const response = await axios.get('http://localhost:8181/api/v1/demo/getcontacts', config); // Replace with your backend API endpoint
//       setContacts(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleCreateGroup = () => {
//     // Generate a new card ID based on the current timestamp
//     const newCardId = Date.now();
//     // Create the new card data object
//     const newCard = {
//       id: newCardId,
//       avatarLabel: 'New',
//       title: 'New Group',
//       note: '',
//       method: '',
//     };
//     // Add the new card to the existing cardsData array
//     setCardsData([...cardsData, newCard]);
//   };

//   const groupContacts = (groupId) => {
//     // Filter the contacts based on the groupId and return the grouped contacts
//     return contacts.filter((contact) => contact.groupId === groupId);
//   };

//   return (
//     <div className="imgsss">
//       <div>
//         {/* Your Navbar component */}
//         <Navbar />
//         <div>
//           <Button
//             variant="contained"
//             color="success"
//             onClick={handleCreateGroup}
//             style={{ marginLeft: '1300px', marginBottom: '-40px' }}
//           >
//             Create Group <AddIcon />
//           </Button>
//         </div>
//         <div className="card-container">
//           <CardRow>
//             {cardsData.map((card) => (
//               <Card key={card.id} className="card">
//                 <CardHeader
//                   style={{ marginBottom: '-20px' }}
//                   avatar={
//                     <Avatar sx={{ backgroundColor: 'black' }} aria-label="recipe">
//                       {card.avatarLabel}
//                     </Avatar>
//                   }
//                   action={
//                     <IconButton aria-label="settings">
//                       <MoreVertIcon style={{ color: 'black' }} />
//                     </IconButton>
//                   }
//                   title={card.title}
//                 />
//                 <CardMedia height="150">
//                   <PeopleOutlineIcon
//                     style={{ fontSize: '120px', marginLeft: '30px', marginBottom: '-30px', color: 'grey' }}
//                   />
//                 </CardMedia>
//                 <CardContent>
//                   <Typography variant="body2" color="black" style={{ marginBottom: '10px' }}>
//                     {card.note}
//                   </Typography>
//                 </CardContent>
//                 <CardActions disableSpacing>
//                   <IconButton aria-label="add to favorites">
//                     <BookmarkIcon style={{ color: 'crimson' }} />
//                   </IconButton>
//                   <IconButton aria-label="share">
//                     <EditIcon style={{ color: 'crimson' }} />
//                   </IconButton>
//                   <ExpandMore
//                     expand={false}
//                     onClick={() => {}}
//                     aria-expanded={false}
//                     aria-label="show more"
//                   >
//                     {/* <ExpandMoreIcon /> */}
//                   </ExpandMore>
//                 </CardActions>
//                 <Collapse in={false} timeout="auto" unmountOnExit>
//                   <CardContent>
//                     <Typography paragraph>Method:</Typography>
//                     <Typography paragraph>{card.method}</Typography>
//                   </CardContent>
//                 </Collapse>
//               </Card>
//             ))}
//           </CardRow>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GroupPage;


// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';

// // // const Group = () => {
// // //   const [groupName, setGroupName] = useState('');
// // //   const [contacts, setContacts] = useState([]);

// // //   // Replace 'YOUR_BACKEND_API_URL' with the actual URL of your backend API
// // //   const API_URL = 'http://localhost:8181/api/v1/demo';

// // //   const headers = {
// // //     Authorization: 'Bearer ' + localStorage.getItem('jwt'), // Assuming you store the JWT in localStorage
// // //   };

// // //   const handleInputChange = (event) => {
// // //     setGroupName(event.target.value);
// // //   };

// // //   const handleGetGroup = () => {
// // //     axios.get(`${API_URL}/${groupName}`, { headers })
// // //       .then((response) => {
// // //         if (response.data) {
// // //           setContacts(response.data.contacts);
// // //         } else {
// // //           // Handle group not found
// // //           setContacts([]);
// // //         }
// // //       })
// // //       .catch((error) => {
// // //         // Handle errors
// // //         console.error(error);
// // //       });
// // //   };

// // //   const handleDeleteGroup = () => {
// // //     axios.delete(`${API_URL}/${groupName}`, { headers })
// // //       .then(() => {
// // //         // Handle successful deletion
// // //         setContacts([]);
// // //       })
// // //       .catch((error) => {
// // //         // Handle errors
// // //         console.error(error);
// // //       });
// // //   };

// // //   useEffect(() => {
// // //     // You can add additional logic or data fetching here when the component mounts
// // //     // For example, you might want to fetch a list of available groups.
// // //   }, []);

// // //   return (
// // //     <div>
// // //       <h2>Group Component</h2>
// // //       <div>
// // //         <label>Group Name:</label>
// // //         <input type="text" value={groupName} onChange={handleInputChange} />
// // //         <button onClick={handleGetGroup}>Get Group</button>
// // //         <button onClick={handleDeleteGroup}>Delete Group</button>
// // //       </div>
// // //       <div>
// // //         <h3>Contacts in Group:</h3>
// // //         <ul>
// // //           {contacts.map((contact) => (
// // //             <li key={contact.contact_id}>
// // //               Name: {contact.name}, Phone: {contact.phoneNo}, Email: {contact.email}
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Group;


// // import React, { useState, useEffect } from "react";
// // import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
// // import { HiOutlineUserAdd } from 'react-icons/hi';
// // import "./Group.css"; // Custom CSS for styling

// // const Group = () => {
// //   const [groups, setGroups] = useState([]);

// //   useEffect(() => {
// //     // Assuming you have a function to fetch groups and contacts data from the backend
// //     fetchGroupsData();
// //   }, []);

// //   const fetchGroupsData = async () => {
// //     try {
// //       // Make an API request to fetch groups and their contacts from the backend
// //       const response = await fetch("http://localhost:8181/api/v1/demo/getgroups");
// //       const data = await response.json();
// //       setGroups(data);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <div className="group-container">
// //       <h1>Contacts Grouped by Group Name</h1>
// //       {groups.map((group) => (
// //         <div key={group.groupId} className="group">
// //           <h2>{group.groupName}</h2>
// //           <TableContainer component={Paper}>
// //             <Table>
// //               <TableHead>
// //                 <TableRow>
// //                   <TableCell>Name</TableCell>
// //                   <TableCell>Number</TableCell>
// //                   <TableCell>Email</TableCell>
// //                   {/* Add other columns if needed */}
// //                 </TableRow>
// //               </TableHead>
// //               <TableBody>
// //                 {group.contacts.map((contact) => (
// //                   <TableRow key={contact.contact_id}>
// //                     <TableCell>{contact.name}</TableCell>
// //                     <TableCell>{contact.phoneNo}</TableCell>
// //                     <TableCell>{contact.email}</TableCell>
// //                     {/* Add other columns' data if needed */}
// //                   </TableRow>
// //                 ))}
// //               </TableBody>
// //             </Table>
// //           </TableContainer>
// //         </div>
// //       ))}
// //       <Button className="add-group-button" size="large" >
// //         <HiOutlineUserAdd /> Create Group
// //       </Button>
// //     </div>
// //   );
// // };

// // export default Group;

