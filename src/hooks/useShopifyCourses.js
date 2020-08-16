import { useStaticQuery, graphql } from "gatsby";
import { parse } from "date-fns";
import fr from "date-fns/locale/fr";

const useShopifyCourses = () => {
  const data = useStaticQuery(graphql`
    query {
      allShopifyProduct {
        nodes {
          id
          title
          description
          variants {
            price
            shopifyId
          }
          productType
        }
      }
    }
  `);
  const courses = data.allShopifyProduct.nodes
    .map((product) => {
      const titleElements = product.title.split("-");
      if (titleElements.length !== 2) {
        return false;
      }
      const yogaType = titleElements[0].trim();
      const datetime = parse(
        titleElements[1].trim(),
        "dd/MM/yyyy@HH:mm",
        new Date(),
        {
          locale: fr,
        },
      );

      const descriptionElements = product.description.split("-");
      const duration =
        descriptionElements.length === 2
          ? descriptionElements[0].trim()
          : undefined;
      const description = descriptionElements[
        descriptionElements.length === 2 ? 1 : 0
      ].trim();
      return {
        id: product.id,
        yogaType,
        duration,
        description,
        datetime,
        price: product.variants[0].price,
        category: product.productType,
        shopifyId: product.variants[0].shopifyId,
      };
    })
    .filter((course) => !!course);
  return courses;
};

export default useShopifyCourses;
