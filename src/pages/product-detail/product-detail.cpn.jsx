const ProductDetail = ({ match }) => {
  return (
    <section>
      <h1>Product Detail</h1>
      <p>{match.params.ProductId}</p>
    </section>
  );
};

export default ProductDetail;
