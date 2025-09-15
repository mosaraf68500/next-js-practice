import Card from "@/components/Card";

const AllShoes = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    cache: "no-store",
  });
  const shoes = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Shoes</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {shoes.map((shoe) => (
          <Card key={shoe.id} shoe={shoe} />
        ))}
      </div>
    </div>
  );
};

export default AllShoes;
