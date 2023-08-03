import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

interface Person {
  Name: string;
  BirthDate: string;
  Gender: string;
  Role: string;
  Image: string;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const RecipeReviewCard: React.FC<Person> = ({ Name, BirthDate, Gender, Role, Image }) => {
  const formattedBirthDate = formatDate(BirthDate);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={Name} subheader={formattedBirthDate} />
      <CardMedia component="img" height="194" image={Image} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {Gender}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Role}
        </Typography>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
  );
};

export default RecipeReviewCard;
