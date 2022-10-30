import "./categories.styles.scss"
import CategoryItem from "./../category-item/category-item.component";
const Categories = ({categories})=> {
    const categoryEls = categories.map(({ title, id, imageUrl }) => (
        <CategoryItem
          key={id}
          title={title}
          imageUrl={imageUrl}
        />
      ))
      console.log(categoryEls);

    return (
      <div className="categories-container">
        {categoryEls}
      </div>
    )
}
export default Categories