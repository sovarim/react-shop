import { createSelector } from 'redux-orm';
import orm from 'store/models';
export const categoriesSelector = createSelector(orm, (s) => s.Category.all().toRefArray());

export const productsSelector = createSelector(orm, (s) => {
  const products = s.Product.all()
    .toModelArray()
    .map((product) => {
      const variationProperties = product.variations?.toModelArray().reduce(
        (_, v) =>
          _.concat(
            //@ts-ignore
            v.property_values?.toModelArray().map((propertyValue) => ({
              id: propertyValue.id,
              variation_property: propertyValue.variation_property?.ref,
              value_float: propertyValue.value_float,
              value_int: propertyValue.value_int,
              value_string: propertyValue.value_string,
            })),
          ),
        [],
      );

      return {
        ...product.ref,
        images: product.images?.toRefArray(),
        min_price: product.variations?.orderBy((v) => v.price, 'asc').toRefArray()[0]?.price,
        variation_properties: variationProperties,
      };
    });

  return products;
});
