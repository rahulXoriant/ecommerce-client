import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { getCategoryLogo } from "../../../utils/image";
import { CategoryCard as StyledCategoryCard } from "./styles";

const CategoryCard = ({ category }) => (
  <StyledCategoryCard>
    <Card
      key={String(category.id)}
      sx={{ width: "100%" }}
      component={Link}
      to={`/category/${category.slug}`}
    >
      <CardContent>
        <img src={getCategoryLogo(category.name)} alt={category.name} />
        <Typography variant="h5" component="h5">
          {category.name}
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