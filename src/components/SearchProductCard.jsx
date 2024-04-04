export const ProductCard = ({ handleProductQuickView, products }) => {
  return (
    <>
      {products.length > 0 ? (
        products.map((value, index) => {
          return (
            <div
              key={index}
              className="card w-full sm:w-64 bg-base-100 shadow-xl mx-auto mb-5"
            >
              <figure className="w-full h-full sm:h-56">
                <img
                  className="w-full h-72 sm:h-full object-cover object-center"
                  src={value.imgSrc}
                />
              </figure>
              <div className="card-body bg-custom rounded-b-2xl">
                <h1 className="card-title text-sm">{value.name}</h1>
                <p>{value.price.toFixed(2)} $</p>
                <div>
                  {value.colors.map((color, colorIndex) => (
                    <p
                      key={colorIndex}
                      className={`w-5 h-5 object-contain ${color.class} rounded-full border-blue-100 my-4 border-2 inline-block mr-2`}
                    ></p>
                  ))}
                </div>
                <div className="card-actions">
                  <div
                    className="badge badge-outline cursor-pointer hover:bg-first"
                    onClick={() => handleProductQuickView(value)}
                  >
                    view
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h1>We couldn't find your items in our storage</h1>
      )}
    </>
  );
};
