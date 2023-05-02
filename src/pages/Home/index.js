import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import { CategoryList } from './styles';
import api from '../../services/api';
import { getCategoryLogo } from '../../utils/image';


export default function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('category');

      setCategories(response.data);
    }
    loadCategories();
  }, []);

  return (
    <CategoryList>
      {categories.map(category => (
        <Card key={String(category.id)} sx={{ width: '100%' }} component={Link} to={`/category/${category.slug}`}>
          <CardContent>
            <img src={getCategoryLogo(category.name)} alt={category.name} />
            <Typography variant="h5" component="h5">
              {category.name}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </CategoryList>
  );
}