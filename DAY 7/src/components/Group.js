import * as React from 'react';
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
// import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
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

const cardsData = [
  {
    id: 1,
    avatarLabel: 'F',
    title: 'Friends',
    note: '',
    method: "",
  },
  {
    id: 2,
    avatarLabel: 'Fam',
    title: 'Family',
    note: '',
    method: "",
  },
  {
    id: 3,
    avatarLabel: 'O',
    title: 'Office',
    note: '',
    method: "",
  },
  {
    id: 4,
    avatarLabel: 'G',
    title: 'Game',
    note: '',
    method: "",
  },
  {
    id: 5,
    avatarLabel: 'ngo',
    title: 'NGO',
    note: '',
    method: "",
  }
];

const CardRow = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}));

export default function GroupPage() {
  return (
    <div className="imgsss">
    <div >
        <div>
      <Navbar/>
      <div>
      <Button variant="contained" color="success" style={{marginLeft: '1300px',marginBottom: '-40px'}}>Create Group <AddIcon/></Button>
      </div>
    <div className="card-container">
      <CardRow>
        {cardsData.map((card) => (
          <Card key={card.id} sx={{ width: '220px', marginLeft: '30px',marginTop: '100px',backgroundColor: '#f5f5f5',color:'black',height:'270px'}}>
            <CardHeader style={{marginBottom:'-20px' }}
              avatar={
                <Avatar sx={{ backgroundColor: 'black' }} aria-label="recipe">
                  {card.avatarLabel}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon  style={{color: 'black' }}/>
                </IconButton>
              }
              title={card.title}
            />
            <CardMedia
              height="150"
            >
              <PeopleOutlineIcon style={{ fontSize: '120px', marginLeft:'30px',marginBottom:'-30px', color: 'grey' }}/>
            </CardMedia>
            <CardContent>
              <Typography variant="body2" color="black" style={{marginBottom: '10px' }}>
                {card.note}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <BookmarkIcon style={{color: 'crimson' }}/>
              </IconButton>
              <IconButton aria-label="share">
                <EditIcon  style={{color: 'crimson' }}/>
              </IconButton>
              <ExpandMore
                expand={false}
                onClick={() => {}}
                aria-expanded={false}
                aria-label="show more"
              >
                {/* <ExpandMoreIcon /> */}
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
    </div>
  );
}