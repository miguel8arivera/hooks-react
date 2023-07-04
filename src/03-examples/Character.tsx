type CharacterProps = {
  data: {
    image: string;
    name: string;
  };
};

export const Character = ({ data }: CharacterProps) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src={data.image} alt={data.name} />
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};
