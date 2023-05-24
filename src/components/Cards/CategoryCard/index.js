import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { getCategoryLogo } from "../../../utils/image";
import { CategoryCard as StyledCategoryCard } from "./styles";

const CategoryCard = ({ category }) => (
  <StyledCategoryCard data-test="category-card">
    <Card sx={{ width: "100%" }} component={Link} to={`/category/${category?.slug}`}>
      <CardContent>
        <img
          src={getCategoryLogo(category?.name)}
          alt={category?.name}
          data-test="category-image"
        />
        <Typography variant="h5" component="h5" data-test="category-name">
          {category?.name}
        </Typography>
      </CardContent>
    </Card>
  </StyledCategoryCard>
);

CategoryCard.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }),
};

export default CategoryCard;
